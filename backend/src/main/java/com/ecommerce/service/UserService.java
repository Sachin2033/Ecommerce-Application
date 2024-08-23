package com.ecommerce.service;

import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;

public interface UserService {
	
	// services for user
	public User findUserById(Long userId)throws UserException;
	
	public User findUserProfileByJwt(String jwt)throws UserException;
	
	
	
	
}
