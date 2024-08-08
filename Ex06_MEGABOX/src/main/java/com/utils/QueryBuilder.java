// QueryBuilder.java
package com.utils;

import java.sql.*;
import java.util.List;
import java.util.ArrayList;

public class QueryBuilder {
    public static String buildQuery(List<String> locations, List<String> movies) {
        StringBuilder sb = new StringBuilder("SELECT c.LOCATION_NAME, c.ROOM_LOCATION, m.NAME, t.START_TIME, t.END_TIME FROM cinema c ");
        sb.append("JOIN movie m ON c.MOVIE_IDX = m.MOVIEIDX JOIN TIMETABLE t ON (c.LOCATION_NAME = t.LOCATION_NAME) AND (c.ROOM_LOCATION = t.ROOM_LOCATION) AND (c.MOVIE_IDX = t.MOVIE_IDX) WHERE ");
        
        for (int i = 0; i < locations.size(); i++) {
            sb.append("(c.LOCATION_NAME = ? ");
            if (i < locations.size() - 1) sb.append("OR ");
            else sb.append(") ");
        }
        
        if (!movies.isEmpty()) {
            sb.append("AND (");
            for (int i = 0; i < movies.size(); i++) {
                sb.append("(m.NAME = ? ");
                if (i < movies.size() - 1) sb.append("OR ");
                else sb.append(") ");
            }
            sb.append(")");
        }
        
        sb.append("ORDER BY c.LOCATION_NAME, t.START_TIME ASC");
        return sb.toString();
    }
}
