//COPYRIGHT CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//SMOOTH SCROLLING
const allLinks = document.querySelectorAll(".inpage:link");

allLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        if(href==="#") 
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        
        if(href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }
    });
});
