const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-list");
const cityList = document.querySelectorAll(".city-list li");
const modalOuter = document.querySelector(".modal-outer");
const shipImages = document.querySelectorAll(".ship-img");
const sectionThree = document.querySelector("#section-three");
const navBurger = document.querySelector(".nav-burger");

function stickyNav() {
  if (window.scrollY > 10) {
    navBurger.classList.add("sticky-burger");
    document.body.style.paddingTop = 10 + "px";
  } else {
    document.body.style.paddingTop = 0;
    navBurger.classList.remove("sticky-burger");
  }
}

function openBurgerMenu() {
  if (!burgerBtn.classList.contains("open")) {
    burgerMenu.classList.add("open");
    burgerBtn.classList.add("open");
    document
      .querySelectorAll("section")
      .forEach((section) => section.classList.add("off"));
  } else {
    burgerMenu.classList.remove("open");
    burgerBtn.classList.remove("open");
    document
      .querySelectorAll("section")
      .forEach((section) => section.classList.remove("off"));
  }
}

function closeBurgerMenu(e) {
  if (e.key === "Escape" && burgerBtn.classList.contains("open")) {
    burgerMenu.classList.remove("open");
    burgerBtn.classList.remove("open");
  }
}

function handleCityCard(e) {
  if (e.target.classList.contains("modal-outer")) {
    modalOuter.classList.remove("open");
  }
  if (
    (e.key === "Escape" && modalOuter.classList.contains("open")) ||
    e.target.classList.contains("close-button")
  ) {
    modalOuter.classList.remove("open");
  }
}

function openImage(e) {
  const text = sectionThree.querySelector(".content-text");
  if (e.target.dataset.img === "restaurant") {
    sectionThree.style.backgroundImage = `url("../../../images/${e.target.dataset.img}.png")`;
    text.innerText =
      "11 невероятных ресторанов с различными национальными кухнями";
  } else if (e.target.dataset.img === "pool") {
    sectionThree.style.backgroundImage = `url("../../../images/${e.target.dataset.img}.png")`;
    text.innerText = "8 взрослых бассейнов + 3 детских";
  }
}

cityList.forEach((city) =>
  city.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      modalOuter.classList.add("open");
    }
  })
);

burgerBtn.addEventListener("click", openBurgerMenu);

window.addEventListener("keyup", closeBurgerMenu);

window.addEventListener("keyup", handleCityCard);
modalOuter.addEventListener("click", handleCityCard);

window.addEventListener("scroll", stickyNav);

shipImages.forEach((image) => {
  image.addEventListener("click", openImage);
});

// Slider Jquery
$(".slider").slick({
  variableWidth: !0,
  touchMove: true,
  centerMode: true,
  arrows: true,
  centerPadding: "60px",
  slidesToShow: 3,
  prevArrow:
    '<img class="nav-arrow prev" src="./images/left-arrow.png" alt="feedback" />',
  nextArrow:
    '<img class="nav-arrow next" src="./images/right-arrow.png" alt="feedback" />',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
