<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import = "java.sql.Connection" %>
<%@ page import = "java.sql.DriverManager" %>
<%@ page import = "java.sql.PreparedStatement" %>
<%@ page import = "java.sql.ResultSet" %>
<%@ page import = "java.sql.SQLException" %>
<%@ page import = "com_dbManager.dbManager" %>
<%
	//한글 처리
	request.setCharacterEncoding("UTF-8");

    Connection conn = null;
    PreparedStatement pstmt = null;

    int score = Integer.parseInt(request.getParameter("score"));
    String content = request.getParameter("review");
    
	System.out.println(score);
	System.out.println(content);
	
    conn = dbManager.getDBConnection();

    Exception exception = null;
    try {
        String InsertSql = "INSERT INTO REVIEW(REVIEWIDX, TITLE, REVIEWLIKE, MOVIEREF, REGDATE, USERID, MOVIELIKE)" +
    						"VALUES(REVIEW_IDX.NEXTVAL, ?, 3, 3, sysdate, asdf, ?)";
        pstmt = conn.prepareStatement(InsertSql);

        pstmt.setString(1, content);
        pstmt.setInt(2, score);

        pstmt.executeUpdate();
       
    } catch (Exception e) {
        exception = e;
        e.printStackTrace();
    } finally {
    	dbManager.dbClose(conn, pstmt, null);
    }
%>

<%
    if(exception == null) {
%>
<script>
    alert('관람평이 정상적으로 등록되었습니다.');
    window.location.href = "review_list.jsp"; // 등록 후 이동할 페이지
</script>
<%
    } else {
%>
<script>
    alert('관람평 등록 중 오류가 발생했습니다.');
</script>
<%
    }
%>