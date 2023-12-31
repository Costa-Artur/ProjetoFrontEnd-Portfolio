const menuAbrir = document.querySelector('.menu-barras')

const nav = document.querySelector('.cabecalho')

menuAbrir.addEventListener('click', () => {
    menuAbrir.classList.toggle('aberto');
    nav.classList.toggle('aberto');
})

const botoes = document.querySelectorAll('.cabecalho__botao');

const botoesClicavel = document.querySelectorAll('.cabecalho__botao-clicavel')

botoesClicavel.forEach(botao => {
    botao.addEventListener('click', (event) => {
        event.preventDefault()

        const targetId = botao.getAttribute('href')
        const targetElement = document.querySelector(targetId)

        if(targetElement) {
            const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            })
        }
    })
})