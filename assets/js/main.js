const PHONE = "0543790895";
const PHONE_INTL = "966543790895"; // لاستخدام واتساب (صيغة دولية بدون +)

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
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
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

    const url = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  setLinks();
  setActiveNav();
  setupWhatsAppForm();
});
