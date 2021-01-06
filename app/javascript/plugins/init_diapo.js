const initDiapo = () => {
  // Variables globales
  let compteur = 0 // Compteur qui permettra de savoir sur quelle slide nous sommes
  let timer, elements, slides, slideWidth

  window.onload = () => {
    // On récupère le conteneur principal du diaporama
    const diapo = document.querySelector(".diapo")
    // On récupère le conteneur de tous les éléments
    elements = document.querySelector(".elements")
    // On récupère un tableau contenant la liste des diapos
    slides = Array.from(elements.children)
    // On calcule la largeur visible du diaporama
    slideWidth = diapo.getBoundingClientRect().width

    // On récupère les deux flèches
    let next = document.querySelector("#nav-right")
    let prev = document.querySelector("#nav-left")
    // On met en place les écouteurs d'évènements sur les flèches
    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)

    // Automatiser le diaporama
    /* Nous utiliseront un intervalle, stocké dans la variable "timer" pour faire défiler le diaporama toutes les 4 secondes
    */
    timer = setInterval(slideNext, 4000)
    // Gérer le survol de la souris
    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)

    // Mise en oeuvre du "responsive"
    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })
  }

  /**
   * Cette fonction fait défiler le diaporama vers la droite
   */
  function slideNext(){
      // On incrémente le compteur
      compteur++

      // Si on dépasse la fin du diaporama, on "rembobine"
      if(compteur == slides.length){
          compteur = 0
      }

      // On calcule la valeur du décalage
      let decal = -slideWidth * compteur
      elements.style.transform = `translateX(${decal}px)`
  }

  /**
   * Cette fonction fait défiler le diaporama vers la gauche
   */
  function slidePrev(){
      // On décrémente le compteur
      compteur--

      // Si on dépasse le début du diaporama, on repart à la fin
      if(compteur < 0){
          compteur = slides.length - 1
      }

      // On calcule la valeur du décalage
      let decal = -slideWidth * compteur
      elements.style.transform = `translateX(${decal}px)`
  }

  /**
   * Cette automatisation a un inconvénient, elle ne s'arrête jamais, même lorsque nous cliquons sur une flèche.
   * Nous allons donc mettre en place un arrêt au survol du diaporama.
   * On stoppe le défilement
   */
  function stopTimer(){
      clearInterval(timer)
  }

  /**
   * On redémarre le défilement
   */
  function startTimer(){
      timer = setInterval(slideNext, 4000)
  }
}

export default initDiapo;