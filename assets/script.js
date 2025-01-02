// Images et Textes du slide
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
slides.forEach((slide) => {
  console.log(slide.image);
});

// Récupèration des fléches
let arrowLeft = document.querySelector(".arrow_left");
console.log(arrowLeft);
let arrowRight = document.querySelector(".arrow_right");
console.log(arrowRight);

//
const previousImage = () => {
  console.log("clique ok left");
};
const nextImage = () => {
  console.log("clique ok right");
};

// Ajout event listener sur les fléches
arrowLeft.addEventListener("click", previousImage);
arrowRight.addEventListener("click", nextImage);

// Récupération du conteneur des points
const dotsContainer = document.querySelector(".dots");
console.log("Conteneur des points :", dotsContainer); // Vérification du conteneur

// Fonction pour créer les bullet points
const createDots = () => {
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) {
      dot.classList.add("dot_selected"); // Premier point est actif
    }
    dotsContainer.appendChild(dot);
  });
};

// Appel de la fonction pour afficher les points
createDots();
console.log("Points créés");

// Index de la slide active
let currentIndex = 0;

// Récupération des éléments de la bannière
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// Fonction pour mettre à jour le slide
const updateSlide = (index) => {
  // Mettre à jour l'image
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerImg.alt = slides[index].tagLine;

  // Mettre à jour le texte
  bannerText.innerHTML = slides[index].tagLine;

  // Mettre à jour les points
  const allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === index);
  });
};

// Fonction pour aller à l'image précédente
const goPreviousImage = () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Revient à la dernière slide si nécessaire
  updateSlide(currentIndex);
};

// Fonction pour aller à l'image suivante
const goNextImage = () => {
  currentIndex = (currentIndex + 1) % slides.length; // Revient à la première slide si nécessaire
  updateSlide(currentIndex);
};

// Ajout des event listeners
arrowLeft.addEventListener("click", goPreviousImage);
arrowRight.addEventListener("click", goNextImage);

// Mise à jour initiale de la slide
updateSlide(currentIndex);
