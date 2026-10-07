// Menu do celular e links do WhatsApp com mensagem pronta.
document.addEventListener("DOMContentLoaded", function () {
  var WHATSAPP_NUMBER = "5519995130776";

  // Monta o link do WhatsApp a partir do atributo data-wa-msg.
  document.querySelectorAll("[data-wa-msg]").forEach(function (link) {
    var message = link.getAttribute("data-wa-msg");
    link.href = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
  });

  // Abre e fecha o menu no celular.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu-principal");
  if (!toggle || !nav) return;

  var label = toggle.querySelector(".visually-hidden");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    if (label) label.textContent = open ? "Fechar menu" : "Abrir menu";
  }

  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setMenu(false);
  });
});
