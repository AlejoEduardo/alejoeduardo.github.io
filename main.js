/*firstself logic code june7 2000;*/
var section = document.querySelectorAll('section'),
  mostrarhistoria = document.getElementById('historia'),
  mostrarcontacto = document.getElementById('contacto'),
  mostrargaleria = document.getElementById('galeria'),
  mostrartech = document.getElementById('tech'),
  historia = 0,
  galeria = 0,
  tech = 0,
  contacto = 0,
  blur = 0;



function borradocompleto() {
  mostrarhistoria.classList.remove('section'),
    mostrargaleria.classList.remove('section'),
    mostrartech.classList.remove('section'),
    mostrarcontacto.classList.remove('section');
}

function cambioHistoria() {
  switch (historia) {
    case 0:
      historia == 0;
      mostrarhistoria.classList.add('section'),
        historia = 1,
        console.log('historia mostrada');
      break;
    case 1:
      historia == 1;
      borradocompleto(), historia = 0,
        console.log('historia eliminada');
      break;
  }
  if (galeria == 1) {
    borradocompleto(), mostrarhistoria.classList.add('section'), galeria = 0;
  }
  if (tech == 1) {
    borradocompleto(), mostrarhistoria.classList.add('section'), tech = 0;
  }
  if (contacto == 1) {
    borradocompleto(), mostrarhistoria.classList.add('section'), contacto = 0;
  }
}

function cambioGaleria() {
  switch (galeria) {
    case 0:
      galeria == 0;
      mostrargaleria.classList.add('section'),
        galeria = 1,
        console.log('galeria mostrada');
      break;
    case 1:
      galeria == 1;
      borradocompleto(), galeria = 0, console.log('galeria eliminada');
      break;
  }
  if (historia == 1) {
    borradocompleto(), mostrargaleria.classList.add('section'), historia = 0;
  }
  if (tech == 1) {
    borradocompleto(), mostrargaleria.classList.add('section'), tech = 0;
  }
  if (contacto == 1) {
    borradocompleto(), mostrargaleria.classList.add('section'), contacto = 0;
  }
}

function cambioTech() {
  switch (tech) {
    case 0:
      tech == 0;
      mostrartech.classList.add('section'), tech = 1;
      break;
    case 1:
      tech == 1; borradocompleto(), tech = 0;
      break;
  }
  if (historia == 1) {
    borradocompleto(), mostrartech.classList.add('section'), historia = 0, console.log('bien hecho');
  }
  if (galeria == 1) {
    borradocompleto(), mostrartech.classList.add('section'), galeria = 0, console.log('bien hecho');
  }
  if (contacto == 1) {
    borradocompleto(), mostrartech.classList.add('section'), contacto = 0, console.log('bien hecho');
  }
}
function cambioContacto() {
  switch (contacto) {
    case 0:
      contacto == 0;
      mostrarcontacto.classList.add('section'), contacto = 1;
      break;
    case 1:
      contacto == 1;
      borradocompleto(), contacto = 0;
      break;
  }
  if (historia == 1) {
    borradocompleto(), mostrarcontacto.classList.add('section'), historia = 0;
  }
  if (tech == 1) {
    borradocompleto(), mostrarcontacto.classList.add('section'), tech = 0;
  }
  if (galeria == 1) {
    borradocompleto(), mostrarcontacto.classList.add('section'), galeria = 0;
  }
}
/*
let slider_index = 0;

function show_slide(index) {
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot-nav');

  if (index >= slides.length) slider_index = 0;
  if (index < 0) { slider_index = slides.length - 1 };

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    dots[i].classList.remove('active-dot');
  }

  slides[slider_index].style.display = 'block';
  dots[slider_index].classList.add('active-dot');
}

show_slide(slider_index);

document.querySelector('#arrow-prev').addEventListener('click', () => {
  show_slide(--slider_index);
});

document.querySelector('#arrow-next').addEventListener('click', () => {
  show_slide(++slider_index);
});

document.querySelectorAll('.dot-nav').forEach((element) => {
  element.addEventListener('click', function () {
    var dots = Array.prototype.slice.call(this.parentElement.children),
      dot_index = dots.indexOf(element);
    show_slide(slider_index = dot_index);
  })
});

setInterval(() => {
  show_slide(++slider_index)
}, 9000);




/* este codigo fue copiado no recuerdo de que programador, cuando me acuerde lo tagueo,
need to find and tag Sr. cause i dont remember wich developer made this code, whatever thanks for
code and share



 function cambiar(number) {
   for (i = 0; i < btn.length; i++) {
     btn[i].classList.remove("sky");
     if (number == 1) {
       btn[i].classList.add("close");
       btn[0].classList.remove("close");
       btn[0].classList.add("sky");
     }
     if (number == 2) {
       btn[i].classList.add("close");
       btn[1].classList.remove("close");
       btn[1].classList.add("sky");
     }
     if (number == 3) {
       btn[i].classList.add("close");
       btn[2].classList.remove("close");
       btn[2].classList.add("sky");
     }
     if (number == 4) {
       btn[i].classList.add("close");
       btn[3].classList.remove("close");
       btn[3].classList.add("sky");
     }
   }
*/
let indice = 1;
muestraSlides(indice);

function avanzaSlide(n) {
  muestraSlides(indice += n);
}

function posicionSlide(n) {
  muestraSlides(indice = n);
}
// setInterval(function tiempo() {
//   muestraSlides(indice += 1)
// }, 6000);
function muestraSlides(n) {
  let i;
  let slides = document.getElementsByClassName('miSlider');
  let barras = document.getElementsByClassName('barra');

  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < barras.length; i++) {
    barras[i].className = barras[i].className.replace(" active", "");
  }

  slides[indice - 1].style.display = 'block';
  barras[indice - 1].className += ' active';

}