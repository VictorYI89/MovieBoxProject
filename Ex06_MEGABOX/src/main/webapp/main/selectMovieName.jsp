<%@page import="com.google.gson.Gson"%>
<%@page import="com.example.demo.service.TimeTableServiceImpl"%>
<%@page import="com.example.demo.dto.TimeTableDTO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="application/json; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String location_name = request.getParameter("location_name");
	int movie_idx = Integer.parseInt(request.getParameter("movie_idx")); // null 값인경우 예외처리를 하지않아 문제발생됨
	String room_location = request.getParameter("room_location");
	String type = request.getParameter("type");
	String time = request.getParameter("start_time"); // time에서 start_time으로 변경함 (이성근)
	
	
	List<TimeTableDTO> vo = TimeTableServiceImpl.getInstance().selectMovieName(type,location_name, movie_idx, room_location,time);

	Gson gson = new Gson();
	out.println(gson.toJson(vo));
%>