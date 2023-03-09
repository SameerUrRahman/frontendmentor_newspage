const PrimaryNav= document.querySelector(".primary-navigation");
const navToggle =  document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener('click',()=>{
    const visibility = PrimaryNav.getAttribute("data-visible")
    console.log(visibility);
     if(visibility==="false")
     {
        PrimaryNav.setAttribute("data-visible",true);
        navToggle.setAttribute("aria-expanded",true);
    }
    else if (visibility==="true")
    {
        PrimaryNav.setAttribute("data-visible",false);
        navToggle.setAttribute("aria-expanded",false);

     }
});