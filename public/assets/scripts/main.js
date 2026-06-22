const menuToggle = document.querySelector("#menu-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const yearElement = document.querySelector("#year");
const faqItems = document.querySelectorAll(".faq__item");
const ctaForm = document.querySelector("#cta-form");
const formMessage = document.querySelector("#form-message");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

if (menuToggle && navbarMenu) {
    menuToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("is-open");

        const icon = menuToggle.querySelector("i");

        if (navbarMenu.classList.contains("is-open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    navbarMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navbarMenu.classList.remove("is-open");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        });
    });
}

faqItems.forEach((item) => {
    const button = item.querySelector(".faq__question");

    button.addEventListener("click", () => {
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("is-open");
            }
        });

        item.classList.toggle("is-open");
    });
});

if (ctaForm && formMessage) {
    ctaForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailInput = document.querySelector("#email");
        const email = emailInput.value.trim();

        if (!email) {
            formMessage.textContent = "Ingresa un correo válido para continuar.";
            return;
        }

        formMessage.textContent = "Gracias. Te avisaremos cuando FocusFlow esté disponible.";
        ctaForm.reset();
    });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
        }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-visible");
    });
}