window.addEventListener("scroll", () => {
    const barraMenu = document.querySelector('.menu-topo__fundo');
    const scrollY = window.scrollY

    if(scrollY < 50) {
        barraMenu.style.display = "none"
        console.log("scroll")
    } else {
        barraMenu.style.display = "flex"
    }
})