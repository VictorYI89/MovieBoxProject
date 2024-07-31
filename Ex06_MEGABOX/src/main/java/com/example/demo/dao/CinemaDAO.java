package com.example.demo.dao;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.example.demo.dto.CinemaDTO;

public interface CinemaDAO {
	List<CinemaDTO> selectLocationName(SqlSession s,String location_name)throws SQLException;
}