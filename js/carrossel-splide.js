document.addEventListener('DOMContentLoaded', () => {
  
  const carrosseis = document.querySelectorAll('.splide')
  
  carrosseis.forEach(carrossel => {
    new Splide(carrossel, {
      type: 'loop',
    }).mount();
  })

  const slides = document.querySelectorAll('.splide__slide');
  const botoes = document.querySelectorAll('.portfolio__botao');

  botoes.forEach(button => {
    button.addEventListener('click', () => {
      const carrosselVisivel = button.getAttribute('data-carrossel');

      botoes.forEach(btn => {
        btn.classList.remove('portfolio__botao--ativo');
      })

      carrosseis.forEach(carrossel => {
        carrossel.classList.remove('active');
      })

      document.getElementById(carrosselVisivel + '-carrossel').classList.add('active');
      button.classList.add('portfolio__botao--ativo');
    });
  });
  
  slides.forEach(slide => {
    slide.addEventListener('mouseenter', () => {
      slide.classList.add('splide__slide--focado');
    })

    slide.addEventListener('mouseleave', () => {
      slide.classList.remove('splide__slide--focado');
    });
  });

  document.getElementById('website-carrossel').classList.add('active')


});

