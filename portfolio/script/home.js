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



//! graph AnimationEffect
const bar=document.querySelectorAll(".bar");
bar.forEach((ele)=>{
    let insial=0;
    let final=getComputedStyle(ele).getPropertyValue("--i");
    let inc=final/100;
    let barWidth=window.getComputedStyle(ele,":before");
    function animat(){
        console.log(insial);
        barWidth["width"]=`${insial}%`;
        insial+=inc;
        if(insial<=final){
            setTimeout(10,animat());
        }
        return;
    }
    animat();
    
});
