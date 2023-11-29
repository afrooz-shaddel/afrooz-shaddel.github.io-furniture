let data=[
    {"id":"1",
    "img" :"./imgp/12.jpg",
    "type":"Leather sofa" ,
    "price":"40" , 
    "quantity":"1"},

    {"id":"2",
     "img" :"./imgp/images (4).jpg", 
     "type":"Leather sofa" , 
     "price":"80" , 
     "quantity":"1"},

    {"id":"3",
    "img":"./imgp/images10.jpg" , 
    "type":"Leather sofa" , 
    "price":"50" , 
    "quantity":"1"},

    {"id":"4",
    "img" :"./imgp/download (1).jpg" , 
    "type":"Leather sofa" , 
    "price":"65" , 
    "quantity":"1"},

    {"id":"5",
    "img":"./imgp/download.jpg " , 
    "type":"Leather sofa" , 
    "price":"78" , 
    "quantity":"1"},

    {"id":"6",
    "img":"./imgp/images 16.jpg" , 
    "type":"Steel furniture" , 
    "price":"95" , 
    "quantity":"1"},

    {"id":"7",
    "img":"./imgp/images (3).jpg" , 
    "type":"Steel furniture" , 
    "price":"35" , 
    "quantity":"1"},

    {"id":"8",
    "img":"./imgp/images (2).jpg " , 
    "type":"Steel furniture" , 
    "price":"40" , 
    "quantity":"1"}


]


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

let popularcontent=document.getElementById("shop-product")



let popularsubtitle=document.querySelector(".popular-sub-title");
let shoppingcart=document.querySelector(".shopping-cart")


let shoppingtotal=document.querySelector(".shopping-total")

// function  showProductShop(){

//   console.log("v")
// }

// popularsubtitle.addEventListener("click" , showProductShop)






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

function product(item){
    
       
    let divPopular= document.createElement("div");
 divPopular.className="popular-item";
 let imgPopular= document.createElement("img");
 imgPopular.setAttribute("src" , item.img)
 let divPopulardis= document.createElement("div");
 divPopulardis.className="popular-discription  product"
 let divWrapper= document.createElement("div");
 
 let pName= document.createElement("p");
 pName.innerHTML="Solt Furniture"
 let pPrice= document.createElement("p");
 pPrice.innerHTML="$"+item.price
 divWrapper.append(pName , pPrice)
 let divWrapper2= document.createElement("div");
let iElem=document.createElement("i")
iElem.className="fa-solid fa-cart-shopping cart"
divWrapper2.append(iElem)
divWrapper2.addEventListener("click" , function(){
 clickHandeler(item.id)
})
divPopulardis.append(divWrapper , divWrapper2)
divPopular.append(imgPopular , divPopulardis)

// let divSlider= document.createElement("div");
//  divSlider.className="mySlides fade popular-item"
//  divSlider.append(imgPopular , divPopulardis)
popularcontent.append(divPopular)



}





let bascket=[];
function clickHandeler(id){
   let data1=data.filter(item=>item.id===id)
   let price=data1.price

   trueBasket= bascket.some(item=>item.id==id)      
   data1.forEach(item=>{
    if(trueBasket){
      alert("a")
    }else{
      bascket.push(item)
    
    }

  
console.log(bascket)
   })
   productBascket(bascket)
  
  }
//    bascket.push[obj1]
// }

// filter


function click1(){
    let data2=event.target.value;
    if(data2==="select"){
       
        alert("choose")

    }
    if(data2==="All"){
        popularcontent.innerHTML=""
        data.forEach(item=>{
          product(item)
 
 
        })
    }
    else{
      let data1=data.filter(item=>item.type==data2)
      popularcontent.innerHTML=""
      data1.forEach(item=>{
        product(item)
      })
 
    }
}


// slider

// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }




// total price

{/* <div class="shopping-item">
              <img  class="shopping-img" src="./imgp/download (2).jpg" alt="">
               <div  class="shopping-dis">
                   <p class="shopping-title">soft furniture</p>
                   <span class="shopping-price">$150</span>
                   <span class="shopping-number">xl</span>
               </div>
                <i class="fa-regular fa-trash-can"></i> 
           </div> */}

    
  function productBascket(bascket){
//  console.log(bascket)

shoppingcart.innerHTML=""
    bascket.forEach(item=>{
   
      let shoppingImg=document.createElement("img");
    shoppingImg.className="shopping-img";
    shoppingImg.setAttribute("src" , item.img)
    let shoppingdiscription=document.createElement("div");
    shoppingdiscription.className="shopping-dis";
    let shoppingprice=document.createElement("span");
    shoppingprice.className="shopping-price";
    shoppingprice.innerHTML=` ${item.price} $`;
    let quantity=document.createElement("div");
    quantity.className="quantity"
    let iPlus=document.createElement("i");
    iPlus.className="fa-solid fa-plus";
    let iMenus=document.createElement("i");
    iMenus.className="fa-solid fa-minus";
    let shoppingquantity=document.createElement("span");
    shoppingquantity.className="shopping-quantity";
    shoppingquantity.innerHTML=item.quantity;
    quantity.append(iPlus , shoppingquantity,iMenus)
    shoppingdiscription.append(quantity, shoppingprice)
    let shoppingitem=document.createElement("div")
    shoppingitem.className="shopping-item";
    let iTrash=document.createElement("i");
    iTrash.className="fa-regular fa-trash-can";
    shoppingitem.append(shoppingImg ,shoppingdiscription ,iTrash);

shoppingcart.append(shoppingitem)

    })
    
  }


  // shopping Total Price

function TotalCount(){
  let shoppingtotalnumber=document.createElement("span");
  shoppingtotalnumber.className="shopping-total-number";
  shoppingtotalnumber.innerHTML=item.length;
  let shoppingtotalprice=document.createElement("span");
  shoppingtotalprice.className="shopping-total-price";
  shoppingtotalprice.innerHTML= ` Total: ${item.length}$`;
  shoppingtotal.append(shoppingtotalnumber , shoppingtotalprice)
}
