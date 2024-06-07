const slides = [
  {
    "image": "slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

//Récupération des éléments utilisés pour le carrousel
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// Initialisation de la diapositive actuelle
let currentSlideIndex = 0;

updateSlide();

//  Event listener flèche gauche
arrowLeft.addEventListener("click", () => {
  console.log("J'ai cliqué sur la flèche gauche");
  currentSlideIndex--; // Décrémentez l'index de la diapositive actuelle

  if (currentSlideIndex < 0) {
    // Vérifiez si l'index est inférieur à 0
    currentSlideIndex = slides.length - 1; // Si c'est le cas, revenez à la dernière diapositive
  }

  updateSlide(currentSlideIndex);
  updateDots(currentSlideIndex);
});

// Event listener flèche droite
arrowRight.addEventListener("click", () => {
  console.log("J'ai cliqué sur la flèche droite");
  currentSlideIndex++; // Incrémentez l'index de la diapositive actuelle

  if (currentSlideIndex === slides.length) {
    currentSlideIndex = 0; // Si c'est le cas, revenez à la première diapositive
  }

  updateSlide(currentSlideIndex);
  updateDots(currentSlideIndex);
});

// Bullet points
const numberOfDots = slides.length;
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => updateSlide(i));
  dotsContainer.appendChild(dot);
}

//Récupération des class ".dot" des <span>
const dots = document.querySelectorAll(".dot");
