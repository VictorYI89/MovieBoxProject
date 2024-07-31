package com.example.demo.service;

import java.sql.SQLException;
import java.util.List;

import org.apache.ibatis.session.SqlSession;

import com.example.demo.dao.CinemaDAOImpl;
import com.example.demo.dto.CinemaDTO;
import com.example.demo.mybatis.MybatisConnection;

public class CinemaServiceImpl implements CinemaService{
	private static CinemaServiceImpl instance = new CinemaServiceImpl();
	private CinemaServiceImpl() {}
	public static CinemaServiceImpl getInstance() {
		return instance;
	}
	@Override
	public List<CinemaDTO> selectLocationName(String location_name) {
		List<CinemaDTO> vo = null;
		SqlSession s = null;
		try {
			s = MybatisConnection.getSqlSessionFactory().openSession(false);
			vo = CinemaDAOImpl.getInstance().selectLocationName(s, location_name);
			s.commit();
		} catch (SQLException e) {
			e.printStackTrace();
			s.rollback();
		}finally {
			s.close();
		}
		return vo;
	}

}
