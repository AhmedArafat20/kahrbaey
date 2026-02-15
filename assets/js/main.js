const PHONE = "0543790895";
const PHONE_INTL = "966543790895"; // صيغة دولية لواتساب (بدون +)

function setLinks(){
  document.querySelectorAll("[data-phone]").forEach(a=>{
    a.setAttribute("href", `tel:${PHONE}`);
  });
  document.querySelectorAll("[data-wa]").forEach(a=>{
    a.setAttribute("href", `https://wa.me/${PHONE_INTL}`);
  });
}

function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    if(a.getAttribute("href") === path) a.classList.add("active");
  });
}

function setupWhatsAppForm(){
  const form = document.querySelector("#waForm");
  if(!form) return;

  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const name = (document.querySelector("#name")?.value || "").trim();
    const service = (document.querySelector("#service")?.value || "").trim();
    const msg = (document.querySelector("#msg")?.value || "").trim();

    const text =
`السلام عليكم
الاسم: ${name || "—"}
الخدمة المطلوبة: ${service || "—"}
تفاصيل الطلب: ${msg || "—"}
الموقع: جدة - حي الحمدانية - شارع الفالح`;

    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  });
}

function setupMobileMenu(){
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  if(!btn || !nav) return;

  btn.addEventListener("click", ()=>{
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // يقفل المنيو بعد الضغط على لينك
  nav.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>{
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded","false");
    });
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  setLinks();
  setActiveNav();
  setupWhatsAppForm();
  setupMobileMenu();
});
