$(document).ready(function() {
    $(".contry_location").click(function() {
        getMovieList();
    });
    $(".movie_title").click(function() {
        getMovieList();
    });
});

const homeMenuEl = document.querySelector('main .home-menu');
window.addEventListener('scroll', _.throttle(() => {
    console.log('scrollY:', window.scrollY);

    if (window.scrollY < 100) {
        gsap.to(homeMenuEl, {duration: 0, opacity: 0, display: 'none'});
    } else {
        gsap.to(homeMenuEl, {duration: 0, opacity: 1, display: 'block'});
    }
}));


const swiperTicketing = new Swiper('.ticketing-select .swiper-container', {
    slidesPerView: 14,
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,
    navigation: {
        prevEl: '.ticketing-select .swiper-prev',
        nextEl: '.ticketing-select .swiper-next',
    },
    pagination: false, // pagination 비활성화
});


const swiperTime = new Swiper('.time-menu .swiper-container', {
    slidesPerView: 11,
    spaceBetween: 0,
    centeredSlides: false,
    loop: false,
    navigation: {
        prevEl: '.time-menu .swiper-prev',
        nextEl: '.time-menu .swiper-next',
    },
    pagination: false, // pagination 비활성화
});

document.addEventListener('DOMContentLoaded', function() {
    // 이 메소드가 문서가 완전히 로드된 후 자동으로 실행됩니다.
    movieFrist();
});

function movieFrist() {
    const firstEl = document.querySelector('.movie-menu .top-first-menu')
    firstEl.style.borderWidth = '1px 1px 0 1px';
    firstEl.style.borderStyle = 'solid';
    firstEl.style.borderColor = '#222';

    const secondEl = document.querySelector('.movie-menu .top-second-menu')
    secondEl.style.borderWidth = '0 0 1px 0';
    secondEl.style.borderStyle = 'solid';
    secondEl.style.borderColor = '#222';
    
    /* 이성근 작업중 */
    $.ajax({
            url: 'getMovieTitleList.jsp',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',       
            type: 'POST',
            success: function(response) {
                console.log('movieList response', response);
                
                // response가 이미 JSON 객체로 파싱된 상태일 수 있습니다.
                // 확인 후 JSON 파싱을 시도합니다.
                var jsonResponse;
                if (typeof response === 'string') {
                    try {
                        jsonResponse = JSON.parse(response);
                    } catch (e) {
                        console.error('Failed to parse JSON:', e);
                        return;
                    }
                } else {
                    jsonResponse = response;
                }

                // "locations" 키에서 데이터 추출
                var data = jsonResponse.movies;

                if (!Array.isArray(data)) {
                    console.error('Expected an array but received:', data);
                    console.log("test : is not Array")
                    return;
                }
                console.log("test : it is Array")
                
                var container = document.querySelector('.movie-title-list'); // HTML을 삽입할 대상 클래스
                
                // 기존 내용 제거
                container.innerHTML = '';
    
                // 데이터 배열을 반복하여 HTML 생성
                data.forEach(function(item) {
                    var divElement = document.createElement('div'); // 새로운 div 요소 생성
    				divElement.classList.add('first-menu-item');
    
                    var pElement = document.createElement('p'); // 새로운 p 요소 생성
                    pElement.textContent = item; // p 태그의 텍스트 설정
    
                    // div 요소에 p 태그 추가
                    divElement.appendChild(pElement);
    
                    // container에 div 요소 추가
                    container.appendChild(divElement);
                console.log("Server response:", item);
                });
                
            },
            error: function(error) {
                // 요청 실패 시 처리할 로직을 작성합니다.
                console.log("Error:", error);
            }
        });
        /* */

    const firstMenuEl = document.querySelector('.movie-menu .middle-first-menu')
    firstMenuEl.style.display = 'block'

    const secondMenuEl = document.querySelector('.movie-menu .middle-second-menu')
    secondMenuEl.style.display = 'none'
};

function movieSecond() {
    const firstEl = document.querySelector('.movie-menu .top-first-menu')
    firstEl.style.borderWidth = '0 0 1px 0';
    firstEl.style.borderStyle = 'solid';
    firstEl.style.borderColor = '#222';

    const secondEl = document.querySelector('.movie-menu .top-second-menu')
    secondEl.style.borderWidth = '1px 1px 0 1px';
    secondEl.style.borderStyle = 'solid';
    secondEl.style.borderColor = '#222';

    const firstMenuEl = document.querySelector('.movie-menu .middle-first-menu')
    firstMenuEl.style.display = 'none'

    const secondMenuEl = document.querySelector('.movie-menu .middle-second-menu')
    secondMenuEl.style.display = 'block'
};

function theaterFirst() {
    const firstEl = document.querySelector('.theater-menu .top-first-menu')
    firstEl.style.borderWidth = '1px 1px 0 1px';
    firstEl.style.borderStyle = 'solid';
    firstEl.style.borderColor = '#222';

    const secondEl = document.querySelector('.theater-menu .top-second-menu')
    secondEl.style.borderWidth = '0 0 1px 0';
    secondEl.style.borderStyle = 'solid';
    secondEl.style.borderColor = '#222';

    const firstMenuEl = document.querySelector('.theater-menu .sub-middle-menu')
    firstMenuEl.style.display = 'block'
    firstMenuEl.style.display = 'flex'

    const secondMenuEl = document.querySelector('.theater-menu .sub-middleSecond-menu')
    secondMenuEl.style.display = 'none'
};

function theaterSecond() {
    const firstEl = document.querySelector('.theater-menu .top-first-menu')
    firstEl.style.borderWidth = '0 0 1px 0';
    firstEl.style.borderStyle = 'solid';
    firstEl.style.borderColor = '#222';

    const secondEl = document.querySelector('.theater-menu .top-second-menu')
    secondEl.style.borderWidth = '1px 1px 0 1px';
    secondEl.style.borderStyle = 'solid';
    secondEl.style.borderColor = '#222';

    const firstMenuEl = document.querySelector('.theater-menu .sub-middle-menu')
    firstMenuEl.style.display = 'none'

    const secondMenuEl = document.querySelector('.theater-menu .sub-middleSecond-menu')
    secondMenuEl.style.display = 'block'
    secondMenuEl.style.display = 'flex'
};



function theaterSeoul() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .seoul-area')
    firstEl.style.display = 'block'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .gyeonggi-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .incheon-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .daejeon-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .busan-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .gwangju-area')
    sixthEl.style.display = 'none'
    const seventhEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .gangwon-area')
    seventhEl.style.display = 'none'
    const eighthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .jeju-area')
    eighthEl.style.display = 'none'
}

function theaterGyeonggi() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .seoul-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .gyeonggi-area')
    secondEl.style.display = 'block'
    const thirdEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .incheon-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .daejeon-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .busan-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .gwangju-area')
    sixthEl.style.display = 'none'
    const seventhEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .gangwon-area')
    seventhEl.style.display = 'none'
    const eighthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu.locationList .jeju-area')
    eighthEl.style.display = 'none'
}

function theaterIncheon() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .seoul-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gyeonggi-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .incheon-area')
    thirdEl.style.display = 'block'
    const fourthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .daejeon-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .busan-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gwangju-area')
    sixthEl.style.display = 'none'
    const seventhEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gangwon-area')
    seventhEl.style.display = 'none'
    const eighthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .jeju-area')
    eighthEl.style.display = 'none'
}

function theaterDaejeon() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .seoul-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gyeonggi-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .incheon-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .daejeon-area')
    fourthEl.style.display = 'block'
    const fifthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .busan-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gwangju-area')
    sixthEl.style.display = 'none'
    const seventhEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gangwon-area')
    seventhEl.style.display = 'none'
    const eighthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .jeju-area')
    eighthEl.style.display = 'none'
}

function theaterBusan() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .seoul-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gyeonggi-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .incheon-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .daejeon-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .busan-area')
    fifthEl.style.display = 'block'
    const sixthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gwangju-area')
    sixthEl.style.display = 'none'
    const seventhEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gangwon-area')
    seventhEl.style.display = 'none'
    const eighthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .jeju-area')
    eighthEl.style.display = 'none'
}

function theaterGwangju() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .seoul-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gyeonggi-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .incheon-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .daejeon-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .busan-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gwangju-area')
    sixthEl.style.display = 'block'
    const seventhEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gangwon-area')
    seventhEl.style.display = 'none'
    const eighthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .jeju-area')
    eighthEl.style.display = 'none'
}

function theaterGangwon() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .seoul-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gyeonggi-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .incheon-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .daejeon-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .busan-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gwangju-area')
    sixthEl.style.display = 'none'
    const seventhEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gangwon-area')
    seventhEl.style.display = 'block'
    const eighthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .jeju-area')
    eighthEl.style.display = 'none'
}

function theaterJeju() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .seoul-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gyeonggi-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .incheon-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .daejeon-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .busan-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gwangju-area')
    sixthEl.style.display = 'none'
    const seventhEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gangwon-area')
    seventhEl.style.display = 'none'
    const eighthEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .jeju-area')
    eighthEl.style.display = 'block'
}


function theaterDolbyCinema() {
    const firstEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-cinema-area')
    firstEl.style.display = 'block'
    const secondEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .mega-mx4d-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .the-boutique-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-atmos-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .comfort-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .megabox-kids-area')
    sixthEl.style.display = 'none'
}

function theaterMega() {    
    const firstEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-cinema-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .mega-mx4d-area')
    secondEl.style.display = 'block'
    const thirdEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .the-boutique-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-atmos-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .comfort-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .megabox-kids-area')
    sixthEl.style.display = 'none'
}

function theaterBoutique() {
    const firstEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-cinema-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .mega-mx4d-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .the-boutique-area')
    thirdEl.style.display = 'block'
    const fourthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-atmos-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .comfort-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .megabox-kids-area')
    sixthEl.style.display = 'none'
}

function theaterDolbyAtmos() {
    const firstEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-cinema-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .mega-mx4d-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .the-boutique-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-atmos-area')
    fourthEl.style.display = 'block'
    const fifthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .comfort-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .megabox-kids-area')
    sixthEl.style.display = 'none'
}

function theaterComfort() {
    const firstEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-cinema-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .mega-mx4d-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .the-boutique-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-atmos-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .comfort-area')
    fifthEl.style.display = 'block'
    const sixthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .megabox-kids-area')
    sixthEl.style.display = 'none'
}

function theaterMegaBoxKids() {
    const firstEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-cinema-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .mega-mx4d-area')
    secondEl.style.display = 'none'
    const thirdEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .the-boutique-area')
    thirdEl.style.display = 'none'
    const fourthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .dolby-atmos-area')
    fourthEl.style.display = 'none'
    const fifthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .comfort-area')
    fifthEl.style.display = 'none'
    const sixthEl = document.querySelector('.theater-menu .sub-middleSecond-menu .middle-second-menu .megabox-kids-area')
    sixthEl.style.display = 'block'
}

const selectedItems = new Set();


const maxSelection = 3;


const alertElement = document.querySelector('.alert-message');

document.querySelectorAll('.movie-menu .sub-middle-menu .first-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        if (selectedItems.has(item)) {
            selectedItems.delete(item);
            item.style.backgroundColor = '';
            item.style.borderWidth = '';
            item.style.borderStyle = '';
            item.style.borderColor = '';
        } else {
            if (selectedItems.size < maxSelection) {
                selectedItems.add(item);
                item.style.backgroundColor = 'rgb(102, 102, 102)';
            } else {
                alertElement.style.display = 'block';
            }
        }
    });
});

const alert2Element = document.querySelector('.alert-message');

document.querySelectorAll('.movie-menu .sub-middle-menu .second-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        if (selectedItems.has(item)) {
            selectedItems.delete(item);
            item.style.backgroundColor = '';
            item.style.borderWidth = '';
            item.style.borderStyle = '';
            item.style.borderColor = '';
        } else {
            if (selectedItems.size < maxSelection) {
                selectedItems.add(item);
                item.style.backgroundColor = 'rgb(102, 102, 102)';
            } else {
                alert2Element.style.display = 'block';
            }
        }
    });
});

document.querySelectorAll('.movie-menu .sub-middle-menu .middle-second-menu').forEach(item => {
    item.addEventListener('click', function() {
        if (selectedItems.has(item)) {
            selectedItems.delete(item);
            item.style.backgroundColor = '';
            item.style.borderWidth = '';
            item.style.borderStyle = '';
            item.style.borderColor = '';
        } else {
            if (selectedItems.size < maxSelection) {
                selectedItems.add(item);
                item.style.backgroundColor = 'rgb(102, 102, 102)';
            } else {
                alert2Element.style.display = 'block';
            }
        }
    });
});


document.querySelectorAll('.theater-menu .sub-middle-menu .first-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.theater-menu .sub-middle-menu .first-menu-item').forEach(el => {
            el.style.backgroundColor = '';
            el.style.borderWidth = '';
            el.style.borderStyle = '';
            el.style.borderColor = '';
        });
        item.style.backgroundColor = 'rgb(235, 235, 235)';
        item.style.borderWidth = '1px 0 1px 0';
        item.style.borderStyle = 'solid'
        item.style.borderColor = '#333'
    });
});




const alert3Element = document.querySelector('.alert-message'); // 표시할 요소를 선택하세요

document.querySelectorAll('.theater-menu .sub-middle-menu .second-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        if (selectedItems.has(item)) {
            selectedItems.delete(item);
            item.style.backgroundColor = '';
            item.style.borderWidth = '';
            item.style.borderStyle = '';
            item.style.borderColor = '';
        } else {
            if (selectedItems.size < maxSelection) {
                selectedItems.add(item);
                item.style.backgroundColor = 'rgb(102, 102, 102)';
            } else {
                alert3Element.style.display = 'block';
            }
        }
        const timeEl = document.querySelector('.time-menu .bottom-main')
        timeEl.style.display = 'none'
        const movieEl = document.querySelector('.time-menu .movie-time')
        movieEl.style.display = 'block'
    });
});

const alert4Element = document.querySelector('.alert-message'); // 표시할 요소를 선택하세요

document.querySelectorAll('.theater-menu .sub-middleSecond-menu .second-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        if (selectedItems.has(item)) {
            selectedItems.delete(item);
            item.style.backgroundColor = '';
            item.style.borderWidth = '';
            item.style.borderStyle = '';
            item.style.borderColor = '';
        } else {
            if (selectedItems.size < maxSelection) {
                selectedItems.add(item);
                item.style.backgroundColor = 'rgb(102, 102, 102)';
            } else {
                alert4Element.style.display = 'block';
            }
        }
        const timeEl = document.querySelector('.time-menu .bottom-main')
        timeEl.style.display = 'none'
        const movieEl = document.querySelector('.time-menu .movie-time')
        movieEl.style.display = 'block'
    });
});


//컨트리를 누르면 로케이션 이름을 표기하는 프로세스 (SungGeun)
var location1 = document.querySelectorAll('.contry');
location1.forEach(function(checkLocation) {
    checkLocation.addEventListener('click', function() {
        var locationName = this.querySelector('.contry_name').textContent;
        console.log('locationName:', locationName);
       	
       	var divClassName = null;
       	
        switch (locationName){
			case "서울":
				divClassName = ".seoul-area";
				break;
			case "경기":
				divClassName = ".gyeonggi-area";
				break;
			case "인천":
				divClassName = ".incheon-area";
				break;
			case "대전/충청/세종":
				divClassName = ".daejeon-area";
				break;
			case "부산/대구/경상":
				divClassName = ".busan-area";
				break;
			case "광주/전라":
				divClassName = ".gwangju-area";
				break;
			case "강원":
				divClassName = ".gangwon-area";
				break;
			case "제주":
				divClassName = ".jeju-area";
				break;
		};
        
        $.ajax({
            url: 'getLocation.jsp',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',       
            type: 'POST',
            data: 'locationText=' + encodeURIComponent(locationName), // URL 인코딩
            success: function(response) {
                console.log('location1 response', response);
                
                // response가 이미 JSON 객체로 파싱된 상태일 수 있습니다.
                // 확인 후 JSON 파싱을 시도합니다.
                var jsonResponse;
                if (typeof response === 'string') {
                    try {
                        jsonResponse = JSON.parse(response);
                    } catch (e) {
                        console.error('Failed to parse JSON:', e);
                        return;
                    }
                } else {
                    jsonResponse = response;
                }

                // "locations" 키에서 데이터 추출
                var data = jsonResponse.locations;

                if (!Array.isArray(data)) {
                    console.error('Expected an array but received:', data);
                    console.log("test : is not Array")
                    return;
                }
                console.log("test : it is Array")
                
                var container = document.querySelector(divClassName); // HTML을 삽입할 대상 클래스
                
                // 기존 내용 제거
                container.innerHTML = '';
    
                // 데이터 배열을 반복하여 HTML 생성
                data.forEach(function(item) {
                    var divElement = document.createElement('div'); // 새로운 div 요소 생성
    				divElement.classList.add('second-menu-item');
    
                    var pElement = document.createElement('p'); // 새로운 p 요소 생성
                    pElement.textContent = item; // p 태그의 텍스트 설정
    
                    // div 요소에 p 태그 추가
                    divElement.appendChild(pElement);
    
                    // container에 div 요소 추가
                    container.appendChild(divElement);
                console.log("Server response:", item);
                });
                
            },
            error: function(error) {
                // 요청 실패 시 처리할 로직을 작성합니다.
                console.log("Error:", error);
            }
        });
    });
});


var cleckedLocationList = [];

document.querysquerySelectorAll('.second-menu-item.contry_location').forEach(location => {
	location.addEventListener('click', function() {
		location.classList.toggle('checkedLocation'); //클릭한 요소 클라스 추가하거나 이미 추가되어 있다면 삭제
		
		document.querySelectorAll('.checkedLocation').forEach(eachLocation => {
			cleckedLocationList.push(eachLocation);
			var checkedMovie = document.querySelectorAll('.checkedMovie');
			
			var encodedData = null;
			if(checkedMovie === 0){
				encodedData = cleckedLocationList.map(function(item) {
	  				return 'data[]=' + encodeURIComponent(item); // 배열 항목을 URL 인코딩
				}).join('&'); // '&'로 구분하여 URL 쿼리 문자열 형식으로 변환
			} else {
				encodedData = cleckedLocationList.map(function(item) {
	  				return 'data[]=' + encodeURIComponent(item); // 배열 항목을 URL 인코딩
				}).join('&'); // '&'로 구분하여 URL 쿼리 문자열 형식으로 변환
				var encodedDataMovieList = checkedMovie.map
			}
			
			
			$.ajax({
            url: 'getMovieTimeTable.jsp',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',       
            type: 'POST',
            data: 	
            
            success: function(response) {
                console.log('location1 response', response);
                
                // response가 이미 JSON 객체로 파싱된 상태일 수 있습니다.
                // 확인 후 JSON 파싱을 시도합니다.
                var jsonResponse;
                if (typeof response === 'string') {
                    try {
                        jsonResponse = JSON.parse(response);
                    } catch (e) {
                        console.error('Failed to parse JSON:', e);
                        return;
                    }
                } else {
                    jsonResponse = response;
                }

                // "locations" 키에서 데이터 추출
                var data = jsonResponse.locations;

                if (!Array.isArray(data)) {
                    console.error('Expected an array but received:', data);
                    console.log("test : is not Array")
                    return;
                }
                console.log("test : it is Array")
                
                var container = document.querySelector(divClassName); // HTML을 삽입할 대상 클래스
                
                // 기존 내용 제거
                container.innerHTML = '';
    
                // 데이터 배열을 반복하여 HTML 생성
                data.forEach(function(item) {
                    var divElement = document.createElement('div'); // 새로운 div 요소 생성
    				divElement.classList.add('second-menu-item');
    
                    var pElement = document.createElement('p'); // 새로운 p 요소 생성
                    pElement.textContent = item; // p 태그의 텍스트 설정
    
                    // div 요소에 p 태그 추가
                    divElement.appendChild(pElement);
    
                    // container에 div 요소 추가
                    container.appendChild(divElement);
                console.log("Server response:", item);
                });
                
            },
            error: function(error) {
                // 요청 실패 시 처리할 로직을 작성합니다.
                console.log("Error:", error);
            }
        });
		})
		
		
	})
})

