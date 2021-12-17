//Get Toggle Button Icon
const togglebtn = document.getElementById("toggleBtn");
//Get Remove Icon Element
const removeIcon = document.getElementById("removeIcon");
//Get Navbar Element
const Navbar = document.querySelector(".navbar");

togglebtn.addEventListener("click",function () {
    
    Navbar.classList.add("showNavbar");
});

removeIcon.addEventListener("click", function () {

    Navbar.classList.remove("showNavbar");
});