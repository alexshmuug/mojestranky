document.addEventListener("DOMContentLoaded", () => {
    console.log("Stránka je načítaná a pripravená.");
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-btn");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("visible");
        mainContent.classList.toggle("shifted");
    });
});
