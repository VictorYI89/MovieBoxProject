package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.CinemaDTO;

public interface CinemaService {
	List<CinemaDTO> selectLocationName(String location_name);
}
