<%@page import="com.example.demo.service.NoticeServiceImpl"%>
<%@page import="com.example.demo.dto.NoticeDTO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	int total = NoticeServiceImpl.getInstance().selectCount(null, "all");
	NoticeDTO vo = NoticeServiceImpl.getInstance().selectByIdx(total);
	request.setAttribute("vo", vo);
	pageContext.forward("mainView.jsp");
%>