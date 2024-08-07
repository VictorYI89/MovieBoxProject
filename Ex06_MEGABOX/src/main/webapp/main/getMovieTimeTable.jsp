<%-- <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%> --%>
<%@ page import="java.util.Date" %>
<%@ page import="com.utils.DBManager" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.sql.Timestamp" %>
<%@ page import="java.time.LocalTime" %>
<%@ page import="java.time.LocalDateTime" %>
<%@ page import="java.util.List" %>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %>
<%@ page import="java.sql.*" %>
<%@ page import="java.io.*, javax.servlet.*, javax.servlet.http.*, org.json.simple.JSONObject, org.json.simple.parser.JSONParser" %>
<%@ page import="org.json.simple.JSONArray" %>
<%@ page import="com.fasterxml.jackson.databind.ObjectMapper" %>
<%@ page import="java.io.BufferedReader" %>
<%@ page import="java.io.IOException" %>
<%@ page import="com.fasterxml.jackson.core.type.TypeReference" %>
<%@ page contentType="application/json; charset=UTF-8" %>
<%@ page import="com.google.gson.Gson" %>

<%
	StringBuilder jsonBuffer = new StringBuilder();
	String line;
	// JSON 데이터를 문자열로 읽어와서 reader에 저장 후jsonBuffer에 추가
	try (BufferedReader reader = request.getReader()) {
	    while ((line = reader.readLine()) != null) {
	        jsonBuffer.append(line);
	    }
	}
	// 데이터를 문자열로 변환
	String jsonString = jsonBuffer.toString();
	
	// JSON 문자열을 자바 객체로 변환합니다.
	ObjectMapper objectMapper = new ObjectMapper();
	
	// JSON 문자열을 Map<String, Object>로 변환합니다.
	Map<String, Object> dataMap = objectMapper.readValue(jsonString, new TypeReference<Map<String, Object>>() {});
	
	
	// Map에서 리스트를 안전하게 캐스팅합니다.
    List<String> getLocationList = (List<String>) dataMap.get("locationList");
    List<String> getMovieList = (List<String>) dataMap.get("movieList");
    // 캐스티되었는지 출력을 통하여 확인
    System.out.println("Location List: " + getLocationList);
    System.out.println("Movie List: " + getMovieList);
	
	// 배열의 길이를 구합니다.
	int locationListSize = (getLocationList != null) ? getLocationList.size() : 0;
	int movieListSize = (getMovieList != null) ? getMovieList.size() : 0;
	
    // JSON 객체 생성
    JSONObject jsonResponse = new JSONObject();
    int caseNum = 0;
    
    if (locationListSize != 0) {
        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        List<String> locationList = new ArrayList<>();
        

        try {
            conn = DBManager.getDBConnection();
            
       		String sqlQuery = null;
        	if(locationListSize == 1){
                if(movieListSize == 0){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE c.LOCATION_NAME = ? " +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                } else if(movieListSize == 1){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE c.LOCATION_NAME = ? AND m.NAME = ?" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getMovieList.get(0));
                } else if(movieListSize == 2){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE c.LOCATION_NAME = ? AND (m.NAME = ? OR m.NAME = ?)" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getMovieList.get(0));
                    pstmt.setString(3, getMovieList.get(1));
                } else if(movieListSize == 3){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE c.LOCATION_NAME = ? AND (m.NAME = ? OR m.NAME = ? OR m.NAME = ?)" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getMovieList.get(0));
                    pstmt.setString(3, getMovieList.get(1));
                    pstmt.setString(4, getMovieList.get(2));
                }
        	} else if(locationListSize == 2){
                if(movieListSize == 0){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE (c.LOCATION_NAME = ? OR c.LOCATION_NAME = ?) " +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getLocationList.get(1));
                } else if(movieListSize == 1){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE (c.LOCATION_NAME = ? OR c.LOCATION_NAME = ?) AND m.NAME = ?" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getLocationList.get(1));
                    pstmt.setString(3, getMovieList.get(0));
                } else if(movieListSize == 2){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE (c.LOCATION_NAME = ? OR c.LOCATION_NAME = ?) AND (m.NAME = ? OR m.NAME = ?)" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getLocationList.get(1));
                    pstmt.setString(3, getMovieList.get(0));
                    pstmt.setString(4, getMovieList.get(1));
                } else if(movieListSize == 3){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE (c.LOCATION_NAME = ? OR c.LOCATION_NAME = ?) AND (m.NAME = ? OR m.NAME = ? OR m.NAME = ?)" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getLocationList.get(1));
                    pstmt.setString(3, getMovieList.get(0));
                    pstmt.setString(4, getMovieList.get(1));
                    pstmt.setString(5, getMovieList.get(2));
                }
        	} else if(locationListSize == 3){
                if(movieListSize == 0){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE (c.LOCATION_NAME = ? OR c.LOCATION_NAME = ? OR c.LOCATION_NAME = ?) " +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getLocationList.get(1));
                    pstmt.setString(3, getLocationList.get(2));
                } else if(movieListSize == 1){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE (c.LOCATION_NAME = ? OR c.LOCATION_NAME = ? OR c.LOCATION_NAME = ?) AND m.NAME = ?" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getLocationList.get(1));
                    pstmt.setString(3, getLocationList.get(2));
                    pstmt.setString(4, getMovieList.get(0));
                } else if(movieListSize == 2){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE (c.LOCATION_NAME = ? OR c.LOCATION_NAME = ? OR c.LOCATION_NAME = ?) AND (m.NAME = ? OR m.NAME = ?)" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getLocationList.get(1));
                    pstmt.setString(3, getLocationList.get(2));
                    pstmt.setString(4, getMovieList.get(0));
                    pstmt.setString(5, getMovieList.get(1));
                } else if(movieListSize == 3){
                	sqlQuery = "SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c " +
                			"JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) " +
                    		"WHERE (c.LOCATION_NAME = ? OR c.LOCATION_NAME = ? OR c.LOCATION_NAME = ?) AND (m.NAME = ? OR m.NAME = ? OR m.NAME = ?)" +
                    		"ORDER BY c.LOCATION_NAME, t.START_TIME ASC";
                    pstmt = conn.prepareStatement(sqlQuery);
                    pstmt.setString(1, getLocationList.get(0));
                    pstmt.setString(2, getLocationList.get(1));
                    pstmt.setString(3, getLocationList.get(2));
                    pstmt.setString(4, getMovieList.get(0));
                    pstmt.setString(5, getMovieList.get(1));
                    pstmt.setString(6, getMovieList.get(2));
                }
        	}

            rs = pstmt.executeQuery();
            
            List<Map<String, Object>> list = new ArrayList<>();
            while(rs.next()) {
                // Timestamp로 데이터 가져오기
                Timestamp startTimestamp = rs.getTimestamp("START_TIME");
                // Timestamp에서 LocalDateTime 추출
                LocalDateTime startDateTime = startTimestamp.toLocalDateTime();
                // 시, 분, 초만 포함된 LocalDateTime 생성
                LocalDateTime resultStartDateTime = LocalDateTime.of(
                		startDateTime.toLocalDate(), // 날짜 정보
                    LocalTime.of(startDateTime.getHour(), startDateTime.getMinute(), startDateTime.getSecond()) // 시, 분, 초 정보
                );
                // Timestamp로 데이터 가져오기
                Timestamp endTimestamp = rs.getTimestamp("END_TIME");
                // Timestamp에서 LocalDateTime 추출
                LocalDateTime endDateTime = endTimestamp.toLocalDateTime();
                // 시, 분, 초만 포함된 LocalDateTime 생성
                LocalDateTime resultEndDateTime = LocalDateTime.of(
                		endDateTime.toLocalDate(), // 날짜 정보
                    LocalTime.of(endDateTime.getHour(), endDateTime.getMinute(), endDateTime.getSecond()) // 시, 분, 초 정보
                );
                
                String locationName = rs.getString("LOCATION_NAME");
                String roomLocation = rs.getString("ROOM_LOCATION");
                String movieName = rs.getString("NAME");
                

                Map<String, Object> row = new HashMap<>();
                row.put("startTime", resultStartDateTime);
                row.put("endTime", resultEndDateTime);
                row.put("locationName", rs.getString("LOCATION_NAME"));
                row.put("roomLocation", rs.getString("ROOM_LOCATION"));
                row.put("movieName", rs.getString("NAME"));
                list.add(row);
               
                // 리스트를 JSON으로 변환
                Gson gson = new Gson();
                String jsonData = gson.toJson(list);
                // 클라이언트로 JSON 데이터 전송
                
                response.setContentType("application/json charset=UTF-8");
                response.getWriter().write(jsonData);

            }
        /* SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX
        		JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) and (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX)
        		WHERE (c.LOCATION_NAME = '강남' OR c.LOCATION_NAME = '강동') AND (m.NAME = '파일럿' OR m.NAME = '리볼버')
        		ORDER BY c.LOCATION_NAME, t.START_TIME ASC; */
        	
        } catch (Exception e) {
            e.printStackTrace();
            jsonResponse.put("error", "An error occurred while processing your request.");
        } finally {
            DBManager.dbClose(conn, pstmt, rs);
        }
    } else {
        jsonResponse.put("error", "데이터없음");
    }
%>