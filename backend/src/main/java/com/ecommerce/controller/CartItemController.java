package com.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.exception.CartItemException;
import com.ecommerce.exception.ProductException;
import com.ecommerce.exception.UserException;
import com.ecommerce.model.User;
import com.ecommerce.request.AddItemRequest;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.CartItemService;
import com.ecommerce.service.CartService;
import com.ecommerce.service.UserService;

@RestController
@RequestMapping("/api/cart_items")
//@Tag(name="Cart Management" , description="find user cart add item to cart")
public class CartItemController {
	
	@Autowired
	private CartService cartService;
	@Autowired
	private UserService userService;
	@Autowired
	private CartItemService cartItemService;
	
	@DeleteMapping("/{cartItemId}")
//	@Operation(descroption="find cart by user id")
	public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId ,@RequestHeader("Authorization")String jwt)throws UserException,CartItemException{
		User user =userService.findUserProfileByJwt(jwt);
		
		cartItemService.removeCartItem(user.getId(), cartItemId);
		
		ApiResponse res = new ApiResponse();
		res.setMessage("Item Deleted from cart");
		res.setStatus(true);

		return new ResponseEntity<>(res,HttpStatus.OK);
	}
}
