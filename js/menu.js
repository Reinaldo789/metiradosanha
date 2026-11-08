(() => {
  "use strict";
  const menu = document.getElementById("menuLateral");
  const abrir = document.getElementById("menuToggle");
  const fechar = document.getElementById("fecharMenu");
  const fundo = document.getElementById("fundoMenu");

  function definirMenu(aberto) {
    if (!menu || !abrir || !fundo) return;
    menu.classList.toggle("aberto", aberto);
    fundo.classList.toggle("visivel", aberto);
    abrir.setAttribute("aria-expanded", String(aberto));
    abrir.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = aberto ? "hidden" : "";
  }
  abrir?.addEventListener("click", () => definirMenu(!menu.classList.contains("aberto")));
  fechar?.addEventListener("click", () => definirMenu(false));
  fundo?.addEventListener("click", () => definirMenu(false));

  document.querySelectorAll(".grupo-menu").forEach((botao) => {
    botao.addEventListener("click", () => {
      const alvo = document.getElementById(botao.getAttribute("aria-controls"));
      const vaiAbrir = !alvo.classList.contains("aberto");
      document.querySelectorAll(".sub-menu").forEach((sub) => sub.classList.remove("aberto"));
      document.querySelectorAll(".grupo-menu").forEach((b) => b.setAttribute("aria-expanded", "false"));
      if (vaiAbrir) {
        alvo.classList.add("aberto");
        botao.setAttribute("aria-expanded", "true");
      }
    });
  });
  document.querySelectorAll(".menu-lateral a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 700px)").matches) definirMenu(false);
    });
  });
  document.getElementById("voltarTopo")?.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
})();
