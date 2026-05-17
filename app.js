const questions = [
  { text: "Ti capita di sapere cosa dovresti fare, ma di rimandare l'inizio?", area: "start" },
  { text: "Ti organizzi lo studio in modo regolare?", area: "start", reverse: true },
  { text: "Ti sembra che il tuo modo di studiare non sia efficace?", area: "method" },
  { text: "Trovi difficile iniziare perche' l'argomento non ti interessa?", area: "interest" },
  { text: "Ti capita di partecipare poco perche' le attivita' non ti stimolano?", area: "interest" },
  { text: "Preferisci fare molte altre cose prima di studiare?", area: "interest" },
  { text: "Ti capita di pensare che quello che studi non serva nella vita reale?", area: "value" },
  { text: "Ti chiedi spesso a cosa servano gli argomenti trattati in classe?", area: "value" },
  { text: "Ti senti piu' motivato quando colleghi cio' che studi al mondo reale?", area: "value", reverse: true },
  { text: "Durante le lezioni perdi facilmente la concentrazione?", area: "attention" },
  { text: "Alcune situazioni ti rendono difficile seguire con attenzione?", area: "attention" },
  { text: "Ti distrai facilmente quando devi completare un compito?", area: "attention" },
  { text: "Ti capita di pensare di non essere capace di affrontare un argomento?", area: "efficacy" },
  { text: "Dopo un brutto voto pensi che significhi che non sei abbastanza bravo?", area: "esteem" },
  { text: "Ti senti piu' motivato quando il compito e' strutturato come una sfida?", area: "smart", reverse: true },
  { text: "Ti capita di evitare un compito o un'interrogazione per paura di sbagliare?", area: "anxiety" },
  { text: "Provi ansia prima di una verifica o interrogazione?", area: "anxiety" },
  { text: "Ti senti meno motivato quando pensi di non poter fare bene?", area: "efficacy" },
  { text: "Ti scoraggi quando incontri difficolta' nello studio?", area: "growth" },
  { text: "Quando un compito e' complicato pensi di lasciar perdere?", area: "growth" },
  { text: "Ti capita di pensare che non valga la pena impegnarti perche' non otterrai buoni risultati?", area: "esteem" },
];

const areas = {
  start: {
    label: "partire con piu' facilita'",
    mission: "time",
    message: "Il primo ostacolo sembra essere l'avvio: quando il compito appare grande, conviene ridurlo a una prima mossa molto piccola.",
  },
  method: {
    label: "metodo di studio",
    mission: "method",
    message: "Potresti ottenere molto migliorando il modo in cui studi, non solo aumentando il tempo passato sui libri.",
  },
  interest: {
    label: "interesse e coinvolgimento",
    mission: "value",
    message: "Quando lo studio sembra lontano dai tuoi interessi, serve costruire ponti con qualcosa che abbia senso per te.",
  },
  value: {
    label: "valore dello studio",
    mission: "value",
    message: "La tua motivazione puo' crescere se trovi un perche' piu' concreto dietro cio' che stai studiando.",
  },
  attention: {
    label: "attenzione e concentrazione",
    mission: "time",
    message: "La sfida sembra riguardare la gestione dell'attenzione: meglio lavorare con blocchi brevi e obiettivi visibili.",
  },
  efficacy: {
    label: "autoefficacia",
    mission: "efficacy",
    message: "Potresti avere bisogno di vedere piu' chiaramente quali azioni dipendono da te e quali strategie puoi provare.",
  },
  esteem: {
    label: "autostima",
    mission: "esteem",
    message: "Il risultato scolastico non definisce il tuo valore. Qui puoi allenarti a usare parole piu' giuste verso di te.",
  },
  smart: {
    label: "obiettivi sfidanti ma concreti",
    mission: "smart",
    message: "Le sfide funzionano meglio quando diventano obiettivi chiari, misurabili e abbastanza piccoli da iniziare.",
  },
  anxiety: {
    label: "gestione dell'ansia",
    mission: "anxiety",
    message: "L'ansia puo' far sembrare tutto enorme. La missione giusta e' ridurre il problema in passi preparabili.",
  },
  growth: {
    label: "pensiero incrementale",
    mission: "growth",
    message: "La difficolta' non dice che sei fermo: puo' indicare quale parte allenare e quale strategia cambiare.",
  },
};

const missions = [
  {
    id: "smart",
    title: "Obiettivi SMART",
    tag: "Piano",
    color: "linear-gradient(135deg, #2563eb, #0f9f7a)",
    intro: "Trasforma un desiderio vago in un obiettivo concreto, realistico e verificabile.",
    exercises: [
      ["Da vago a preciso", "Scrivi un obiettivo generico e trasformalo in una frase con cosa, quando e quanto."],
      ["Prossimo passo da 15 minuti", "Scegli una micro-azione che puoi iniziare oggi senza aspettare il momento perfetto."],
      ["Piano B", "Decidi cosa farai se salta il piano originale, cosi' un imprevisto non diventa una resa."],
      ["Segnale di riuscita", "Scrivi come capirai di aver completato davvero l'obiettivo."],
    ],
    prompt: "Il mio obiettivo SMART e': ... Lo faro' quando: ... Il piano B e': ...",
  },
  {
    id: "anxiety",
    title: "Gestione dell'ansia",
    tag: "Calma",
    color: "linear-gradient(135deg, #e84a7f, #f4b740)",
    intro: "Prepara verifiche e interrogazioni senza lasciare che l'ansia decida tutto.",
    exercises: [
      ["Che cosa temo davvero?", "Distingui evento, pensiero e paura. Spesso il blocco nasce dalla confusione tra questi tre livelli."],
      ["Pensiero utile", "Trasforma una frase bloccante in una frase realistica che ti aiuta ad agire."],
      ["Piano verifica", "Scegli tre argomenti prioritari, un ordine e una durata per il ripasso."],
      ["Reset da 90 secondi", "Respira, dai un nome a cio' che provi e scegli una sola azione concreta."],
    ],
    prompt: "La cosa che temo e': ... Il pensiero utile alternativo e': ... La prima azione e': ...",
  },
  {
    id: "efficacy",
    title: "Autoefficacia",
    tag: "Fiducia",
    color: "linear-gradient(135deg, #0f9f7a, #2f9e44)",
    intro: "Allena la sensazione di poter incidere sul tuo apprendimento con strategie e tentativi.",
    exercises: [
      ["Tre prove", "Recupera tre momenti in cui hai superato una difficolta', anche piccola."],
      ["Cosa dipende da me", "Separa cio' che controlli da cio' che non controlli."],
      ["Strategia, non talento", "Sostituisci 'sono portato?' con 'quale strategia provo adesso?'."],
      ["Tentativo utile", "Progetta un esperimento di studio breve, non una promessa enorme."],
    ],
    prompt: "Una cosa che posso controllare oggi e': ... La strategia che provo e': ...",
  },
  {
    id: "growth",
    title: "Pensiero incrementale",
    tag: "Crescita",
    color: "linear-gradient(135deg, #7048e8, #2563eb)",
    intro: "Impara a leggere errore e fatica come informazioni per allenarti meglio.",
    exercises: [
      ["Aggiungi ancora", "Trasforma 'non ci riesco' in 'non ci riesco ancora'."],
      ["Errore = informazione", "Chiediti quale parte specifica richiede allenamento."],
      ["1% meglio", "Scegli un miglioramento minuscolo ma visibile entro domani."],
      ["Strategia alternativa", "Se un metodo non funziona, cambia metodo prima di giudicare te stesso."],
    ],
    prompt: "Non riesco ancora a: ... L'informazione utile e': ... Il mio 1% sara': ...",
  },
  {
    id: "value",
    title: "Valore dello studio",
    tag: "Perche'",
    color: "linear-gradient(135deg, #f08c00, #0f9f7a)",
    intro: "Costruisci collegamenti tra materie, vita reale, interessi e futuro.",
    exercises: [
      ["Collega alla vita reale", "Trova un uso pratico, anche indiretto, di cio' che stai studiando."],
      ["Competenza nascosta", "Ogni materia allena anche abilita' trasversali: precisione, linguaggio, logica, memoria."],
      ["Studio per", "Scrivi un motivo che non sia solo il voto."],
      ["Materia ponte", "Collega un argomento a un interesse personale o a una scelta futura."],
    ],
    prompt: "Questa materia puo' servirmi per: ... La competenza nascosta e': ...",
  },
  {
    id: "time",
    title: "Gestione tempo",
    tag: "Ritmo",
    color: "linear-gradient(135deg, #15aabf, #2563eb)",
    intro: "Rendi lo studio meno caotico usando blocchi brevi, priorita' e prime mosse.",
    exercises: [
      ["Mappa di oggi", "Scrivi impegni, tempo disponibile e compito piu' importante."],
      ["Blocco da 25 minuti", "Scegli un'attivita' e una pausa gia' definita."],
      ["Primi 5 minuti", "Decidi esattamente cosa farai appena inizi."],
      ["Priorita'", "Dividi cio' che e' urgente, importante, rimandabile o eliminabile."],
    ],
    prompt: "Oggi studio dalle ... alle ... La prima cosa che faccio e': ...",
  },
  {
    id: "esteem",
    title: "Autostima",
    tag: "Valore",
    color: "linear-gradient(135deg, #e84a7f, #7048e8)",
    intro: "Distingui il tuo valore personale da un voto, un errore o una giornata difficile.",
    exercises: [
      ["Non sei il voto", "Descrivi il voto come informazione su una prova, non come giudizio su di te."],
      ["Parla a un amico", "Riscrivi una frase dura come la diresti a una persona a cui vuoi bene."],
      ["Cose che so fare", "Elenca competenze scolastiche e non scolastiche."],
      ["Frase piu' giusta", "Trova una frase realistica: ne' finta positiva, ne' distruttiva."],
    ],
    prompt: "Una frase piu' giusta su di me e': ... Una cosa che posso imparare e': ...",
  },
  {
    id: "method",
    title: "Metodo di studio",
    tag: "Tecnica",
    color: "linear-gradient(135deg, #182034, #0f9f7a)",
    intro: "Studia in modo piu' attivo: capire, ricordare e usare sono tre passaggi diversi.",
    exercises: [
      ["Come studio adesso?", "Osserva se leggi, sottolinei, ripeti, schematizzi, fai esercizi o ti testi."],
      ["Capire, ricordare, usare", "Scegli una strategia per ciascun livello."],
      ["Mini test", "Spiega senza guardare: se ti blocchi, hai trovato il punto da riprendere."],
      ["Strategia per materia", "Una materia pratica richiede esercizi; una teorica richiede parole chiave e collegamenti."],
    ],
    prompt: "Per questa materia usero' questa strategia: ... Mi testero' cosi': ...",
  },
];

const questionsEl = document.querySelector("#questions");
const form = document.querySelector("#quizForm");
const resultEl = document.querySelector("#result");
const missionsGrid = document.querySelector("#missionsGrid");
const missionDetail = document.querySelector("#mission-detail");
const aiInput = document.querySelector("#aiInput");
const aiButton = document.querySelector("#aiButton");
const aiResponse = document.querySelector("#aiResponse");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderQuestions() {
  questionsEl.innerHTML = questions
    .map((question, index) => {
      const options = [1, 2, 3, 4, 5]
        .map(
          (value) => `
            <label>
              <input type="radio" name="q${index}" value="${value}" required />
              ${value}
            </label>
          `,
        )
        .join("");

      return `
        <fieldset class="question-card">
          <legend>${index + 1}. ${question.text}</legend>
          <div class="scale" aria-label="Scala da 1 a 5">${options}</div>
        </fieldset>
      `;
    })
    .join("");
}

function renderMissions() {
  missionsGrid.innerHTML = missions
    .map(
      (mission) => `
        <button class="mission-card" type="button" data-mission="${mission.id}" style="background: ${mission.color}">
          <span class="tag">${mission.tag}</span>
          <span>
            <h3>${mission.title}</h3>
            <p>${mission.intro}</p>
          </span>
        </button>
      `,
    )
    .join("");
}

function calculateResult(formData) {
  const totals = {};

  questions.forEach((question, index) => {
    const raw = Number(formData.get(`q${index}`));
    const score = question.reverse ? 6 - raw : raw;
    if (!totals[question.area]) {
      totals[question.area] = { total: 0, count: 0 };
    }
    totals[question.area].total += score;
    totals[question.area].count += 1;
  });

  return Object.entries(totals)
    .map(([area, value]) => ({ area, score: value.total / value.count }))
    .sort((a, b) => b.score - a.score);
}

function showResult(results) {
  const primary = results[0];
  const secondary = results[1];
  const primaryArea = areas[primary.area];
  const secondaryArea = areas[secondary.area];
  const mission = missions.find((item) => item.id === primaryArea.mission);

  resultEl.classList.remove("hidden");
  resultEl.innerHTML = `
    <p class="eyebrow">Risultato del check</p>
    <h3>Oggi potresti partire da: ${primaryArea.label}</h3>
    <p>${primaryArea.message}</p>
    <p>Seconda area da tenere d'occhio: <strong>${secondaryArea.label}</strong>.</p>
    <p>Missione consigliata: <strong>${mission.title}</strong>.</p>
    <div class="result-actions">
      <button class="button primary" type="button" data-open-mission="${mission.id}">Apri missione</button>
      <button class="button secondary" type="button" data-copy-result>Copia riepilogo</button>
    </div>
  `;

  resultEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

function openMission(id) {
  const mission = missions.find((item) => item.id === id);
  if (!mission) return;

  const exercises = mission.exercises
    .map(
      ([title, body], index) => `
        <article class="exercise">
          <h3>${index + 1}. ${title}</h3>
          <p>${body}</p>
          <textarea rows="3" placeholder="Scrivi qui la tua risposta..."></textarea>
        </article>
      `,
    )
    .join("");

  missionDetail.classList.remove("hidden");
  missionDetail.innerHTML = `
    <p class="eyebrow">Missione attiva</p>
    <h2>${mission.title}</h2>
    <p>${mission.intro}</p>
    <div class="exercise-grid">${exercises}</div>
    <article class="exercise">
      <h3>Riepilogo missione</h3>
      <p>${mission.prompt}</p>
      <textarea rows="4" placeholder="Raccogli qui il tuo piano finale..."></textarea>
    </article>
  `;
  missionDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function copyResult() {
  const text = resultEl.innerText.replace(/\n{3,}/g, "\n\n");
  navigator.clipboard?.writeText(text);
}

function generateLocalFallback(input) {
  const lower = input.toLowerCase();

  if (!input.trim()) {
    return "Scrivi una difficolta' concreta, anche breve. Per esempio: 'non riesco a iniziare', 'ho ansia per una verifica', oppure 'non vedo il senso di questa materia'.";
  }

  if (lower.includes("ansia") || lower.includes("verifica") || lower.includes("interrogazione") || lower.includes("paura")) {
    return "Capisco: quando una prova si avvicina, la mente puo' ingrandire tutto. Prova cosi': scegli solo 3 argomenti prioritari, dedica 25 minuti al primo e chiudi con un mini test senza guardare. Missione consigliata: Gestione dell'ansia + Metodo di studio.";
  }

  if (lower.includes("iniziare") || lower.includes("rimando") || lower.includes("procrast")) {
    return "Il blocco dell'inizio si batte riducendo il compito. Non puntare a 'studiare tutto': apri il materiale, scegli una pagina o un esercizio e lavora per 5 minuti. Dopo i 5 minuti decidi il passo successivo. Missione consigliata: Gestione tempo.";
  }

  if (lower.includes("capace") || lower.includes("portato") || lower.includes("bravo")) {
    return "Questa frase sembra parlare di capacita', ma forse il punto e' la strategia. Prova a chiederti: quale parte specifica non funziona ancora? Quale esercizio o spiegazione alternativa posso usare? Missione consigliata: Autoefficacia + Pensiero incrementale.";
  }

  if (lower.includes("serve") || lower.includes("senso") || lower.includes("inutile")) {
    return "Quando non vedi il senso, la motivazione cala. Cerca una connessione pratica: quale competenza nascosta stai allenando? Precisione, linguaggio, logica, memoria, autonomia? Missione consigliata: Valore dello studio.";
  }

  return "Proviamo a renderla piu' piccola: scrivi qual e' la prima azione visibile che puoi fare in 10 minuti. Poi scegli una missione tra Obiettivi SMART, Gestione tempo o Metodo di studio. Un passo concreto vale piu' di una promessa enorme.";
}

async function generateAiAdvice(input) {
  if (!input.trim()) return generateLocalFallback(input);

  const response = await fetch("/api/mentor", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: input,
      context: "Web app gratuita senza login per motivazione scolastica, metodo di studio e missioni guidate.",
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "La guida IA non e' disponibile in questo momento.");
  }
  return data.reply || generateLocalFallback(input);
}

renderQuestions();
renderMissions();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  showResult(calculateResult(data));
});

form.addEventListener("reset", () => {
  resultEl.classList.add("hidden");
  resultEl.innerHTML = "";
});

document.addEventListener("click", (event) => {
  const missionButton = event.target.closest("[data-mission]");
  const openMissionButton = event.target.closest("[data-open-mission]");
  const copyButton = event.target.closest("[data-copy-result]");

  if (missionButton) openMission(missionButton.dataset.mission);
  if (openMissionButton) openMission(openMissionButton.dataset.openMission);
  if (copyButton) copyResult();
});

aiButton.addEventListener("click", async () => {
  aiButton.disabled = true;
  aiButton.textContent = "Sto pensando...";
  aiResponse.innerHTML = `
    <h3>Consiglio generato da IA</h3>
    <p>Sto preparando una strategia breve e concreta...</p>
  `;

  try {
    const advice = await generateAiAdvice(aiInput.value);
    aiResponse.innerHTML = `
      <h3>Consiglio generato da IA</h3>
      <p>${escapeHtml(advice)}</p>
      <p class="helper">Promemoria: non inserire dati personali. Se il disagio e' intenso, parlane con un adulto di fiducia o con un professionista.</p>
    `;
  } catch (error) {
    aiResponse.innerHTML = `
      <h3>Guida IA non disponibile</h3>
      <p>${escapeHtml(error.message)}</p>
      <p>${escapeHtml(generateLocalFallback(aiInput.value))}</p>
      <p class="helper">Quando la chiave API sara' configurata su Vercel, questa risposta arrivera' dalla guida IA reale.</p>
    `;
  } finally {
    aiButton.disabled = false;
    aiButton.textContent = "Chiedi una strategia";
  }
});
