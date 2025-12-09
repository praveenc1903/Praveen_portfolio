/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*=============== REMOVE MENU (MOBILE) ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*=============== ACTIVE SECTIONS ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 60,
              sectionId = current.getAttribute("id"),
              link = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
        } else {
            link.classList.remove("active-link");
        }
    });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATIONS ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 150
});

sr.reveal(".home__data, .section-title", {});
sr.reveal(".home__img", { delay: 300 });
sr.reveal(".home__social-icon", { interval: 150 });

sr.reveal(".about__img, .skills__data", { interval: 100 });
sr.reveal(".about__text", { delay: 200 });

sr.reveal(".work__img", { interval: 200 });
sr.reveal(".contact__input", { interval: 150 });