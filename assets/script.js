const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
		"alt": "Impression d'une photo"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"alt": "Salle open space de Print it!"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"alt": "Etablissement d'une charte graphique"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
		"alt": "Autocollants de cartoons"
	}
]

//Global Var
let count = 0; //Var qui permet de savoir sur quel slide on est
let dotCount = count + 1; //Var qui permert de savoir quel dot mettre en selected et unselected
leftArrow = document.querySelector(".arrow_left"); //Const qui récupère la classe fleche gauche
rightArrow = document.querySelector(".arrow_right"); //Const qui récupère la classe fleche droite

//Création de la section dots dans l'id Banner
const sectionBanner = document.querySelector("#banner");
const dots = document.createElement('div');
dots.className = "dots";
sectionBanner.appendChild(dots);

this.initialize();

//Déclaration fonction d'initialisation
function initialize() {
	//Boucle for pour créer un dot à chaque image de la liste.
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div');
		dot.className = "dot";
		dots.appendChild(dot);
	}
	//Met le dot_selected sur le premier slide
	document.querySelector(".dot:nth-of-type(1)").classList.add("dot_selected");
	//action au click sur le fleche droite
	rightArrow.addEventListener("click", nextSlides);
	//fonction au click sur la fleche gauche
	leftArrow.addEventListener("click", backSlides);
}

//fonction pour passer au slide suivant
function nextSlides() {
	document.querySelector('.dot:nth-of-type(' + dotCount + ')').classList.remove("dot_selected");
	count++;
	dotCount = count + 1;
	//remise à 0 si compteur=slides.length
	if (count == slides.length) {
		count = 0;
		dotCount = count + 1;
	}
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[count].image;
	document.querySelector(".banner-img").alt = slides[count].alt;
	document.querySelector("p").innerHTML = slides[count].tagLine;
	document.querySelector('.dot:nth-of-type(' + dotCount + ')').classList.add("dot_selected");
}

//fonction pour passer au slide précédent
function backSlides() {
	document.querySelector('.dot:nth-of-type(' + dotCount + ')').classList.remove("dot_selected");
	count--;
	dotCount = count + 1;
	//remise à slides.length si compteur<0
	if (count < 0) {
		count = slides.length - 1;
		dotCount = count + 1;
	}
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[count].image;
	document.querySelector(".banner-img").alt = slides[count].alt;
	document.querySelector("p").innerHTML = slides[count].tagLine;
	document.querySelector('.dot:nth-of-type(' + dotCount + ')').classList.add("dot_selected");
}


