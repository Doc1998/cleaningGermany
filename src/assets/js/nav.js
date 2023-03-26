//
//    Toggle Mobile Navigation
//
const navbarMenu = document.querySelector("#navigation #navbar-menu");
const hamburgerMenu = document.querySelector("#navigation .hamburger-menu");

hamburgerMenu.addEventListener('click', function() {
    const isNavOpen = navbarMenu.classList.contains("open");
    if (!isNavOpen) {
        hamburgerMenu.setAttribute("aria-expanded", true);
        hamburgerMenu.classList.add("clicked");
        navbarMenu.classList.add("open");
    } else {
        hamburgerMenu.setAttribute("aria-expanded", false);
        hamburgerMenu.classList.remove("clicked");
        navbarMenu.classList.remove("open");
    }
});
const toggle = document.querySelector("#pricing .cs-toggle");
        const option1 = document.querySelector("#pricing .cs-toggle-group #cs-option1");
        const option2 = document.querySelector("#pricing .cs-toggle-group #cs-option2");
        const optionGroup = Array.from(document.querySelectorAll('.cs-option-group'))

        toggle.addEventListener('click', (e) => { 
            for (const item of optionGroup) {
                item.classList.toggle("option2-active");
            }
            toggle.classList.toggle("active");
        });
        option1.addEventListener('click', (e) => { 
            for (const item of optionGroup) {
                item.classList.remove("option2-active");
            }
            toggle.classList.remove("active");
        });
        option2.addEventListener('click', (e) => { 
            for (const item of optionGroup) {
                item.classList.add("option2-active");
            }
            toggle.classList.add("active");
        });
                                