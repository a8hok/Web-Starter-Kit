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



//! stiky nav-bar
const head=document.querySelector("header");
const navBar=document.querySelector("nav");
const observeNav=new IntersectionObserver((ent,obs)=>{
    ent.forEach((element)=>{
        if(element.isIntersecting){
            // console.log("true");
            navBar.style.position="static";
        }
        else{
            // console.log("false");
            navBar.style.position="sticky";
        }
    })
},{root:null,threshold:0.3});
observeNav.observe(head);

//! footer link
const github=document.querySelector("img[src='image/github.png']");
github.addEventListener('click',()=>{
    window.location.href="https://github.com/mukesh1308";
});
const sec=document.querySelector("img[src='image/instagram.png']");
sec.addEventListener('click',()=>{
    window.location.href="#";
});
const third=document.querySelector("img[src='image/discord.png']");
third.addEventListener('click',()=>{
    window.location.href="#";
});