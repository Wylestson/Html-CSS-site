const form = document.getElementById("contactForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  if (email.value.trim() === "") {
    showError(email);
    valid = false;
  } else {
    hideError(email);
  }

  if (message.value.trim() === "") {
    showError(message);
    valid = false;
  } else {
    hideError(message);
  }

  if (valid) {
    alert("Message envoyé !");
    form.reset();
  }
});

function showError(input) {
  input.classList.add("error-border");
  input.nextElementSibling.style.display = "block";
}

function hideError(input) {
  input.classList.remove("error-border");
  input.nextElementSibling.style.display = "none";
}
