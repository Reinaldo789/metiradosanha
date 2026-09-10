document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu-lateral");
    const overlay = document.getElementById("overlay");
    const botaoMenu = document.getElementById("btn-menu");
    const botaoInicio = document.getElementById("btn-inicio");
    const botoesPrincipais = document.querySelectorAll(".btn-principal");
    const botoesConteudo = document.querySelectorAll("[data-conteudo]");

    const fecharMenu = () => {
        menu?.classList.remove("menu-visivel");
        overlay?.classList.remove("ativo");
        botaoMenu?.setAttribute("aria-expanded", "false");
    };

    const abrirMenu = () => {
        menu?.classList.add("menu-visivel");
        overlay?.classList.add("ativo");
        botaoMenu?.setAttribute("aria-expanded", "true");
    };

    botaoMenu?.addEventListener("click", () => {
        menu?.classList.contains("menu-visivel") ? fecharMenu() : abrirMenu();
    });

    overlay?.addEventListener("click", fecharMenu);

    botoesPrincipais.forEach((botao) => {
        botao.setAttribute("aria-expanded", "false");
        botao.addEventListener("click", () => {
            const submenu = document.getElementById(botao.dataset.menu || "");
            if (!submenu) return;

            const vaiAbrir = !submenu.classList.contains("aberto");

            document.querySelectorAll(".submenu").forEach((item) => item.classList.remove("aberto"));
            botoesPrincipais.forEach((item) => {
                item.classList.remove("ativo", "aberto");
                item.setAttribute("aria-expanded", "false");
            });

            if (vaiAbrir) {
                submenu.classList.add("aberto");
                botao.classList.add("ativo", "aberto");
                botao.setAttribute("aria-expanded", "true");
            }
        });
    });

    botoesConteudo.forEach((botao) => {
        botao.addEventListener("click", () => {
            botoesConteudo.forEach((item) => item.classList.remove("sub-ativo"));
            botao.classList.add("sub-ativo");
            if (window.innerWidth <= 768) fecharMenu();
        });
    });

    window.addEventListener("scroll", () => {
        if (botaoInicio) botaoInicio.style.display = window.scrollY > 300 ? "block" : "none";
    }, { passive: true });

    botaoInicio?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") fecharMenu(); });
});
