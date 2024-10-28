
gsap.to(".dot" , {
    y : -60,

    stagger : {
        each: 0.2,
        repeat: -1,
        yoyo: true,

    }

})

gsap.to(".shadow" , {
    y : 60,
    stagger : {
        each: 0.2,
        repeat: -1,
        yoyo: true,
    },
    opacity : 0.1,

}) 

console.log("Chargement de la page loader");

setTimeout(function() {
    // Ajoute un état à l'historique avant la redirection
    history.pushState({page: 1}, '', window.location.href);

    // Redirige vers la page principale
    window.location.href = "./page-accueil/page-accueil.html";
}, 2000); 

// Pour éviter le bug de l'animation "Loader" qui s'effectue à l'infini lors du retour en arrière sur Safari
window.onpageshow = function(event) {
    // Détecte si la page a été chargée depuis l'historique (bouton retour) (Fonctionne sur Safari et Firefox)
    if (event.persisted) {
        window.location.reload(); 
    }
}

// Pour Chrome : gestion du retour en arrière
window.addEventListener('popstate', function(event) {
    console.log('Retour en arrière détecté');
    // Redirection forcée à chaque retour en arrière
    window.location.href = "./page-accueil/page-accueil.html";
});

// Bloquer le retour en arrière sur Chrome
window.history.pushState(null, null, window.location.href);
window.onpopstate = function() {
    // Remet l'état de la page actuelle à chaque tentative de retour en arrière
    window.history.pushState(null, null, window.location.href);
};