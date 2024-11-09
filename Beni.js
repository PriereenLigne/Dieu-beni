// Fonction pour ouvrir WhatsApp
function openWhatsApp(number) {
  const url = `https://wa.me/${number}`;
  window.open(url, '_blank');
}

// Fonction de partage de produit
function shareProduct(productName) {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({
      title: `Découvrez ${productName} sur DIEU BENIT SERVICE`,
      url: url
    }).then(() => {
      console.log("Produit partagé avec succès");
    }).catch(error => {
      console.error("Erreur lors du partage :", error);
    });
  } else {
    alert("Le partage n'est pas pris en charge sur ce navigateur.");
  }
}

// Fonction de carrousel automatique
let index = 0;
function carousel() {
  const images = document.querySelectorAll('.carousel-images img');
  images.forEach(img => img.style.display = 'none');
  index++;
  if (index > images.length) { index = 1 }
  images[index - 1].style.display = 'block';
  setTimeout(carousel, 3000); // Change d'image toutes les 3 secondes
}
carousel();
document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.getElementById("contact");

  // Fonction pour vérifier si l'élément est visible à l'écran
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Vérifie l'animation au défilement
  function checkVisibility() {
    if (isElementInViewport(contactSection)) {
      contactSection.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
<script>
  // Afficher le bouton lorsque l'utilisateur défile vers le bas de 100px
  window.onscroll = function() {
    const btn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // Fonction pour défiler vers le haut
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>