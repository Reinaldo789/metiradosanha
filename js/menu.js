(() => {
  "use strict";

  // Elementos do Menu
  const menu = document.getElementById("menuLateral");
  const abrir = document.getElementById("menuToggle");
  const fechar = document.getElementById("fecharMenu");
  const fundo = document.getElementById("fundoMenu");

  // Abrir e Fechar Menu
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

  // Controle dos Submenus (Sanfona)
  document.querySelectorAll(".grupo-menu").forEach((botao) => {
    botao.addEventListener("click", () => {
      const alvo = document.getElementById(botao.getAttribute("aria-controls"));
      if (!alvo) return;
      
      const vaiAbrir = !alvo.classList.contains("aberto");
      document.querySelectorAll(".sub-menu").forEach((sub) => sub.classList.remove("aberto"));
      document.querySelectorAll(".grupo-menu").forEach((b) => {
        b.setAttribute("aria-expanded", "false");
        b.closest(".nav-item").classList.remove("active");
      });
      
      if (vaiAbrir) {
        alvo.classList.add("aberto");
        botao.setAttribute("aria-expanded", "true");
        botao.closest(".nav-item").classList.add("active");
      }
    });
  });

  // Fechar menu ao clicar num link
  document.querySelectorAll(".menu-lateral a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia("(max-width: 960px)").matches) definirMenu(false);
    });
  });

  // Botão Voltar ao Topo
  const btnTop = document.getElementById("btn-top");
  window.addEventListener("scroll", () => {
    if (btnTop) {
      btnTop.classList.toggle("visible", window.scrollY > 150);
    }
  });
  if (btnTop) {
    btnTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }
})();
