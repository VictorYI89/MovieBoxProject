<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css">
<link rel="icon" href="https://www.megabox.co.kr/static/pc/images/favicon.ico">
<link rel="stylesheet" href="${pageContext.request.contextPath }/static/css/header.css">
<link rel="stylesheet" href="${pageContext.request.contextPath }/static/css/timetable.css">
<script defer src="${pageContext.request.contextPath }/static/js/header.js"></script>
<title>영화별 상영시간표 <상영시간표></title>
</head>
<body>
	<jsp:include page="../include/header.jsp"/>
	<div class="main-top">
		<div class="inner-container">
			<div class="inner">
				
			</div>
			<div class="title"><span>데드풀과 울버린</span> <span>상영시간표</span></div>
			<div class="timetable">
				<c:forEach var="vo" items="${vo }">
					<div class="item">
						<c:choose>
							<c:when test="${vo.dayOfWeek=='토' }">
								<div class="top blue">${vo.month}.${vo.day}</div>
								<div class="bottom blue">${vo.dayOfWeek}</div>
							</c:when>
							<c:when test="${vo.dayOfWeek=='일' }">
								<div class="top red">${vo.month}.${vo.day}</div>
								<div class="bottom red">${vo.dayOfWeek}</div>
							</c:when>
							<c:otherwise>
								<div class="top">${vo.month}.${vo.day}</div>
								<div class="bottom">${vo.dayOfWeek}</div>
							</c:otherwise>
						</c:choose>
					</div>
				</c:forEach>
			</div>
			<div class="movie-option">
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option01.png" alt="">
					<div class="text">무대인사</div>
				</div>
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option02.png" alt="">
					<div class="text">회원시사</div>
				</div>
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option03.png" alt="">
					<div class="text">오픈시사</div>
				</div>
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option04.png" alt="">
					<div class="text">굿즈패키지</div>
				</div>
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option05.png" alt="">
					<div class="text">싱어롱</div>
				</div>
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option06.png" alt="">
					<div class="text">GV</div>
				</div>
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option-sun.png" alt="">
					<div class="text">조조</div>
				</div>
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-time-brunch.png" alt="">
					<div class="text">브런치</div>
				</div>
				<div class="item">
					<img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-greeting-option-moon.png" alt="">
					<div class="text">심야</div>
				</div>
			</div>

			<div class="city-theater">
				<div class="item selected">서울</div>
				<div class="item">경기</div>
				<div class="item">인천</div>
				<div class="item">대전/충청/세종</div>
				<div class="item">부산/대구/경상</div>
				<div class="item">광주/전라</div>
				<div class="item">강원</div>
				<div class="item">제주</div>
			</div>
		</div>
	</div>
	<jsp:include page="../include/footer.jsp"/>
</body>
</html>