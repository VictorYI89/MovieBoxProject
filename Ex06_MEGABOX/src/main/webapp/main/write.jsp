<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MEET PLAY SHARE, 메가박스</title>
    <link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Nanum+Gothic&family=Nanum+Pen+Script&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../static/css/write.css">
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script defer src="../static/js/write.js"></script>
</head>
<body>
    <%@ include file="../include/header.jsp" %>
    <main>
        <div class="container">
            <div class="text-area">
                <p>내용</p>
                <textarea name="" id="" placeholder="영화는 재미있게 보셨나요? 영화의 어떤 점이 좋았는지 이야기해주세요.&#10;관람일 기준 7일 이내 등록 시 50P가 적립됩니다.&#10;포인트는 관람평 최대 10편 지급가능합니다."></textarea>
            </div>
            <div class="movie-score">
                <label>
                    1점
                    <input type="radio" name="score" value="1">
                </label>
                <label>
                    2점
                    <input type="radio" name="score" value="2">
                </label>
                <label>
                    3점
                    <input type="radio" name="score" value="3">
                </label>
                <label>
                    4점
                    <input type="radio" name="score" value="4">
                </label>
                <label>
                    5점
                    <input type="radio" name="score" value="5">
                </label>
                <label>
                    6점
                    <input type="radio" name="score" value="6">
                </label>
                <label>
                    7점
                    <input type="radio" name="score" value="7">
                </label>
                <label>
                    8점
                    <input type="radio" name="score" value="8">
                </label>
                <label>
                    9점
                    <input type="radio" name="score" value="9">
                </label>
                <label>
                    10점
                    <input type="radio" name="score" value="10">
                </label>
            </div>
            <div class="select">
                <input type="submit" value="등록">
                <button><a href="#">취소</a></button>
            </div>
        </div>
    </main>
  	<%@ include file="../include/footer.jsp" %> 
</body>
</html>