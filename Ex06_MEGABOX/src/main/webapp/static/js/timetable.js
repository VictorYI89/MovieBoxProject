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

// 영화별
const movieList = document.querySelectorAll('.movie-list-content>li');
let idx=0;
movieList.forEach((item,index)=>{
    item.addEventListener('click',function(){
        movieList[idx].classList.remove("selected");
        movieList[idx].children[0].style.display='none';
        this.setAttribute("class","selected");
        document.querySelector(".movieTitle").textContent=item.children[0].value;
        let content = (item.children[0].value);
        this.children[0].style.display='block';
        idx=index;
        printCinema(content);
    })    
})
async function printCinema(content){
    let cinemaData ;
    let a = document.querySelector(".timetable .item.selected .top");
    let time = a.textContent.split('.');
    let hour = String(time[0]).padStart(2,"0");
    let min = String(time[1]).padStart(2,"0");
    let d = hour+"-"+min;
    let res = $("<div></div>");
    await axios.get('cinemaLocationName.jsp?locationName='+content)
    .then(response=>{
        cinemaData=response.data;
    })
    .catch(error=>console.log(error))
    cinemaData.forEach(item=>{
        const container = $("<div class='theater-location'></div>");
        let title = $("<div class='title'>"+item.location_name+"</div>");
        let theaterBox = $("<div class='theater-box'></div>");
        container.append(title);
        theaterBox.append($("<div class='theater-type'><div class='theater-name'>"+item.room_location+"</div><div class='chair'>총 232석</div></div>"));
        let theaterArea = $("<div class='theater-area'></div>");
        theaterBox.append(theaterArea);
        
        axios.get(`selectMovieName.jsp?location_name=${item.location_name}&movie_idx=${item.movie_idx}&room_location=${item.room_location}&time=${d}`)
        .then(response=>{
            let result = response.data;
            theaterArea.append($("<div class='item'>2D(자막)</div>"));
            result.forEach(it=>{
		        date = new Date(it.start_time);
                theaterArea.append($("<div class='item'><div class='item-box'><div class='start-time'>"+String(date.getHours()).padStart(2,"0")+":"+String(date.getMinutes()).padStart(2,"0")+"</div><div class='remain-chair'>220석</div></div></div>"));
            })
            container.append(theaterBox);
            res.append(container);
            $(".theater-location").html(res);
        })
        .catch(error=>console.log(error))
    })
}
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
// 극장별
function theaterList(idx){
    const theaterListContent = categoryTitle[idx].querySelectorAll(" .theater-list-content>li");
    let ListIdx=0;
    theaterListContent.forEach((item,index)=>{
        item.addEventListener('click',function(){
            theaterListContent[ListIdx].classList.remove("selected");
            this.classList.add("selected");
            document.querySelector(".movieTitle").textContent=this.textContent;
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
            document.querySelector(".movieTitle").textContent=this.textContent;
            ListIdx=index;
        })
    })
}

// 날짜 클릭 이벤트
const selectedDate = document.querySelectorAll(".timetable .item");
let selectedDateIdx=0;
selectedDate.forEach((item,index)=>{
	if(index==0){
		selectedDate[0].classList.add("selected");
	}
	item.addEventListener("click",function(){
		selectedDate[selectedDateIdx].classList.remove("selected");
		this.classList.add("selected");
		selectedDateIdx=index;
	})
})