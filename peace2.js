window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    if (isVisible) {
      card.classList.add("visible");
    }
  });
});
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".feature-card");

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    if (isVisible) {
      card.classList.add("visible");
    }
  });
});





const textArray = ["Consulting", "KYC", "Audits", "Development"];
const typedText = document.getElementById("typed-text");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = textArray[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typedText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % textArray.length;
    }
    setTimeout(typeEffect, 1000);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

