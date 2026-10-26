// ===== INSTÄLLNINGAR – ändra här =====
// Brevo-formuläret "Väntelista G.O.A.L" (lista: Väntelista, dubbel bekräftelse)
const BREVO_FORM_URL = "https://c833e7eb.sibforms.com/serve/MUIFAJQEnAJQcJ6dVRjLw6tnfmfMwnW88MTAZ0E1MY8TtG3jLUnMpqcr0BLbRsRjwwRYmdc-UR4gZqsVH0F-xJAlCqigz6zcEuWidcsyRnkdbVdmHjKyzhUAqmjfgt2cF1yGtH-KGWlkzkYLOYrc-EsFbtHM4wUa4n6c0hTOlLZU91uXHamjyKUFo_z9IrMfQz2YBK3_zixm5TQX6w==";
const LAUNCH_DATE = ""; // Nedräkningen är borttagen från sidan.
const CONTACT_EMAIL = "";   // T.ex. "info@dindoman.se" – tom = visas inte
const INSTAGRAM_URL = "";   // T.ex. "https://www.instagram.com/goalguards" – tom = visas inte
const TIKTOK_URL = "https://www.tiktok.com/@g.o.a.lgear";
// =====================================

const TEXT = {
  sv: {
    skip: "Hoppa till väntelistan",
    navProblem: "Problemet", navFounder: "Grundaren", navCta: "Väntelistan",
    eyebrow: "Kommer snart",
    h1a: "Trasiga fotbollsskor?", h1c: "Släng dom inte!", h1b: "Vi har lösningen.",
    lead: "Något kommer som räddar dina fotbollsskor. Skriv upp dig på väntelistan och få veta först.",
    emailLabel: "Din e-postadress", emailPlaceholder: "din@epost.se",
    button: "Skriv upp mig",
    consent: "Jag vill få ett mejl när det släpps. Läs vår",
    privacyLink: "integritetspolicy", privacyLinkCap: "Integritetspolicy",
    assure1: "Gratis att skriva upp sig", assure2: "Inget spam", assure3: "Avregistrera när du vill",
    callout: "Här börjar det.",
    problemKicker: "Problemet",
    problemTitle: "Ett litet glapp ska inte kosta ett nytt par skor.",
    s1Big: "Tån", s1: "Där nästan alla fotbollsskor släpper först. Den böjs vid varje steg och tar emot varje skott.",
    s2Big: "3 000 kr", s2: "Vad ett nytt par kan kosta. Ofta är resten av skon nästan helt ny.",
    s3: "Antal skor du borde behöva slänga för ett litet glapp vid tån.",
    teaserKicker: "Något är på väg",
    teaserTitle: "Vi kan inte säga allt än. Men det här kan vi säga.",
    hint1: "Gjort för fotbollsskor, inte för vilka skor som helst.",
    hint2: "Fungerar på skorna du redan har.",
    hint3: "Släpps snart. Väntelistan får veta först.",
    teaserCta: "Skriv upp mig",
    founderKicker: "Grundaren",
    founderTitle: "Från omklädningsrummet, inte från ett kontor.",
    founder1: "Jag heter Melwin Hedman och spelar elitfotboll i IFK Göteborg. Jag har också representerat Sveriges ungdomslandslag.",
    founder2: "Varje säsong ser jag samma sak: skor som nästan är nya åker i soporna för att tån har släppt. Lagkompisar tejpar dem, köper nya eller spelar i trasiga skor. Det är dyrt och onödigt.",
    founder3: "Därför startade jag G.O.A.L. Vi gör saker som fotbollsspelare faktiskt behöver.",
    founderRole: "· Grundare, G.O.A.L",
    ttKicker: "Följ resan",
    ttTitle: "Vi visar allt på TikTok innan det släpps.",
    ttText: "Trasiga skor, tester, lagkompisar och allt som händer på vägen mot lanseringen.",
    ttFollowers: "följare", ttCta: "Följ på TikTok",
    footTag: "Gjort av fotbollsspelare, för fotbollsspelare.",
    errEmail: "Skriv en giltig e-postadress.",
    errConsent: "Kryssa i rutan för att få mejlet.",
    errSend: "Något gick fel. Försök igen om en stund.",
    sending: "Skickar…",
    ok: "Nästan klart! Kolla din mejl och bekräfta din adress. Hittar du inget mejl? Kolla skräpposten och papperskorgen. 🤫",
    cdLabel: "Släpps om", days: "dagar", hours: "tim", mins: "min", secs: "sek",
    cdDone: "Släppet är här."
  },
  en: {
    skip: "Skip to the waitlist",
    navProblem: "The problem", navFounder: "Founder", navCta: "Waitlist",
    eyebrow: "Coming soon",
    h1a: "Broken football boots?", h1c: "Don't throw them away!", h1b: "We have the solution.",
    lead: "Something is coming to save your football boots. Join the waitlist and be the first to know.",
    emailLabel: "Your email address", emailPlaceholder: "you@email.com",
    button: "Join the list",
    consent: "I want an email when it drops. Read our",
    privacyLink: "privacy policy", privacyLinkCap: "Privacy policy",
    assure1: "Free to join", assure2: "No spam", assure3: "Unsubscribe anytime",
    callout: "This is where it starts.",
    problemKicker: "The problem",
    problemTitle: "A small gap shouldn't cost you a new pair of boots.",
    s1Big: "The toe", s1: "Where almost every football boot comes loose first. It bends with every step and takes every shot.",
    s2Big: "$300", s2: "What a new pair can cost. Often the rest of the boot is almost new.",
    s3: "Boots you should have to throw away over a small gap at the toe.",
    teaserKicker: "Something is coming",
    teaserTitle: "We can't tell you everything yet. But we can tell you this.",
    hint1: "Made for football boots, not just any shoes.",
    hint2: "Works on the boots you already have.",
    hint3: "Dropping soon. The waitlist hears first.",
    teaserCta: "Join the list",
    founderKicker: "Founder",
    founderTitle: "Built in the locker room, not in an office.",
    founder1: "I'm Melwin Hedman. I play elite football for IFK Göteborg and I have represented Sweden's youth national team.",
    founder2: "Every season I see the same thing: almost new boots thrown away because the toe came loose. Teammates tape them, buy new ones or keep playing in broken boots. It's expensive and unnecessary.",
    founder3: "That's why I started G.O.A.L. We make things footballers actually need.",
    founderRole: "· Founder, G.O.A.L",
    ttKicker: "Follow the journey",
    ttTitle: "We show everything on TikTok before the drop.",
    ttText: "Broken boots, tests, teammates and everything that happens on the way to launch.",
    ttFollowers: "followers", ttCta: "Follow on TikTok",
    footTag: "Made by footballers, for footballers.",
    errEmail: "Enter a valid email address.",
    errConsent: "Tick the box to get the email.",
    errSend: "Something went wrong. Please try again in a moment.",
    sending: "Sending…",
    ok: "Almost done! Check your email and confirm your address. Can't find it? Check your spam and junk folders. 🤫",
    cdLabel: "Dropping in", days: "days", hours: "hrs", mins: "min", secs: "sec",
    cdDone: "The drop is here."
  }
};

let lang = "sv";
try { lang = localStorage.getItem("goal-lang") || ((navigator.language || "sv").toLowerCase().startsWith("sv") ? "sv" : "en"); } catch (e) {}
if (!TEXT[lang]) lang = "sv";

const t = key => TEXT[lang][key] ?? TEXT.sv[key] ?? "";

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

// Border under the menu when scrolling
const nav = document.querySelector(".nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Waitlist form → Brevo
const form = document.getElementById("signup");
const msg = document.getElementById("msg");
const submit = document.getElementById("submit");
const show = (text, ok) => { msg.textContent = text; msg.className = "msg " + (ok ? "ok" : "err"); };

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

// Countdown
function startCountdown() {
  const box = document.getElementById("countdown");
  const end = LAUNCH_DATE ? new Date(LAUNCH_DATE).getTime() : NaN;
  if (!box || isNaN(end)) return;
  box.hidden = false;
  const pad = n => String(n).padStart(2, "0");
  const set = (id, v) => { document.getElementById(id).textContent = v; };
  const tick = () => {
    const diff = end - Date.now();
    if (diff <= 0) {
      box.querySelector(".cd-units").hidden = true;
      document.getElementById("cd-label").textContent = t("cdDone");
      return;
    }
    set("cd-days", pad(Math.floor(diff / 86400000)));
    set("cd-hours", pad(Math.floor(diff / 3600000) % 24));
    set("cd-mins", pad(Math.floor(diff / 60000) % 60));
    set("cd-secs", pad(Math.floor(diff / 1000) % 60));
  };
  tick();
  setInterval(tick, 1000);
}

// Optional links
document.getElementById("ttLink").href = TIKTOK_URL;
if (INSTAGRAM_URL) {
  const ig = document.getElementById("igLink");
  ig.href = INSTAGRAM_URL;
  ig.hidden = false;
}
if (CONTACT_EMAIL) {
  const c = document.getElementById("contactLink");
  c.textContent = CONTACT_EMAIL;
  c.href = "mailto:" + CONTACT_EMAIL;
  c.hidden = false;
}

document.getElementById("year").textContent = new Date().getFullYear();
applyLang();
startCountdown();
