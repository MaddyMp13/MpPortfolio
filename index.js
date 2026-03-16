// used for smooth scrolling
// Initialize Lenis
const lenis = new Lenis({
    duration: 3, // Customize the duration of the scroll animation
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Use a custom easing function
    smoothWheel: true, // Smooth scrolling for mouse wheel events
    autoRaf: true, // Automatically run the requestAnimationFrame loop
});




// Java script for the toggle button and setting user preferance
const toggle = document.getElementById("theme-toggle")

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }
})

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark")
}


gsap.from(".toggle-btn",
    { rotate: 360, duration: 2, opacity: 0 })


gsap.registerPlugin(ScrollTrigger);
/* HERO ANIMATION */
const tl = gsap.timeline();

tl.from(".nav-wrap", {
    y: -60,
    opacity: 0,
    duration: 1
})

    .from(".hero-img", {
        scale: 0,
        duration: .8
    })

    .from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: .8
    })

    .from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: .8
    })

    .from(".hero-btn", {
        y: 40,
        opacity: 0,
        duration: .8
    })


gsap.fromTo(".form-wrap",
    {
        scale: 0.6,
        opacity: 0
    },
    {
        scale: 1,
        opacity: 1,
    }
)


/* PROJECT CARDS */
gsap.utils.toArray(".project-card").forEach((card) => {

    gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: .8,
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        }
    });

});

/* SECTION SCROLL ANIMATION */
gsap.utils.toArray(".section").forEach((section) => {

    gsap.from(section, {
        opacity: 0,
        y: 60,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 85%"
        }
    });

});
