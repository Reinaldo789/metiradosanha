```javascript
// BOTÃO DO MENU

const btnMenu = document.getElementById("btnMenu");

const menu = document.getElementById("menu");


btnMenu.addEventListener("click", function () {

    menu.classList.toggle("aberto");

});


// SUBMENUS

const botoes =
    document.querySelectorAll(".menu-botao");


botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const submenu =
            botao.nextElementSibling;

        submenu.classList.toggle("aberto");


        const sinal =
            botao.querySelector("span");


        if (submenu.classList.contains("aberto")) {

            sinal.textContent = "−";

        } else {

            sinal.textContent = "+";

        }

    });

});


// FECHAR MENU AO CLICAR EM UM LINK NO CELULAR

const links =
    document.querySelectorAll(".menu a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            menu.classList.remove("aberto");

        }

    });

});


// ANO AUTOMÁTICO

const ano =
    document.getElementById("ano");


if (ano) {

    ano.textContent =
        new Date().getFullYear();

}


// PESQUISA

const pesquisa =
    document.getElementById("pesquisa");


pesquisa.addEventListener("input", function () {

    const texto =
        pesquisa.value.toLowerCase().trim();


    const secoes =
        document.querySelectorAll("main section");


    secoes.forEach(function (secao) {

        const conteudo =
            secao.textContent.toLowerCase();


        if (texto === "") {

            secao.style.display = "";

        }

        else if (conteudo.includes(texto)) {

            secao.style.display = "";

        }

        else {

            secao.style.display = "none";

        }

    });

});
```
