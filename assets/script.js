const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Global Var
let compteur = 0; //Var qui permet de savoir sur quel slide on est
let dotcount = compteur + 1; //Var qui permert de savoir quel dot mettre en selected et unselected
leftArrow = document.querySelector(".arrow_left"); //Const qui récupère la classe fleche gauche
rightArrow=document.querySelector(".arrow_right"); //Const qui récupère la classe fleche droite
bannerImg=document.querySelector(".banner-img");//Const qui récupère l'img de la ban

//Création de la section dots dans l'id Banner
const sectionBanner=document.querySelector("#banner");
const dots = document.createElement('div');
dots.className="dots";
sectionBanner.appendChild(dots);
//Boucle for pour créer un dot à chaque image de la liste.
for (let i = 0; i < slides.length; i++){
	const dot = document.createElement('div');
	dot.className="dot";
	dots.appendChild(dot);
}
//Met le dot_selected sur le premier slide
document.querySelector(".dot:nth-of-type(1)").className="dot dot_selected";
//action au click sur le fleche droite
rightArrow.addEventListener("click" , nextSlides);
function nextSlides(){
	document.querySelector('.dot:nth-of-type('+dotcount+')').className ="dot";
	compteur++;
	dotcount = compteur + 1;
		//remise à 0 si compteur=slides.length
	if(compteur == slides.length){
		compteur = 0;
		dotcount =compteur + 1;
	}
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[compteur].image;
	document.querySelector("p").innerHTML = slides[compteur].tagLine;
	document.querySelector('.dot:nth-of-type('+dotcount+')').className ="dot_selected dot";

}
//fonction au click sur la fleche gauche
leftArrow.addEventListener("click" , backSlides);
function backSlides(){
	document.querySelector('.dot:nth-of-type('+dotcount+')').className ="dot";
	compteur--;
	dotcount = compteur + 1;
	//remise à slides.length si compteur<0
	if(compteur < 0){
		compteur = slides.length - 1;
		dotcount = compteur + 1;
	}
	document.querySelector(".banner-img").src = './assets/images/slideshow/' + slides[compteur].image;
	document.querySelector("p").innerHTML = slides[compteur].tagLine;
	document.querySelector('.dot:nth-of-type('+dotcount+')').className ="dot_selected dot";
}


