// Carrusel
const track = document.querySelector(".carousel-track");
const items = Array.from(track.children);
const btnLeft = document.querySelector(".carousel-btn.left");
const btnRight = document.querySelector(".carousel-btn.right");
let currentIndex = 0;

function updateCarousel() {
  const itemWidth = items[0].getBoundingClientRect().width + 20;
  const itemsToShow =
    window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;
  const maxIndex = items.length - itemsToShow;
  if (currentIndex > maxIndex) currentIndex = maxIndex;
  if (currentIndex < 0) currentIndex = 0;
  track.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}
btnRight.addEventListener("click", () => {
  currentIndex++;
  updateCarousel();
});
btnLeft.addEventListener("click", () => {
  currentIndex--;
  updateCarousel();
});
window.addEventListener("resize", updateCarousel);
window.addEventListener("load", updateCarousel);

// Lightbox
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    lightboxImg.src = img.src;
    lightboxCaption.textContent = item.dataset.caption;
    lightbox.classList.add("active");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Comida interactividad
const platos = {
  croissant: {
    img: "assets/imagenes/blog1/croissant.jpg",
    alt: "Croissant",
    titulo: "Croissant",
    desc: "El croissant es un símbolo de la panadería francesa. Recomendamos probarlo en cualquier boulangerie tradicional cerca de Montparnasse o Le Marais.",
  },
  baguette: {
    img: "assets/imagenes/blog1/baguette.jpeg",
    alt: "Baguette",
    titulo: "Baguette",
    desc: "La baguette fresca es indispensable. Se disfruta mejor con queso y vino en un picnic en los Campos de Marte frente a la Torre Eiffel.",
  },
  escargots: {
    img: "assets/imagenes/blog1/escargots.jpg",
    alt: "Escargots",
    titulo: "Escargots",
    desc: "Caracoles preparados con mantequilla, ajo y perejil, un plato clásico de la gastronomía parisina. Ideal en restaurantes tradicionales cerca de Saint-Germain.",
  },
  ratatouille: {
    img: "assets/imagenes/blog1/ratatuille.jpg",
    alt: "Ratatouille",
    titulo: "Ratatouille",
    desc: "Un guiso de verduras provenzal, saludable y delicioso. Muy popular en bistrós parisinos de ambiente bohemio.",
  },
  crepes: {
    img: "assets/imagenes/blog1/crepes.jpg",
    alt: "Crêpes",
    titulo: "Crêpes",
    desc: "Las crêpes dulces o saladas son perfectas para cualquier hora del día. Prueba una de Nutella o de jamón y queso en Montparnasse.",
  },
  stroopwafel: {
    img: "assets/imagenes/blog2/stroopwafels.jpg",
    alt: "Stroopwafel",
    titulo: "Stroopwafel",
    desc: "Galleta tradicional rellena de caramelo. Ideal en cualquier mercado callejero de Ámsterdam.",
  },
  arenque: {
    img: "assets/imagenes/blog2/arenque.webp",
    alt: "Arenque",
    titulo: "Arenque",
    desc: "Pescado típico de Holanda, se suele comer crudo con cebolla y pepinillo, una experiencia muy local.",
  },
  poffertjes: {
    img: "assets/imagenes/blog2/poffertjes.jpeg",
    alt: "Poffertjes",
    titulo: "Poffertjes",
    desc: "Pequeños y esponjosos panqueques holandeses, servidos con mantequilla y azúcar glas, ideales para merendar.",
  },
  bitterballen: {
    img: "assets/imagenes/blog2/bitterballen.webp",
    alt: "Bitterballen",
    titulo: "Bitterballen",
    desc: "Deliciosas croquetas fritas rellenas de carne estofada. Perfectas como tapa en los cafés de Ámsterdam.",
  },
  kaas: {
    img: "assets/imagenes/blog2/kaas.webp",
    alt: "Queso holandés",
    titulo: "Queso holandés",
    desc: "Holanda es famosa por su queso. Prueba variedades como Gouda o Edam en mercados o tiendas especializadas.",
  },
  currywurst: {
    img: "assets/imagenes/blog3/curry.jpeg",
    alt: "Currywurst",
    titulo: "Currywurst",
    desc: "Salchicha típica alemana con salsa de curry, muy popular en Berlín como comida callejera.",
  },
  pretzel: {
    img: "assets/imagenes/blog3/pretzel.webp",
    alt: "Pretzel",
    titulo: "Pretzel",
    desc: "Deliciosa masa salada en forma de nudo. Ideal para comer mientras paseas por la ciudad.",
  },
  berliner: {
    img: "assets/imagenes/blog3/berliner.webp",
    alt: "Berliner",
    titulo: "Berliner",
    desc: "Bollo dulce relleno de mermelada o crema, perfecto para desayunar o merendar en Berlín.",
  },
  schnitzel: {
    img: "assets/imagenes/blog3/schnitzel.jpeg",
    alt: "Schnitzel",
    titulo: "Schnitzel",
    desc: "Filete empanado y frito, un plato típico alemán que no te puedes perder en Berlín.",
  },
};

const buttons = document.querySelectorAll(".comida-buttons button");
const platoImg = document.getElementById("plato-img");
const platoTitulo = document.getElementById("plato-titulo");
const platoDesc = document.getElementById("plato-descripcion");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const plato = platos[btn.dataset.plato];
    platoImg.src = plato.img;
    platoImg.alt = plato.alt;
    platoTitulo.textContent = plato.titulo;
    platoDesc.textContent = plato.desc;
  });
});
