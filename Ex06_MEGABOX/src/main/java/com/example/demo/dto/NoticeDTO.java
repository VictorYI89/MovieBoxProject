package com.example.demo.dto;

import java.util.Date;

import lombok.Data;

@Data
public class NoticeDTO {
	private int idx;
	private int row_num;
	private String name;
	private String category;
	private String title;
	private String content;
	private Date regDate;
	public int getIdx() {
		return idx;
	}
	public int getRow_num() {
		return row_num;
	}
	public String getName() {
		return name;
	}
	public String getCategory() {
		return category;
	}
	public String getTitle() {
		return title;
	}
	public String getContent() {
		return content;
	}
	public Date getRegDate() {
		return regDate;
	}
}
