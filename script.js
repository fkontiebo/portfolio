//partie clique efface---------------------
    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for (tablink of tablinks){
            tablink.classList.remove("active-link");
            }
 
        for (tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
            }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")
        }

    document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Apparition
                } else {
                    entry.target.classList.remove("visible"); // Disparition
                }
            });
        },
        { threshold: 0.2 } // L'élément doit être 20% visible avant d'apparaître
    );

    items.forEach((item) => observer.observe(item));
});


//-------------partie onglet--------------
const boutons = document.querySelectorAll('.bouton-onglet');
    const contenus = document.querySelectorAll('.contenu');

    boutons.forEach(bouton => {
      bouton.addEventListener('click', () => {
        // Supprimer la classe active de tous les boutons et contenus
        boutons.forEach(btn => btn.classList.remove('actif'));
        contenus.forEach(contenu => contenu.classList.remove('actif'));

        // Ajouter la classe active au bouton cliqué et au contenu correspondant
        bouton.classList.add('actif');
        document.getElementById(bouton.getAttribute('data-onglet')).classList.add('actif');
      });
    });

//--------------------text afface ecris------------------

    const textElement = document.getElementById("typed-text");

// Liste des textes à afficher
const words = ["Systèmes embarqués", "Méthodes Agile", "IA, Machine learning", "Développement Logiciel"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    if (!textElement) return; // Évite l'erreur si l'élément n'existe pas

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textElement.textContent = currentWord.substring(0, charIndex);

    let typingSpeed = isDeleting ? 50 : 100; // Vitesse de frappe et suppression

    if (!isDeleting && charIndex === currentWord.length) {
        typingSpeed = 1500; // Pause après avoir affiché le mot
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause avant de commencer le mot suivant
    }

    setTimeout(typeEffect, typingSpeed);
}

// Démarrer l'effet après le chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});

//-----------------formulaire recuperation reponses-------------

// formulaire pour recuperer les reponses
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche le rechargement de la page
        // Récupération des valeurs du formulaire
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // URL du Google Forms
        const formURL = "https://docs.google.com/forms/d/e/1FAIpQLScsHhQW18-wnXdlZDx5-cKG43YZbtipiBUl26Yv2X-5ZEB9vg/formResponse";

        // Création de l'objet FormData avec les bons entry.XXXXXXX
        const formData = new FormData();
        formData.append("entry.1122442064", name);
        formData.append("entry.1442597041", email);
        formData.append("entry.1298033406", message);

        // Envoi des données à Google Forms
        fetch(formURL, {
            method: "POST",
            body: formData,
            mode: "no-cors" // Évite les erreurs de CORS
        }).then(() => {
            alert("Message envoyé !");
            document.getElementById("contact-form").reset(); // Réinitialise le formulaire
        }).catch(error => console.error("Erreur :", error));
    });
});
//-----------------
var sidemeu=document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right="0px";
}
function closemenu(){
    sidemeu.style.right="-200px";
}


