# Sblocca il tuo Potenziale

Web app gratuita per studenti: check motivazionale, missioni di studio e guida IA educativa.

## Funzioni

- Accesso libero, senza login.
- Nessun profilo studente.
- Nessun salvataggio permanente delle risposte.
- Check motivazionale da 21 domande.
- Missioni su obiettivi SMART, ansia, autoefficacia, pensiero incrementale, valore dello studio, gestione tempo, autostima e metodo di studio.
- Guida IA tramite funzione server `/api/mentor`.

## Pubblicazione su Vercel

1. Crea un repository GitHub con questi file.
2. Importa il repository su Vercel.
3. Nelle impostazioni del progetto Vercel aggiungi la variabile ambiente per Anthropic:

```text
ANTHROPIC_API_KEY=la_tua_chiave_anthropic
```

4. Facoltativo: imposta il modello Anthropic:

```text
ANTHROPIC_MODEL=claude-sonnet-4-5-20250929
```

5. Pubblica.

## Alternativa OpenAI

La funzione IA supporta anche OpenAI. In quel caso usa:

```text
OPENAI_API_KEY=la_tua_chiave_openai
```

Facoltativo:

```text
OPENAI_MODEL=gpt-5.4-mini
```

Se sono presenti sia `ANTHROPIC_API_KEY` sia `OPENAI_API_KEY`, l'app usa Anthropic.

## Note privacy

La bozza privacy/cookie/disclaimer e' inclusa nel progetto, ma va verificata da un consulente privacy prima della pubblicazione definitiva, soprattutto per l'uso da parte di minorenni.

## Contatti

Per consulenze:

Andrea Bertelli, docente e psicologo  
humanperformancelab.app@gmail.com  
https://andrea-bertelli.vercel.app/
