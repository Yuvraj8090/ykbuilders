//menu
let navbar = document.getElementById("menus");


const toggle = () => {
    if (navbar.style.display == "none") {
        navbar.style.display = "block";
        navbar.style.textAlign = "left";

    }
    else {
        navbar.style.display = "none";
    }
}

