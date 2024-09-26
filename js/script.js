// AFFICHE NOMS PLANETS
const activeName = (div) => {
    let attribut = div.getAttribute('data'); 
    let child = div.childNodes[0]
    child.style.background = 'rgba(255, 255, 255, 0.397)'
    div.setAttribute("onclick", "stopName(this)");
    let nom = document.getElementById('name-'+attribut)
    nom.style.display = "inline"
}
// EFFACE NOMS PLANETS
const stopName = (div) => {
    let attribut = div.getAttribute('data');
    let child = div.childNodes[0]
    child.style.background = 'rgba(255, 255, 255, 0.059)'
    div.setAttribute("onclick", "activeName(this)");
    let nom = document.getElementById('name-'+attribut)
    nom.style.display = "none"
}
// AFFICHE CERCLE ROTATION
const activeCircle = (div) => {
    let attribut = div.getAttribute('data');
    let child = div.childNodes[0]
    child.style.background = 'rgba(255, 255, 255, 0.397)'
    let svg = document.getElementById('circle-'+attribut)
    svg.style.display = "inline"
    div.setAttribute("onclick", "stopCircle(this)");
}
// DESACTIVE CERCLE ROTATION
const stopCircle = (div) => {
    let attribut = div.getAttribute('data');
    let child = div.childNodes[0]
    child.style.background = 'rgba(255, 255, 255, 0.059)'
    let svg = document.getElementById('circle-'+attribut)
    svg.style.display = "none"
    div.setAttribute("onclick", "activeCircle(this)");
}

// ROTATION PLANETS
const mercure = document.getElementById('chemin-planet-mercure')
gsap.to(mercure, {
    duration: 3,
    repeat: -1, 
    ease: "linear",
    rotation: 360, 
    transformOrigin: `center center`, 
});
const venus = document.getElementById('chemin-planet-venus')
gsap.to(venus, {
    duration: 9,
    repeat: -1, 
    ease: "linear",
    rotation: 360, 
    transformOrigin: `center center`, 
});
const terre = document.getElementById('chemin-planet-terre')
gsap.to(terre, {
    duration: 15,
    repeat: -1, 
    ease: "linear",
    rotation: 360, 
    transformOrigin: `center center`, 
});
const mars = document.getElementById('chemin-planet-mars')
gsap.to(mars, {
    duration: 28,
    repeat: -1, 
    ease: "linear",
    rotation: 360, 
    transformOrigin: `center center`, 
});
const jupiter = document.getElementById('chemin-planet-jupiter')
gsap.to(jupiter, {
    duration: 180,
    repeat: -1, 
    ease: "linear",
    rotation: 360, 
    transformOrigin: `center center`, 
});
const saturne = document.getElementById('chemin-planet-saturne')
gsap.to(saturne, {
    duration: 442,
    repeat: -1, 
    ease: "linear",
    rotation: 360, 
    transformOrigin: `center center`, 
});
const uranus = document.getElementById('chemin-planet-uranus')
gsap.to(uranus, {
    duration: 1260,
    repeat: -1, 
    ease: "linear",
    rotation: 360, 
    transformOrigin: `center center`, 
});
const neptune = document.getElementById('chemin-planet-neptune')
gsap.to(neptune, {
    duration: 2475,
    repeat: -1, 
    ease: "linear",
    rotation: 360,
    transformOrigin: `center center`, 
});
// NB ROTATION TERRE
let annees = 0;
function nbAnnees() {
    setInterval(function() {
        annees ++;
        document.getElementById('tspan8735-0-8-1-8-4-4').innerHTML = annees+' années terreste'
    }, 15000);
}
nbAnnees();
// MODAL
let cardTitle = document.getElementsByClassName('card-title')[0];
let cardContent = document.getElementsByClassName('card-content')[0];
let cardImg = document.getElementsByClassName('card-img-top')[0];
$('.modal').on('show.bs.modal', function (e) {
    let planet = $(e.relatedTarget).attr('id');
    console.log(planet)
    switch (planet) {
        case "soleil":
            cardTitle.innerHTML = "Soleil"
            cardContent.innerHTML = "Le Soleil est l’étoile du Système solaire. Dans la classification astronomique, c’est une étoile de type naine jaune d'une masse d'environ 1,989 1 × 10³⁰ kg, composée d’hydrogène et d’hélium."
            cardImg.src = "assets/img/soleil.jpg"
        break;
        case "mercure":
            cardTitle.innerHTML = "Mercure"
            cardContent.innerHTML = "Nommé d'après le messager des dieux romains réputé pour sa grande vitesse, Mercure fait le tour du Soleil en seulement 88 jours. De toutes les planètes, c'est celle dont l'année est la plus courte. Tout comme la Terre, Mercure tourne aussi autour de son axe, mais beaucoup plus lentement."
            cardImg.src = "assets/img/mercure.jpg"
        break;
        case "venus":
            cardTitle.innerHTML = "Vénus"
            cardContent.innerHTML = "Un jour vénusien – le temps nécessaire pour que la planète fasse une rotation complète – est égal à 243 jours terrestres. En fait, il lui faut moins de temps – 225 jours terrestres – pour faire le tour du Soleil. Tout comme sur Mercure, l'année sur Vénus est plus courte que la journée!"
            cardImg.src = "assets/img/venus.jpg"
        break;
        case "terre":
            cardTitle.innerHTML = "Terre"
            cardContent.innerHTML = "Il faut 365,26 jours à la Terre pour faire le tour du Soleil. Puisque cette période est un peu plus longue que 365 jours exactement, on ajoute un jour tous les quatre ans. Une année de 366 jours est appelée année bissextile. La Terre tourne aussi sur son axe."
            cardImg.src = "assets/img/terre.jpg"
        break;
        case "mars":
            cardTitle.innerHTML = "Mars"
            cardContent.innerHTML = "La période orbitale de Mars est de 686,96 jours terrestres, soit 1,880 8 année terrestre, et le jour solaire y dure 24 h 39 min 35,244 s."
            cardImg.src = "assets/img/mars.jpg"
        break;
        case "jupiter":
            cardTitle.innerHTML = "Jupiter"
            cardContent.innerHTML = "Si les jours sont courts sur Jupiter, les années, elles, sont longues : la planète fait le tour du Soleil en un peu moins de douze années terrestres."
            cardImg.src = "assets/img/jupiter.jpg"
        break;
        case "saturne":
            cardTitle.innerHTML = "Saturne"
            cardContent.innerHTML = "sa période de révolution vaut un peu moins de 30 années terrestres tandis que sa période de rotation est estimée à 10 h 33 min."
            cardImg.src = "assets/img/saturne.jpg"
        break;
        case "uranus":
            cardTitle.innerHTML = "Uranus"
            cardContent.innerHTML = "Il faut 84 ans pour qu'Uranus fasse une révolution autour du Soleil. Uranus tourne autour d'un axe horizontal, contrairement à toutes les autres planètes, qui tournent sur un axe vertical. D'après les scientifiques, une planète de la taille de la Terre aurait percuté Uranus et l'aurait fait basculer sur le côté."
            cardImg.src = "assets/img/uranus.jpeg"
        break;
        case "neptune":
            cardTitle.innerHTML = "Neptune"
            cardContent.innerHTML = "La différence entre les vitesses de rotation de Neptune est la plus grande de toutes les planètes. C'est la cause des vents les plus violents du Système solaire : ils soufflent jusqu'à 2 100 km/h ! Une révolution complète de Neptune autour du Soleil prend 165 ans."
            cardImg.src = "assets/img/neptune.png"
        break;
        default:
            console.log('ERROR')
        break;
    }
});





// chemin-neptune
// circle-uranus-9
// circle-saturne-4
// circle-venus-0
// circle-earth-2
// circle-mars-5
// circle-jupiter-0
// MERCURE 88 jours
// VENUS 225 jours
// TERRE 365,26 jours
// MARS 687 jours
// JUPITER 12 ans
// SATURNE 29,5 ans
// URANUS 84 ans
// NEPTUNE 165 ans
// Ajouter nb tours des planets


