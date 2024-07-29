// 영화별

const movieList = document.querySelectorAll('.movie-list-content>li');
let idx=0;
movieList.forEach((item,index)=>{
    item.addEventListener('click',function(){
        movieList[idx].classList.remove("selected");
        movieList[idx].children[0].style.display='none';
        this.setAttribute("class","selected");
        this.children[0].style.display='block';
        idx=index;
    })    
})
const category = document.querySelectorAll(".main-top .left .item");
let categoryIdx=0;
category.forEach((item,index)=>{
    item.addEventListener('click',function(){
        category[categoryIdx].classList.remove("selected");
        category[categoryIdx].children[1].children[0].style.display='none';
        this.classList.add("selected");
        this.children[1].children[0].style.display='block';
        categoryIdx=index;
    })
})

// 극장별
const categoryTitle = document.querySelectorAll(".theater>span");
let categoryTitleIdx=0;
categoryTitle.forEach((item,index)=>{
    item.addEventListener('click',function(){
        categoryTitle[categoryTitleIdx].classList.remove("selected");
        item.classList.add("selected");
        categoryTitleIdx=index;
        theaterList(categoryTitleIdx);
    })
})
function theaterList(idx){
    const theaterListContent = categoryTitle[idx].querySelectorAll(" .theater-list-content>li");
    let ListIdx=0;
    theaterListContent.forEach((item,index)=>{
        item.addEventListener('click',function(){
            theaterListContent[ListIdx].classList.remove("selected");
            this.classList.add("selected");
            ListIdx=index;
        })
    })
}

// 특별관

const contentSpecial = document.querySelectorAll(".category-title.special span");
let contentSpecialIdx=0;
contentSpecial.forEach((item,index)=>{
    item.addEventListener('click',function(){
        contentSpecial[contentSpecialIdx].classList.remove("selected");
        item.classList.add("selected");
        contentSpecialIdx=index;
        specialList(contentSpecialIdx);
    })
})
function specialList(idx){
    const theaterListContent = contentSpecial[idx].querySelectorAll(" .special-list-content>li");
    console.log(theaterListContent);
    let ListIdx=0;
    theaterListContent.forEach((item,index)=>{
        item.addEventListener('click',function(){
            theaterListContent[ListIdx].classList.remove("selected");
            this.classList.add("selected");
            ListIdx=index;
        })
    })
}