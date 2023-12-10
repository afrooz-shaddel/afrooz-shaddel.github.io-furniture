


let data=[
    {"id":"1",
    "img" :"./imgp/12.jpg",
    "type":"Leather sofa" ,
    "price":"40" ,
     "name":"Chesterfield",
    "quantity":"1"},

    {"id":"2",
     "img" :"./imgp/images (4).jpg", 
     "type":"Leather sofa" , 
     "price":"80" ,
      "name":"Sectional", 
     "quantity":"1"},

    {"id":"3",
    "img":"imgp/imge14.jpg" , 
    "type":"Leather sofa" , 
    "price":"50" , 
      "name":"Chaise", 
    "quantity":"1"},

    {"id":"4",
    "img" :"./imgp/download (1).jpg" , 
    "type":"Leather Sofa" , 
    "price":"65" , 
   "name":"Bridgewater", 
    "quantity":"1"},

    {"id":"5",
    "img":"./imgp/download.jpg " , 
    "type":"Leather sofa" , 
    "price":"78" , 
   "name":"Cabriole", 
    "quantity":"1"},

    {"id":"6",
    "img":"./imgp/images 16.jpg" , 
    "type":"Steel furniture" , 
    "price":"95" , 
    
     "name":"Lawson", 
    "quantity":"1"},

    {"id":"7",
    "img":"./imgp/images (3).jpg" , 
    "type":"Steel furniture" , 
    "price":"35" , 
   "name":"MidCentry", 
    "quantity":"1"},

    {"id":"8",
    "img":"./imgp/images (2).jpg " , 
    "type":"Steel furniture", 
    "price":"40" ,
   "name":"Flodingl", 
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

let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password");
let loginbutton=document.querySelector(".login-button");


let popularsubtitle=document.querySelector(".popular-sub-title");
let shoppingcart=document.querySelector(".shopping-cart")


let shoppingtotal=document.querySelector(".shopping-total")
let shoppingtotalnumber=document.querySelector(".shopping-total-number")
let shoppingtotalprice=document.querySelector(".shopping-total-price")
let searchInput=document.querySelector(".searchInput")
let searchBtn=document.querySelector(".searchbtn")
let categoryList=document.querySelectorAll(".categoryItem");

// let modal=document.querySelector(".modal");


// function removeModal(){

// }

// modal.addEventListener("click" , removeModal)
function submitForm(event){
event.preventDefault()
console.log(emailInput.value , passwordInput.value)
}



loginbutton.addEventListener("click" ,submitForm )


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


function product(items){
  popularcontent.innerHTML=""
    items.forEach(item=>{
      let divPopular= document.createElement("div");
      divPopular.className="popular-item";
      let imgPopular= document.createElement("img");
     if(item.img && item.img!==undefined){
       imgPopular.src=item.img;
     }
     // console.log(item.img)
      imgPopular.src=item.img;
      let divPopulardis= document.createElement("div");
      divPopulardis.className="popular-discription  product"
      let divWrapper= document.createElement("div");
      
      let pName= document.createElement("p");
      pName.innerHTML=item.name;
      let pPrice= document.createElement("p");
      pPrice.innerHTML="$"+item.price
      divWrapper.append(pName , pPrice)
      let divWrapper2= document.createElement("div");
      divWrapper2.className="buyProduct"
     let iElem=document.createElement("i")
     iElem.className="fa-solid fa-cart-shopping cart"
     divWrapper2.append(iElem)
     divWrapper2.addEventListener("click" , function(){
      clickHandeler(item.id)
     })
     divPopulardis.append(divWrapper , divWrapper2)
     divPopular.append(imgPopular , divPopulardis)
     let divAos=document.createElement("div");
     divAos.setAttribute("data-aos" , "fade-up")
     divAos.setAttribute("data-aos-duration" , "3000")
     divAos.append(divPopular)
     popularcontent.append(divAos)
     
     
    })
       
   

}






let bascket=[];
function clickHandeler(id){
   let data1=data.filter(item=>item.id===id)
   let price=data1.price

   trueBasket= bascket.some(item=>item.id==id)      
   data1.forEach(item=>{
    if(trueBasket){
      if(item.id===id){
      // modal.innerHTML="added"
        item.quantity++;
        item.quantity=item.quantity
      }
    }else{
      bascket.push(item)
    
    }

  

   })
   productBascket(bascket)
   TotalCount(bascket)
  
  }
//    bascket.push[obj1]
// }

// filter


  product(data)

let alert=document.querySelector(".alert")
function changeSection(){
    let data2=event.target.value;
  
    if(data2==="All"){
      
     
          product(data)
 
 
    
    }
    else{
      let data1=data.filter(item=>item.type==data2)
 
    
        product(data1)
     
 
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
    iPlus.addEventListener("click" , ()=>{addProduct(item.id)})
    iPlus.className="fa-solid fa-plus";
    let iMenus=document.createElement("i");
    iMenus.className="fa-solid fa-minus";
    iMenus.addEventListener("click" , ()=>minusProduct(item.id))
    let shoppingquantity=document.createElement("span");
    shoppingquantity.className="shopping-quantity";
    shoppingquantity.innerHTML=item.quantity;
    quantity.append(iPlus , shoppingquantity,iMenus)
    shoppingdiscription.append(quantity, shoppingprice)
    let shoppingitem=document.createElement("div")
    shoppingitem.className="shopping-item";
    let iTrash=document.createElement("i");
    iTrash.className="fa-regular fa-trash-can";
    iTrash.addEventListener("click" , ()=>{removeProduct(item.id)})

    shoppingitem.append(shoppingImg ,shoppingdiscription ,iTrash);

shoppingcart.append(shoppingitem)

    })
   
  }

  // add remove product

  function addProduct(itemId){
  let data=!!bascket.find(item=>item.id===itemId)
if(data){
  bascket.forEach(item=>{
    if(item.id===itemId){
      ++item.quantity
      item.quantity=item.quantity
    
    }
  

  })
  productBascket(bascket)
  TotalCount(bascket)

}
  }

  function minusProduct(itemId){
   bascket.forEach(item=>{
    if(item.id===itemId){
    
     if(item.quantity>1){
      --item.quantity;
      item.quantity=item.quantity

     }else{
     
      bascket=bascket.filter(item=>item.id!==itemId)
     }
    }
   })
   productBascket(bascket)
   TotalCount(bascket)
  
  }

  function removeProduct(itemId){
    console.log(itemId)
    bascket= bascket.filter(item=>item.id!==itemId);
   productBascket(  bascket)
   TotalCount(   bascket)
  }

  // shopping Total Price
let bascket1=document.querySelector(".bascket")
function TotalCount(productbascket){
  console.log(productbascket)
 let totalCount=0; 
 productbascket.forEach(item=>{
totalCount= totalCount+item.price*item.quantity
// console.log(item.count)
})
if(productBascket.length>0){
  if(totalCount===0){
    shoppingtotalprice.innerHTML='totalCount:bascket empety'
  }else{
    shoppingtotalprice.innerHTML=`totalCount:${totalCount}$`
  }
}else{
  bascket1.classList.add('bascket')
}




}





// scrollTop;
let faarrowup=document.querySelector(".fa-arrow-up");
window.addEventListener("scroll" , function(){
 
    faarrowup.classList.toggle("active-arrow" ,window.scrollY>100)
  
})
faarrowup.addEventListener("click" , arrowToUp)
function arrowToUp(){
   
    window.scrollTo({top:0 , behavior:"smooth"})
  }







//   let appendNumber = 4;
// let prependNumber = 1;


const swiper = new Swiper('.swiper', {

    loop: true,
    // slidesPerView:3,
    centeredSlides: true,
    // spaceBetween: 5,
    grabCursor:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      // type: 'fraction',
    },
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints:{
      320:{
        slidesPerView:"auto",
        spaceBetween:15,
      },
    450 :{
        slidesPerView:"auto",
        spaceBetween:0,
        centeredSlides: true,
      },
     768 :{
        slidesPerView:3,
        spaceBetween:20,
        centeredSlides: true,
      },
      1100 :{
        slidesPerView:3,
        spaceBetween:40,
        loop:true,
        centeredSlides: true,
      },
    }

   
  });




  // Aos.js

  AOS.init();



  // Search input
function searchHandeler(event){
let searchProduct= searchInput.value.toLowerCase().trim();
if(!searchProduct ){

    product(data)
 
  
}
let prdouctFind=data.filter(item=>item.name.toLowerCase().includes(searchProduct));
popularcontent.innerHTML=""

  product(prdouctFind)



}


  searchInput.addEventListener("keyup" , searchHandeler)

 
  // categoryList

  function selectCategory(event){
    let resualtCategory=event.target.innerHTML
    
   
        
    if(event.target.innerHTML==="All"){
    
     
        product(data)
  
    }else{
     let resultCategoryEnd=data.filter(item=>item.type===resualtCategory)
     
     product( resultCategoryEnd)
     
    }
    categoryList.forEach(item=>{
      if(item.innerHTML===resualtCategory){
        item.classList.add("select")
      }
      else{
        item.classList=""
      }
    })
  }

  categoryList.forEach(item=>
  
    item.addEventListener("click" ,selectCategory )
  

      )



     