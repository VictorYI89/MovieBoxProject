<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Date" %>
<%@ page import="com.utils.DBManager" %>
<%@ page import="java.sql.*" %>


<%
    List<Data> dataList = new ArrayList<>();
    String resultContryName;

    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    String contryName = request.getParameter("nestedData");

    try{
        conn = DBManager.getDBConnection();

        String sqlQuery = "select ? from CINEMA order by ASC";
        pstmt = conn.prepareStatement(sqlQuery);
        pstmt.setString(1, contryName);

        rs = pstmt.executeQuery();

        while(rs.next){
            
        }

        
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        DBManager.dbClose(conn, pstmt, rs);
}

%>