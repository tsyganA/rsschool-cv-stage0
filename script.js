const header = document.querySelector(".head");
const burger = document.querySelector("#burger");
const popup = document.querySelector("#popup");
const headul = document.querySelector(".headul_li");
const navmenu = document.querySelector("#alignment").cloneNode(1);
const navmenunt = navmenu.querySelectorAll(".lin");
const body = document.body;
const links = Array.from(navmenunt);
const background = document.querySelector(".blackout");

// BURGER

burger.addEventListener("click", openMenu);

function openMenu(event) {
    event.preventDefault();
    popup.classList.toggle("open");
    header.classList.toggle("open");
    burger.classList.toggle("active");
    body.classList.toggle("stop-scrolling");
    background.classList.toggle("unactive");
    menuPopup();
}

function menuPopup() {
    popup.append(navmenu);
    navmenu.classList.toggle("burger");
}

links.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

background.addEventListener("click", (e) => {
    if (header.classList.contains("open")) {
        popup.classList.remove("open");
        header.classList.remove("open");
        burger.classList.remove("active");
        body.classList.remove("stop-scrolling");
        navmenu.classList.remove("burger");
        background.classList.toggle("unactive");
    }
});

function closeMenu() {
    popup.classList.remove("open");
    header.classList.remove("open");
    burger.classList.remove("active");
    body.classList.remove("stop-scrolling");
    navmenu.classList.remove("burger");
    background.classList.toggle("unactive");
}