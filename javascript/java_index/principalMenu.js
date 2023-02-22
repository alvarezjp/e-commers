let principalMenu = document.querySelector(".principal_menu");

principalMenu.addEventListener("click", (evento) => {
    if (evento.target.classList.contains("principal__button")) {
        window.location.href = "http://127.0.0.1:5500/login.html";
    }
});

principalMenu.addEventListener("mouseover", (evento2) => {
    if ((evento2.target.classList.contains("principal__button"))) {
        evento2.target.style.cursor = "pointer";

    } else {
        evento2.target.style.cursor = "default";
    }
});