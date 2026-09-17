document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btn-interativo');
    const mensagem = document.getElementById('mensagem');

    botao.addEventListener('click', () => {
        mensagem.textContent = '🚀 Seu script JavaScript está funcionando perfeitamente!';
        mensagem.classList.remove('oculto');
    });
});
