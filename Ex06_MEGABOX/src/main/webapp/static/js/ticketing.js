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

function movieFrist() {
    const firstEl = document.querySelector('.movie-menu .top-first-menu')
    firstEl.style.borderWidth = '1px 1px 0 1px';
    firstEl.style.borderStyle = 'solid';
    firstEl.style.borderColor = '#222';

    const secondEl = document.querySelector('.movie-menu .top-second-menu')
    secondEl.style.borderWidth = '0 0 1px 0';
    secondEl.style.borderStyle = 'solid';
    secondEl.style.borderColor = '#222';

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
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .seoul-area')
    firstEl.style.display = 'block'
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
    eighthEl.style.display = 'none'
}

function theaterGyeonggi() {
    const firstEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .seoul-area')
    firstEl.style.display = 'none'
    const secondEl = document.querySelector('.theater-menu .sub-middle-menu .middle-second-menu .gyeonggi-area')
    secondEl.style.display = 'block'
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


//아래는 목록 클릭 시 데이터를 전송하여 영화와 영화관위치에 맞는 시간,영화제목을 리스트화 하기 위하여 클라스를 추가/삭제 해주는 이벤트

// 모든 .contry 클래스를 가진 요소를 선택합니다.
var contrys = document.querySelectorAll('.contry');         
// 각 요소에 클릭 이벤트 리스너를 추가합니다.
contrys.forEach(function(contry) {
    contry.addEventListener('click', function() {
        // 클릭한 요소에만 'checkedContry' 클래스를 추가합니다.
        var checkedLocationName = document.querySelectorAll('.contry_location');
        checkedLocationName.forEach(function(location)) {
            location.classList.toggle('checkedLocation');
        }
    });
});

// 모든 .movie_title 클래스를 가진 요소를 선택합니다.
var movies = document.querySelectorAll('.movie_title');
// 각 요소에 클릭 이벤트 리스너를 추가합니다.
movies.forEach(function(movie) {
    movie.addEventListener('click', function() {
        // 클릭한 요소에만 'checkedMovie' 클래스를 추가합니다.
        this.classList.toggle('checkedMovie');
    });
});


$(document).ready(function() {
    $(".contry_location").click(function() {
        getMovieList();
    });
    $(".movie_title").click(function() {
        getMovieList();
    });
});

function getMovieList() { // .nestedData 클래스를 가진 하위 요소의 텍스트를 가져옵니다.
    var howManyCheckedContry = document.querySelectorAll('.checkedLocation');
    if(howManyCheckedContry.length > 0) {
        var checkedContrys = document.querySelectorAll('.checkedLocation');
        var checkedMovies = document.querySelectorAll('.checkedMovie');

        $.ajax({
            url: 'getLocation.jsp', // 서버의 URL로 비동기 요청을 보냅니다.
            type: 'POST', // 요청 방식을 POST로 설정합니다.
            dataType: 'json',
            data: {
                // 하위 요소에서 가져온 데이터를 서버로 전송합니다.
                nestedData: nestedData,
            },
            success: function(getLocation) {
                // 서버로부터 성공적인 응답을 받았을 때 실행됩니다.
            },
            error: function(error) {
                // 요청이 실패했을 때 실행됩니다.
                console.log("에러: " + error); // 에러 정보를 콘솔에 출력합니다.
            }
        });
    }
};