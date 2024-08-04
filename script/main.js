

let navbar=document.getElementById("navbar-scroll");
let navLink=document.getElementById("nav-link")
let navLink1=document.getElementById("nav-link1")
let navLink2=document.getElementById("nav-link2")
let navLink3=document.getElementById("nav-link3")
let navLink4=document.getElementById("nav-link4")
let navLink5=document.getElementById("nav-link5")
let navbarBrand=document.getElementById("navbar-brand")


window.onscroll=function(){
    let value=scrollY;
    if(value > 600){
        navbar.style.position="fixed";
        navbar.style.backgroundColor="#fff";
        navLink.style.color="#1c1b1bfd";
        navLink1.style.color="#1c1b1bfd";
        navLink2.style.color="#1c1b1bfd";
        navLink3.style.color="#1c1b1bfd";
        navLink4.style.color="#1c1b1bfd";
        navLink5.style.color="#1c1b1bfd";
        navbarBrand.style.color="#1c1b1bfd";
    }else{
        navbar.style.position="static";
        navbar.style.backgroundColor="transparent";
        navLink.style.color="#fff";
        navLink1.style.color="#fff";
        navLink2.style.color="#fff";
        navLink3.style.color="#fff";
        navLink4.style.color="#fff";
        navLink5.style.color="#fff";
        navbarBrand.style.color="#fff";
    }
}