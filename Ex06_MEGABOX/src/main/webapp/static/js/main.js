const data = document.querySelectorAll(".sup-content");
const supListContents = document.querySelectorAll('.sup-list-content');
const wrapper = document.querySelector(".header-wrapper");
data.forEach((item,index)=>{
    item.addEventListener('mouseover',function(e){
        supListContents.forEach(it=>it.style.display='none');
        // this.style.display='block';
        if(item.textContent=='스토어'){
          wrapper.style.display='none';
          return false;
        }
        wrapper.style.display='block';
        supListContents[index].style.display='flex';
        supListContents[index].style.zIndex='1';
      })
        supListContents[index].addEventListener('mouseleave',function(){
          this.style.display='none';
          wrapper.style.display='none';
      })
});


// 검색 이미지
const search = document.querySelector(".search-img");
search.addEventListener('click',function(){
  if(search.children[0]['src'].includes('search')){
    document.querySelector(".search-container").style.display='block';
    search.children[0].setAttribute('src','../static/images/cancel.svg');    
  }else{
    document.querySelector(".search-container").style.display='none';
    search.children[0].setAttribute('src','../static/images/search.svg');    
  }
})
document.querySelector("#closeLogin").addEventListener('click',function(){
  document.querySelector(".login-box").style.display='none';
  document.querySelector(".login-background").style.display='none';
  document.querySelector(".main").style.overflow='auto';
})

// 로그인
document.querySelector("#login").addEventListener('click',function(){
  document.querySelector(".login-box").style.display='block';
  document.querySelector(".login-background").style.display='block';
  document.querySelector(".header-wrapper").style.display='none';
  supListContents.forEach(it=>it.style.display='none');
  document.querySelector(".main").style.overflow='hidden';
})
// 메뉴 이미지
const container = document.querySelector(".menu-img");
container.addEventListener('click',function(){
  console.log(container);
    const img = container.firstChild;
    const menu = document.querySelector(".menu-container");
    if(img.getAttribute('src').includes('menu')){
        img.setAttribute('src','../static/images/cancel.svg');
        menu.style.display='block';
        menu.style.zIndex="2";
    }else{
        img.setAttribute('src','../static/images/menu.svg');
        menu.style.display='none';	
    }
})
