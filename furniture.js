let fauser=document.querySelector(".fa-user");
let login=document.querySelector(".login");
let header=document.querySelector("header");
let mark=document.querySelector("#mark");
let fabars=document.querySelector(".fa-bars");
let navlist=document.querySelector(".nav-list");
let clearNav=document.querySelector("#color");
let removeboxshop=document.querySelector(".mark1");

let basketshopping=document.querySelector(".fa-basket-shopping");
let shoppingbox=document.querySelector(".shopping-box");
let  arrowup=document.querySelector(".fa-arrow-up");



let popularsubtitle=document.querySelector(".popular-sub-title");


function  showProductShop(){

  
}

popularsubtitle.addEventListener("click" , showProductShop)






function showLogin(){
login.style.top="55%";

login.style.transition="top 2s "
header.style.filter="blur(9px)";
header.style.transition="all 4s "

}
function removeLogin(){
    login.style.top="-50%";
    shoppingbox.style.top="-50%";
   
    login.style.transition="top 2s linear ";
    header.style.filter="blur(0px)"; 
    header.style.transition="all 3s "
}
function toggleNav(){
  fabars.className="fa-solid fa-xmark  colors";

fabars.addEventListener("click" , clearNavData);

    navlist.style.top="50%";
    header.style.filter="blur(8px)";
    header.style.transition="all 3s "

}
function clearNavData(){
    navlist.style.top="-50%";
    fabars.className="fa-solid fa-bars";
   
    navlist.style.transition="top 2s linear ";
    header.style.filter="blur(0px)"; 
    header.style.transition="all 3s ";

    
}

function basketshoppingHandeler(){
shoppingbox.style.top="55%";
shoppingbox.style.left="50%";
shoppingbox.style.transition="all 3s";
header.style.filter="blur(8px)"; 
header.style.transition="all 3s ";

}

// {/* <i class="fa-solid fa-xmark" id="mark"> </i>
//   <i class="fa-solid fa-bars"></i> */}



function scrollTop(){
    let scrollTop=window.pageYOffset;
    if(scrollTop>20){
        navlist.style.top="-50%";
        fabars.className="fa-solid fa-bars";
       
        navlist.style.transition="top 2s linear ";
        header.style.filter="blur(0px)"; 
        header.style.transition="all 3s ";
       
    
}}

fauser.addEventListener("click" , showLogin);
mark.addEventListener("click" , removeLogin);
fabars.addEventListener("click" ,toggleNav);
basketshopping.addEventListener("click" , basketshoppingHandeler)
removeboxshop.addEventListener("click" ,removeLogin )
// clearNav.addEventListener("click" , clearNavData);

window.addEventListener("scroll" , scrollTop)