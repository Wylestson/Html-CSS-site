// Récupération des éléments
const form = document.getElementById("contactForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Événement à l'envoi du formulaire
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Vérification email
  if (email.value.trim() === "") {
    showError(email);
    valid = false;
  } else {
    hideError(email);
  }

  // Vérification message vide
  if (message.value.trim() === "") {
    showError(message);
    message.nextElementSibling.textContent =
      "Ce champ ne peut pas être vide";
    valid = false;

  // Vérification message longueur
  } else if (message.value.trim().length < 10) {
    showError(message);
    message.nextElementSibling.textContent =
      "Le message doit contenir au moins 10 caractères";
    valid = false;

  } else {
    hideError(message);
  }

  // Si tout est valide
  if (valid) {
    console.log("Email :", email.value);
    console.log("Message :", message.value);

    alert("Message envoyé !");
    form.reset();
  }
});

// Fonction pour afficher une erreur
function showError(input) {
  input.classList.add("error-border");
  input.nextElementSibling.style.display = "block";
}

// Fonction pour cacher une erreur
function hideError(input) {
  input.classList.remove("error-border");
  input.nextElementSibling.style.display = "none";
}
