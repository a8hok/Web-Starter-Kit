//! mobile nav-bar
const navButton=document.querySelector(".sidebar");
const nav=document.querySelector("ul");
let curentImg="image/sidebar.png";
let switchImg="image/close.png";

navButton.addEventListener('click',()=>{
    nav.classList.toggle("active");
    navButton.setAttribute("src",switchImg);
    let temp=switchImg;
    switchImg=curentImg;
    curentImg=temp;
});