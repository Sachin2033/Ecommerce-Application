package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.exception.OrderException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.Address;
import com.ecommerce.model.Orders;
import com.ecommerce.model.User;
import com.ecommerce.service.OrderService;
import com.ecommerce.service.UserService;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;
	@Autowired
	private UserService userService;
	
	@PostMapping("/")
	public ResponseEntity<Orders> createOrder(@RequestBody Address shippingAddress,
			@RequestHeader("Authorization")String jwt)throws UserException{
		
		User user = userService.findUserProfileByJwt(jwt);
		Orders order = orderService.createOrder(user, shippingAddress);
		System.out.println("order"+order);
		
		return  new ResponseEntity<Orders>(order,HttpStatus.CREATED);
	
	}
	
	@GetMapping("/user")
	public ResponseEntity<List<Orders>> usersOrderHistory(
			@RequestHeader("Authorization")String jwt)throws UserException{
		
		User user = userService.findUserProfileByJwt(jwt);
		List<Orders> orders=orderService.usersOrderHistory(user.getId());
		
		return  new ResponseEntity<List<Orders>>(orders,HttpStatus.CREATED);
	
	}
	
	@GetMapping("/{Id}")
	public ResponseEntity<Orders> findOrderById(@PathVariable("Id") Long orderId,
			@RequestHeader("Authorization")String jwt)throws UserException,OrderException{
		
		User user = userService.findUserProfileByJwt(jwt);
		Orders order =orderService.findOrderByld(orderId);
		
		return  new ResponseEntity<Orders>(order,HttpStatus.ACCEPTED);
	
	}

}
