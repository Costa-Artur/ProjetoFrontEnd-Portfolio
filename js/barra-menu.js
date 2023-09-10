window.addEventListener("scroll", () => {
    const barraMenu = document.querySelector('.menu-topo__fundo');
    const scrollY = window.scrollY

    if(scrollY < 50) {
        barraMenu.style.display = "none"
    } else {
        barraMenu.style.display = "flex"
    }
})