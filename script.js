// ===== INSTÄLLNINGAR – ändra här =====
// Brevo-formuläret "Väntelista G.O.A.L" (lista: Väntelista, dubbel bekräftelse)
const BREVO_FORM_URL = "https://c833e7eb.sibforms.com/serve/MUIFAJQEnAJQcJ6dVRjLw6tnfmfMwnW88MTAZ0E1MY8TtG3jLUnMpqcr0BLbRsRjwwRYmdc-UR4gZqsVH0F-xJAlCqigz6zcEuWidcsyRnkdbVdmHjKyzhUAqmjfgt2cF1yGtH-KGWlkzkYLOYrc-EsFbtHM4wUa4n6c0hTOlLZU91uXHamjyKUFo_z9IrMfQz2YBK3_zixm5TQX6w==";
const LAUNCH_DATE = "";            // T.ex. "2027-03-01T18:00:00+01:00". Tom = ingen nedräkning visas.
const CONTACT_EMAIL = "[DIN-EPOST]"; // T.ex. "info@dindoman.se"
const INSTAGRAM_URL = "https://www.instagram.com/";  // Länk till ditt Instagram
// =====================================

const TEXT = {
  sv: {
    eyebrow: "Kommer snart",
    title: "Trasiga skor? Vi har en plan.",
    lead: "Något kommer som räddar dina fotbollsskor. Skriv upp dig och få veta först.",
    days: "dagar", hours: "timmar", mins: "minuter",
    emailLabel: "Din e-postadress",
    emailPlaceholder: "din@epost.se",
    button: "Skriv upp mig",
    consent: "Jag vill få ett mejl när det släpps. Läs vår",
    privacyLink: "integritetspolicy",
    privacyLinkCap: "Integritetspolicy",
    f1Big: "TÅN", f1: "Där nästan alla fotbollsskor släpper först.",
    f2Big: "3 000 KR", f2: "Vad ett par nya skor kan kosta.",
    f3: "Antal skor du borde behöva slänga för ett litet glapp.",
    followTitle: "Följ resan",
    followText: "Vi visar allt på TikTok och Instagram innan det släpps.",
    contact: "Kontakt",
    errEmail: "Skriv en giltig e-postadress.",
    errConsent: "Kryssa i rutan för att få mejlet.",
    errSend: "Något gick fel. Försök igen om en stund.",
    sending: "Skickar…",
    ok: "Nästan klart! Kolla din mejl och bekräfta din adress. 🤫"
  },
  en: {
    eyebrow: "Coming soon",
    title: "Broken boots? We have a plan.",
    lead: "Something is coming to save your football boots. Join the list and be the first to know.",
    days: "days", hours: "hours", mins: "minutes",
    emailLabel: "Your email address",
    emailPlaceholder: "you@email.com",
    button: "Join the list",
    consent: "I want an email when it drops. Read our",
    privacyLink: "privacy policy",
    privacyLinkCap: "Privacy policy",
    f1Big: "THE TOE", f1: "Where almost every football boot comes loose first.",
    f2Big: "$300", f2: "What a new pair of boots can cost.",
    f3: "Boots you should have to throw away over a small gap.",
    followTitle: "Follow the journey",
    followText: "We show everything on TikTok and Instagram before the drop.",
    contact: "Contact",
    errEmail: "Enter a valid email address.",
    errConsent: "Tick the box to get the email.",
    errSend: "Something went wrong. Please try again in a moment.",
    sending: "Sending…",
    ok: "Almost done! Check your email and confirm your address. 🤫"
  }
};

let lang = "sv";
try { lang = localStorage.getItem("goal-lang") || (navigator.language || "sv").slice(0, 2); } catch (e) {}
if (!TEXT[lang]) lang = "en";

function t(key) { return TEXT[lang][key] || TEXT.sv[key] || ""; }

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
}

document.querySelectorAll(".lang button").forEach(b => {
  b.addEventListener("click", () => {
    lang = b.dataset.lang;
    try { localStorage.setItem("goal-lang", lang); } catch (e) {}
    applyLang();
  });
});

// Hero image: show the fallback if bilder/sko.jpg doesn't exist yet
const heroImg = document.getElementById("heroImg");
if (heroImg && heroImg.complete && heroImg.naturalWidth === 0) heroImg.remove();

// Countdown
function startCountdown() {
  if (!LAUNCH_DATE) return;
  const end = new Date(LAUNCH_DATE).getTime();
  if (isNaN(end)) return;
  const box = document.getElementById("countdown");
  const pad = n => String(n).padStart(2, "0");
  const tick = () => {
    const diff = Math.max(0, end - Date.now());
    document.getElementById("cd-days").textContent = pad(Math.floor(diff / 86400000));
    document.getElementById("cd-hours").textContent = pad(Math.floor(diff / 3600000) % 24);
    document.getElementById("cd-mins").textContent = pad(Math.floor(diff / 60000) % 60);
  };
  box.hidden = false;
  tick();
  setInterval(tick, 30000);
}

// Waitlist form
const form = document.getElementById("signup");
const msg = document.getElementById("msg");
const submit = document.getElementById("submit");

function show(text, ok) { msg.textContent = text; msg.className = "msg " + (ok ? "ok" : "err"); }

form.addEventListener("submit", async e => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const consent = document.getElementById("consent").checked;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return show(t("errEmail"), false);
  if (!consent) return show(t("errConsent"), false);
  submit.disabled = true;
  submit.textContent = t("sending");
  try {
    // Brevo tar emot formuläret som vanliga formulärfält. Svaret går inte att läsa
    // från en annan domän, så vi skickar med "no-cors" och visar klart-meddelandet.
    const body = new URLSearchParams({ EMAIL: email, email_address_check: "", locale: "en" });
    await fetch(BREVO_FORM_URL, { method: "POST", mode: "no-cors", body });
    form.reset();
    show(t("ok"), true);
  } catch (err) {
    show(t("errSend"), false);
  } finally {
    submit.disabled = false;
    submit.textContent = t("button");
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("contactEmail").textContent = CONTACT_EMAIL;
document.getElementById("igLink").href = INSTAGRAM_URL;

applyLang();
startCountdown();
