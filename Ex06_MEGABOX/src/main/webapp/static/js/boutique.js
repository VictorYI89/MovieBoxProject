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

document.addEventListener("DOMContentLoaded", function() {
        const swiper = new Swiper('.movieSwiper', {
            navigation: {
                nextEl: '.swiper-button-next.movie',
                prevEl: '.swiper-button-prev.movie',
            },
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
        });
		
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

function firstShow() {
	const firstRoom = document.querySelector('.reserve-location .room1');
	const secondRoom = document.querySelector('.reserve-location .room2');
	const firstTitle = document.querySelector('.reserve-date-title');
	const secondTitle = document.querySelector('.reserve-date-title2');
	const firstBox = document.querySelector('.reserve-date-box');
	const secondBox = document.querySelector('.reserve-date-box2');
	
	secondRoom.style.color = '';
	secondRoom.style.backgroundColor = '';
	firstRoom.style.color = '#fff';
	firstRoom.style.backgroundColor = '#503396';
	firstTitle.style.display = 'block';
	secondTitle.style.display = 'none';
	firstBox.style.display = 'block';
	secondBox.style.display = 'none';
}

function secondShow() {
	const firstRoom = document.querySelector('.reserve-location .room1');
	const secondRoom = document.querySelector('.reserve-location .room2');
	const firstTitle = document.querySelector('.reserve-date-title');
	const secondTitle = document.querySelector('.reserve-date-title2');
	const firstBox = document.querySelector('.reserve-date-box');
	const secondBox = document.querySelector('.reserve-date-box2');
	
	secondRoom.style.color = '#fff';
	secondRoom.style.backgroundColor = '#503396';
	firstRoom.style.color = '';
	firstRoom.style.backgroundColor = '';
	firstTitle.style.display = 'none';
	secondTitle.style.display = 'block';
	firstBox.style.display = 'none';
	secondBox.style.display = 'block';
}

 document.addEventListener('DOMContentLoaded', () => {
            const firstRoom = document.querySelector('.reserve-location .room1');
            firstRoom.style.color = '#fff';
            firstRoom.style.backgroundColor = '#503396';
        });


		
const reserveButtons = document.querySelectorAll('.reserve-movie-button');
        reserveButtons.forEach(button => {
            button.addEventListener('click', function() {
                // 숨겨진 input 요소에서 영화 정보 가져오기
                const movieName = this.parentElement.querySelector('.movie-name').value;
                const movieImage = this.parentElement.querySelector('.movie-image').value;

                // 선택된 영화 정보로 결제 화면 업데이트
                document.getElementById('smallImage').src = movieImage;
                document.getElementById('smallImage').alt = movieName;
                document.getElementById('movieTitle').innerText = movieName;

                // 결제 화면 표시
                document.querySelector('.payment-box').style.display = 'block';
				
    });
});