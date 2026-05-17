const SYSTEM_PROMPT = `
Sei una guida educativa e motivazionale per studenti della scuola secondaria.
Aiuti lo studente a riflettere su studio, motivazione, organizzazione, ansia scolastica, fiducia e metodo.
Non fai diagnosi, non offri terapia, non sostituisci psicologi, medici, docenti, genitori o servizi di emergenza.
Non chiedere dati personali come nome, cognome, scuola, classe, indirizzo, email, numeri di telefono o informazioni sanitarie dettagliate.
Rispondi in italiano, con tono semplice, rispettoso, concreto e incoraggiante.
Usa massimo 150 parole.
Struttura la risposta con:
1. una breve frase di comprensione;
2. una strategia pratica;
3. un micro-passo da fare entro 10 minuti;
4. una missione consigliata tra: Obiettivi SMART, Gestione dell'ansia, Autoefficacia, Pensiero incrementale, Valore dello studio, Gestione tempo, Autostima, Metodo di studio.
Se lo studente esprime disagio intenso, pensieri di farsi del male, pericolo, violenza o emergenza, invitalo subito a parlarne con un adulto di fiducia e a contattare i servizi di emergenza.
`.trim();

const CRISIS_PATTERNS = [
  /suicid/i,
  /ammazzarmi/i,
  /uccidermi/i,
  /farmi del male/i,
  /non voglio vivere/i,
  /violenza/i,
  /abuso/i,
  /pericolo/i,
];

function json(res, status, body) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(body));
}

function extractText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const parts = [];
  for (const item of data.output || []) {
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) {
        parts.push(content.text);
      }
    }
  }
  return parts.join("\n").trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { error: "Metodo non consentito." });
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return json(res, 500, {
      error: "La guida IA non e' ancora configurata. Aggiungi OPENAI_API_KEY nelle variabili ambiente di Vercel.",
    });
  }

  let body;
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    return json(res, 400, { error: "Richiesta non valida." });
  }

  const message = String(body?.message || "").trim();
  const context = String(body?.context || "").trim();

  if (!message) {
    return json(res, 400, { error: "Scrivi una difficolta' scolastica concreta." });
  }

  if (message.length > 1200) {
    return json(res, 400, { error: "Messaggio troppo lungo. Prova a riassumerlo in poche frasi." });
  }

  if (CRISIS_PATTERNS.some((pattern) => pattern.test(message))) {
    return json(res, 200, {
      reply:
        "Mi dispiace che tu stia vivendo qualcosa di cosi' pesante. Questa app non puo' gestire situazioni di emergenza o pericolo. Parla subito con un adulto di fiducia vicino a te e, se c'e' un rischio immediato, contatta i servizi di emergenza del tuo Paese.",
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-5.4-mini",
        input: [
          {
            role: "system",
            content: SYSTEM_PROMPT,
          },
          {
            role: "user",
            content: `Contesto opzionale: ${context || "nessuno"}\n\nDifficolta' dello studente: ${message}`,
          },
        ],
        max_output_tokens: 280,
        store: false,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return json(res, response.status, {
        error: data?.error?.message || "La guida IA non e' disponibile in questo momento.",
      });
    }

    return json(res, 200, {
      reply: extractText(data) || "Non sono riuscito a generare una risposta. Prova a riformulare la richiesta.",
    });
  } catch {
    return json(res, 500, { error: "Errore temporaneo della guida IA. Riprova tra poco." });
  }
}
