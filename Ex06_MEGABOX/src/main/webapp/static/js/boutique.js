let swiper = new Swiper(".boutiqueSwiper", {
  slidesPerView: 12,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let movieSwiper = new Swiper(".movieSwiper", {
  slidesPerView: 5,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slide = document.querySelectorAll(".swiper-slide.calendar");
let slideIdx=0;
slide.forEach((item,index)=>{
  if(index==0){
    item.classList.add("selected");
  }
  item.addEventListener("click",function(){
    slide[slideIdx].classList.remove("selected");
    this.classList.add("selected");
    slideIdx=index;
  })
})
const packageButton = document.querySelector(".package-button");
packageButton.addEventListener("click",function(){
  if(this.textContent=='상품 더보기'){
    document.querySelector(".package-wrap").style.height=1000+'px';
    this.textContent='상품 접기';
  }else{
    document.querySelector(".package-wrap").style.height=700+'px';
    this.textContent='상품 더보기';
  }
})


