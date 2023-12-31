let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let selectPlanButton = document.querySelectorAll(".plan button");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let ctaButton = document.querySelector(".main-nav__item--cta");

let backdropAndModalShowOrHide = () => {
  console.log("click");
  if (backdrop.classList.contains("open")) {
    backdrop.classList.remove("open");
    if (modal) {
      modal.classList.remove("open");
    }
    if (mobileNav.classList.contains("open")) {
      mobileNav.classList.remove("open");
    }
  } else {
    backdrop.classList.add("open");
    modal.classList.add("open");
  }
};

selectPlanButton.forEach((btn) => {
  btn.addEventListener("click", backdropAndModalShowOrHide);
});

backdrop.addEventListener("click", backdropAndModalShowOrHide);

if (modalNoButton) {
  modalNoButton.addEventListener("click", backdropAndModalShowOrHide);
}

toggleButton.addEventListener("click", () => {
  console.log("click");
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

ctaButton.addEventListener("animationstart", (event) => {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", (event) => {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", (event) => {
  console.log("Animation interation", event);
});
