let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});
function ouvrirMessagerie() {
  // Récupérer les valeurs du formulaire
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  const mail = document.getElementById('email').value;

  // Générer le lien mailto avec les informations du formulaire préremplies
  const mailtoLink = `mailto:${mail}?subject=&body=${encodeURIComponent(`Bonjour,\n\n${prenom} ${nom} Je vous contacte`)}`;

  // Ouvrir la messagerie par défaut avec le lien mailto
  window.open(mailtoLink);
}
