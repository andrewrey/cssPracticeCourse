let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let selectPlanButton = document.querySelectorAll(".plan button");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

let backdropAndModalShowOrHide = () => {
  console.log("click");
  if (backdrop.style.display === "block") {
    backdrop.style.display = "none";
    modal.style.display = "none";
    if (mobileNav.style.display === "block") {
      mobileNav.style.display = "none";
    }
  } else {
    backdrop.style.display = "block";
    modal.style.display = "block";
  }
};

selectPlanButton.forEach((btn) => {
  btn.addEventListener("click", backdropAndModalShowOrHide);
});

backdrop.addEventListener("click", backdropAndModalShowOrHide);

modalNoButton.addEventListener("click", backdropAndModalShowOrHide);

toggleButton.addEventListener("click", () => {
  console.log("click");
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
