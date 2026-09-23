const toast = document.getElementById("toast");
const languageSelect = document.getElementById("languageSelect");
const openStatus = document.getElementById("openStatus");

// Contact mis en avant : message Instagram et e-mail.
// TikTok, Snapchat et Facebook servent de vitrine.
const PROFILE = {
  brand: "Eteroa Tattoo",
  // Nom de la fiche contact : la marque seule, aucun nom de personne
  vcardName: "Eteroa Tattoo",
  phone: "+33620382517",
  email: "eteroatattoo987@gmail.com",
  instagram: "https://www.instagram.com/eteroa_tattoo_987",
  tiktok: "https://www.tiktok.com/@eteroa.tattoo",
  snapchat: "https://www.snapchat.com/@tukeatufariua",
  facebook: "https://www.facebook.com/eteroatattoo987",
};

// Horaires Google : lundi → samedi 9h30–15h30, fermé le dimanche.
// Jours au format getDay() (0 = dimanche), heures en minutes depuis minuit.
const OPENING = { days: [1, 2, 3, 4, 5, 6], from: 9 * 60 + 30, to: 15 * 60 + 30 };

const translations = {
  fr: {
    title: "Tatoueur polynésien",
    tagline: "Entre culture ancestrale et style moderne.",
    tags: "Freehand • Sur mesure • Pièces complètes • À la séance",
    cta_dm: "Prendre RDV sur Instagram",
    cta_mail: "Écrire un e-mail",
    appointment_only: "Uniquement sur rendez-vous",
    hours_title: "Horaires",
    hours_week: "Lundi – samedi · 9h30 – 15h30",
    hours_sun: "Dimanche · Fermé",
    open_now: "Ouvert",
    closed_now: "Fermé",
    directions: "Itinéraire",
    phone_desc: "Téléphone",
    socials_title: "Mes réalisations",
    save: "Enregistrer",
    share: "Partager",
    mini_note: "Eteroa Tattoo • Carte digitale",
    share_text: "Eteroa Tattoo — Tatoueur polynésien à Gonfaron",
    copied: "Lien copié !",
    contact_saved: "Contact prêt à enregistrer",
  },
  en: {
    title: "Polynesian tattoo artist",
    tagline: "Between ancestral culture and modern style.",
    tags: "Freehand • Custom • Full pieces • By the session",
    cta_dm: "Book on Instagram",
    cta_mail: "Send an email",
    appointment_only: "By appointment only",
    hours_title: "Opening hours",
    hours_week: "Monday – Saturday · 9:30 am – 3:30 pm",
    hours_sun: "Sunday · Closed",
    open_now: "Open",
    closed_now: "Closed",
    directions: "Directions",
    phone_desc: "Phone",
    socials_title: "My work",
    save: "Save",
    share: "Share",
    mini_note: "Eteroa Tattoo • Digital card",
    share_text: "Eteroa Tattoo — Polynesian tattoo artist in Gonfaron",
    copied: "Link copied!",
    contact_saved: "Contact ready to save",
  },
  es: {
    title: "Tatuador polinesio",
    tagline: "Entre cultura ancestral y estilo moderno.",
    tags: "Freehand • A medida • Piezas completas • Por sesión",
    cta_dm: "Pedir cita en Instagram",
    cta_mail: "Enviar un e-mail",
    appointment_only: "Solo con cita previa",
    hours_title: "Horario",
    hours_week: "Lunes – sábado · 9:30 – 15:30",
    hours_sun: "Domingo · Cerrado",
    open_now: "Abierto",
    closed_now: "Cerrado",
    directions: "Cómo llegar",
    phone_desc: "Teléfono",
    socials_title: "Mis trabajos",
    save: "Guardar",
    share: "Compartir",
    mini_note: "Eteroa Tattoo • Tarjeta digital",
    share_text: "Eteroa Tattoo — Tatuador polinesio en Gonfaron",
    copied: "¡Enlace copiado!",
    contact_saved: "Contacto listo para guardar",
  },
  de: {
    title: "Polynesischer Tätowierer",
    tagline: "Zwischen überlieferter Kultur und modernem Stil.",
    tags: "Freehand • Nach Maß • Großprojekte • Pro Sitzung",
    cta_dm: "Termin über Instagram",
    cta_mail: "E-Mail schreiben",
    appointment_only: "Nur nach Terminvereinbarung",
    hours_title: "Öffnungszeiten",
    hours_week: "Montag – Samstag · 9:30 – 15:30",
    hours_sun: "Sonntag · Geschlossen",
    open_now: "Geöffnet",
    closed_now: "Geschlossen",
    directions: "Route",
    phone_desc: "Telefon",
    socials_title: "Meine Arbeiten",
    save: "Speichern",
    share: "Teilen",
    mini_note: "Eteroa Tattoo • Digitale Karte",
    share_text: "Eteroa Tattoo — Polynesischer Tätowierer in Gonfaron",
    copied: "Link kopiert!",
    contact_saved: "Kontakt bereit zum Speichern",
  },
  it: {
    title: "Tatuatore polinesiano",
    tagline: "Tra cultura ancestrale e stile moderno.",
    tags: "Freehand • Su misura • Pezzi completi • A seduta",
    cta_dm: "Prenota su Instagram",
    cta_mail: "Scrivi un'e-mail",
    appointment_only: "Solo su appuntamento",
    hours_title: "Orari",
    hours_week: "Lunedì – sabato · 9:30 – 15:30",
    hours_sun: "Domenica · Chiuso",
    open_now: "Aperto",
    closed_now: "Chiuso",
    directions: "Indicazioni",
    phone_desc: "Telefono",
    socials_title: "I miei lavori",
    save: "Salva",
    share: "Condividi",
    mini_note: "Eteroa Tattoo • Carta digitale",
    share_text: "Eteroa Tattoo — Tatuatore polinesiano a Gonfaron",
    copied: "Link copiato!",
    contact_saved: "Contatto pronto da salvare",
  },
  ar: {
    title: "فنان وشم بولينيزي",
    tagline: "بين الثقافة العريقة والأسلوب العصري.",
    tags: "رسم حر • تصاميم حسب الطلب • قطع كاملة • بالجلسة",
    cta_dm: "احجز موعدًا عبر إنستغرام",
    cta_mail: "أرسل بريدًا إلكترونيًا",
    appointment_only: "بموعد مسبق فقط",
    hours_title: "ساعات العمل",
    hours_week: "الاثنين – السبت · 9:30 – 15:30",
    hours_sun: "الأحد · مغلق",
    open_now: "مفتوح",
    closed_now: "مغلق",
    directions: "الاتجاهات",
    phone_desc: "الهاتف",
    socials_title: "أعمالي",
    save: "حفظ",
    share: "مشاركة",
    mini_note: "Eteroa Tattoo • بطاقة رقمية",
    share_text: "Eteroa Tattoo — فنان وشم بولينيزي في غونفارون",
    copied: "تم نسخ الرابط!",
    contact_saved: "جهة الاتصال جاهزة للحفظ",
  },
  pt: {
    title: "Tatuador polinésio",
    tagline: "Entre cultura ancestral e estilo moderno.",
    tags: "Freehand • Por medida • Peças completas • Por sessão",
    cta_dm: "Marcar no Instagram",
    cta_mail: "Enviar um e-mail",
    appointment_only: "Apenas com marcação",
    hours_title: "Horário",
    hours_week: "Segunda – sábado · 9h30 – 15h30",
    hours_sun: "Domingo · Fechado",
    open_now: "Aberto",
    closed_now: "Fechado",
    directions: "Direções",
    phone_desc: "Telefone",
    socials_title: "Os meus trabalhos",
    save: "Guardar",
    share: "Partilhar",
    mini_note: "Eteroa Tattoo • Cartão digital",
    share_text: "Eteroa Tattoo — Tatuador polinésio em Gonfaron",
    copied: "Link copiado!",
    contact_saved: "Contacto pronto a guardar",
  },
  nl: {
    title: "Polynesische tatoeëerder",
    tagline: "Tussen voorouderlijke cultuur en moderne stijl.",
    tags: "Freehand • Op maat • Volledige stukken • Per sessie",
    cta_dm: "Afspraak via Instagram",
    cta_mail: "Stuur een e-mail",
    appointment_only: "Alleen op afspraak",
    hours_title: "Openingstijden",
    hours_week: "Maandag – zaterdag · 9:30 – 15:30",
    hours_sun: "Zondag · Gesloten",
    open_now: "Open",
    closed_now: "Gesloten",
    directions: "Route",
    phone_desc: "Telefoon",
    socials_title: "Mijn werk",
    save: "Opslaan",
    share: "Delen",
    mini_note: "Eteroa Tattoo • Digitale kaart",
    share_text: "Eteroa Tattoo — Polynesische tatoeëerder in Gonfaron",
    copied: "Link gekopieerd!",
    contact_saved: "Contact klaar om op te slaan",
  },
  ru: {
    title: "Полинезийский тату-мастер",
    tagline: "Между древней культурой и современным стилем.",
    tags: "Фрихенд • На заказ • Крупные работы • Посеансно",
    cta_dm: "Записаться в Instagram",
    cta_mail: "Написать на e-mail",
    appointment_only: "Только по записи",
    hours_title: "Часы работы",
    hours_week: "Понедельник – суббота · 9:30 – 15:30",
    hours_sun: "Воскресенье · Закрыто",
    open_now: "Открыто",
    closed_now: "Закрыто",
    directions: "Маршрут",
    phone_desc: "Телефон",
    socials_title: "Мои работы",
    save: "Сохранить",
    share: "Поделиться",
    mini_note: "Eteroa Tattoo • Цифровая карточка",
    share_text: "Eteroa Tattoo — полинезийский тату-мастер в Гонфароне",
    copied: "Ссылка скопирована!",
    contact_saved: "Контакт готов к сохранению",
  },
  zh: {
    title: "波利尼西亚纹身师",
    tagline: "传统文化与现代风格的交汇。",
    tags: "手绘 • 定制 • 大面积作品 • 按次计费",
    cta_dm: "通过 Instagram 预约",
    cta_mail: "发送邮件",
    appointment_only: "仅限预约",
    hours_title: "营业时间",
    hours_week: "周一至周六 · 9:30 – 15:30",
    hours_sun: "周日 · 休息",
    open_now: "营业中",
    closed_now: "已打烊",
    directions: "路线",
    phone_desc: "电话",
    socials_title: "我的作品",
    save: "保存",
    share: "分享",
    mini_note: "Eteroa Tattoo • 电子名片",
    share_text: "Eteroa Tattoo — 贡法龙的波利尼西亚纹身师",
    copied: "链接已复制！",
    contact_saved: "联系人已准备好保存",
  },
  ja: {
    title: "ポリネシアン・タトゥーアーティスト",
    tagline: "伝統文化とモダンスタイルのあいだで。",
    tags: "フリーハンド • オーダーメイド • 大作 • セッション制",
    cta_dm: "Instagram で予約",
    cta_mail: "メールを送る",
    appointment_only: "完全予約制",
    hours_title: "営業時間",
    hours_week: "月曜 – 土曜 · 9:30 – 15:30",
    hours_sun: "日曜 · 定休日",
    open_now: "営業中",
    closed_now: "営業時間外",
    directions: "ルート",
    phone_desc: "電話",
    socials_title: "私の作品",
    save: "保存",
    share: "共有",
    mini_note: "Eteroa Tattoo • デジタル名刺",
    share_text: "Eteroa Tattoo — ゴンファロンのポリネシアン・タトゥーアーティスト",
    copied: "リンクをコピーしました！",
    contact_saved: "連絡先を保存できます",
  },
  tr: {
    title: "Polinezya dövme sanatçısı",
    tagline: "Kadim kültür ile modern stil arasında.",
    tags: "Freehand • Kişiye özel • Büyük çalışmalar • Seans bazında",
    cta_dm: "Instagram'dan randevu al",
    cta_mail: "E-posta gönder",
    appointment_only: "Yalnızca randevuyla",
    hours_title: "Çalışma saatleri",
    hours_week: "Pazartesi – cumartesi · 9:30 – 15:30",
    hours_sun: "Pazar · Kapalı",
    open_now: "Açık",
    closed_now: "Kapalı",
    directions: "Yol tarifi",
    phone_desc: "Telefon",
    socials_title: "Çalışmalarım",
    save: "Kaydet",
    share: "Paylaş",
    mini_note: "Eteroa Tattoo • Dijital kart",
    share_text: "Eteroa Tattoo — Gonfaron'da Polinezya dövme sanatçısı",
    copied: "Bağlantı kopyalandı!",
    contact_saved: "Kişi kaydedilmeye hazır",
  },
};

let currentLang = "fr";

// Ouvert / fermé à l'heure de Gonfaron, quel que soit le fuseau du visiteur
function isOpenNow() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Paris",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const get = (type) => parts.find((p) => p.type === type).value;
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  const minutes = Number(get("hour")) * 60 + Number(get("minute"));
  return OPENING.days.includes(day) && minutes >= OPENING.from && minutes < OPENING.to;
}

function renderOpenStatus() {
  const dict = translations[currentLang];
  const open = isOpenNow();
  openStatus.textContent = open ? dict.open_now : dict.closed_now;
  openStatus.className = `text-[10px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1 ${
    open ? "bg-emerald-100 text-emerald-800" : "bg-sand text-bark"
  }`;
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.fr;
  currentLang = translations[lang] ? lang : "fr";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  renderOpenStatus();
}

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("opacity-100", "translate-y-0");
  setTimeout(
    () => toast.classList.remove("opacity-100", "translate-y-0"),
    2000,
  );
}

// Partage natif, repli sur la copie du lien
document.getElementById("shareBtn").onclick = async () => {
  const dict = translations[currentLang];
  try {
    if (navigator.share) {
      await navigator.share({
        title: PROFILE.brand,
        text: dict.share_text,
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast(dict.copied);
    }
  } catch (e) {
    console.log(e);
  }
};

// Téléchargement vCard : fiche entreprise au nom de la marque
document.getElementById("saveBtn").onclick = () => {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    // N vide + X-ABShowAs:COMPANY : la fiche est une entreprise, sinon Apple
    // range le nom de la marque dans le champ "Prénom".
    "N:;;;;",
    `FN:${PROFILE.vcardName}`,
    `ORG:${PROFILE.vcardName}`,
    "X-ABShowAs:COMPANY",
    "TITLE:Tatoueur polynésien",
    `TEL;TYPE=CELL,VOICE:${PROFILE.phone}`,
    `EMAIL;TYPE=INTERNET:${PROFILE.email}`,
    "ADR;TYPE=WORK:;;1 Rue André Roux;Gonfaron;;83590;France",
    // URL étiquetées plutôt que X-SOCIALPROFILE : Apple Contacts n'affiche ce
    // dernier que pour les services qu'il connaît, les autres apparaissaient vides.
    `item1.URL:${PROFILE.instagram}`,
    "item1.X-ABLabel:Instagram",
    `item2.URL:${PROFILE.tiktok}`,
    "item2.X-ABLabel:TikTok",
    `item3.URL:${PROFILE.snapchat}`,
    "item3.X-ABLabel:Snapchat",
    `item4.URL:${PROFILE.facebook}`,
    "item4.X-ABLabel:Facebook",
    "NOTE:Tatoueur polynésien - Freehand\\, projets sur mesure. Uniquement sur rendez-vous. Lun-Sam 9h30-15h30.",
    "END:VCARD",
  ].join("\r\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "eteroa-tattoo.vcf";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast(translations[currentLang].contact_saved);
};

languageSelect.onchange = (e) => applyTranslations(e.target.value);

// Init
applyTranslations("fr");
// Le badge suit l'heure si la page reste ouverte
setInterval(renderOpenStatus, 60 * 1000);
