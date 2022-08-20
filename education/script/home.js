//! navbar
const nav=document.querySelector("nav ul");
const navButton=document.querySelector(".nav-link img");
let curentImg="image/sidebar-open.png";
let switchImg="image/sidebar-close.png";
navButton.addEventListener("click",()=>{
    nav.classList.toggle("active");
    navButton.setAttribute("src",switchImg);
    let temp=curentImg;
    curentImg=switchImg;
    switchImg=temp;
});

const stickyNav=document.querySelector("nav");
const head=document.querySelector("header");
const observeNav=new IntersectionObserver((ent,obs)=>{
    ent.forEach((element)=>{
        if(element.isIntersecting){
            stickyNav.setAttribute("class","unsticky");
        }
        else{
            stickyNav.setAttribute("class","sticky")
        }
    })
},{root:null,threshold:0.3});
observeNav.observe(head);

//! footer link
document.querySelector("img[src='image/instagram.png']").addEventListener('click',()=>{
    window.location.href="#";
});
document.querySelector("img[src='image/facebook.png']").addEventListener('click',()=>{
    window.location.href="#";
});
document.querySelector("img[src='image/twitter.png']").addEventListener('click',()=>{
    window.location.href="#";
});