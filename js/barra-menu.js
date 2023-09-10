window.addEventListener("scroll", () => {
    const barraMenu = document.querySelector('.menu-topo__fundo');
    const scrollY = window.scrollY

    if(scrollY < 50) {
        barraMenu.style.transform = "translateY(-100%)"
    } else {
        barraMenu.style.transform = "translateY(0)"
    }
})