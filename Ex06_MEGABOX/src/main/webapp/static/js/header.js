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
// document.querySelector(".header-wrapper").addEventListener('mouseleave',function(){
//   console.log(123456);
//   supListContents.forEach(it=>it.style.display='none');
//   this.style.display='none';
// });
const container = document.querySelector(".menu-img");
container.addEventListener('click',function(){
    const img = container.firstChild;
    const menu = document.querySelector(".menu-container");
    if(img.getAttribute('src').includes('menu')){
        img.setAttribute('src','../static/images/cancel.svg');
        menu.style.display='block';
    }else{
        img.setAttribute('src','../static/images/menu.svg');
        menu.style.display='none';

    }
})


// 검색 버튼
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
})
console.log(document.querySelector("#login"));
document.querySelector("#login").addEventListener('click',function(){
  document.querySelector(".login-box").style.display='block';
  document.querySelector(".login-background").style.display='block';
  document.querySelector(".header-wrapper").style.display='none';
  supListContents.forEach(it=>it.style.display='none');
})