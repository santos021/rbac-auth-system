package com.botmakers.mapper;

import org.mapstruct.Mapper;
import com.botmakers.dto.RegisterRequest;
import com.botmakers.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
	
	User toEntity(RegisterRequest request);
}
