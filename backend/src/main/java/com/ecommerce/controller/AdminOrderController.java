package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.exception.OrderException;
import com.ecommerce.model.Orders;
import com.ecommerce.response.ApiResponse;
import com.ecommerce.service.OrderService;
@RestController
@RequestMapping("/api/admin/orders")
public class AdminOrderController {
	
@Autowired
private OrderService orderService;


@GetMapping("/")
public ResponseEntity<List<Orders>> getAllOrdersHandler(){

List<Orders> orders=orderService.getAllOrders();

return new ResponseEntity<List<Orders>>(orders, HttpStatus.ACCEPTED);

}

@PutMapping("/{orderld}/confirmed")
public ResponseEntity<Orders> ConfirmedOrderHandler(@PathVariable Long orderld, @RequestHeader("Authorization") String jwt) throws OrderException {

	Orders order = orderService.confirmedOrder(orderld);
	return new ResponseEntity<>(order,HttpStatus.OK);
	
}

@PutMapping("/{orderld}/ship")
public ResponseEntity<Orders> ShippedOrderHandler(@PathVariable Long orderld, @RequestHeader("Authorization") String jwt) throws OrderException {

	Orders order = orderService.shippedOrder(orderld);
	return new ResponseEntity<>(order,HttpStatus.OK);
	
}


@PutMapping("/{orderld}/deliver")
public ResponseEntity<Orders> DeliverOrderHandler(@PathVariable Long orderld, @RequestHeader("Authorization") String jwt) throws OrderException {

	Orders order = orderService.deliveredOrder(orderld);
	return new ResponseEntity<>(order,HttpStatus.OK);
	
}

@PutMapping("/{orderld}/cancle")
public ResponseEntity<Orders> CancleOrderHandler(@PathVariable Long orderld, @RequestHeader("Authorization") String jwt) throws OrderException {

	Orders order = orderService.cancelledOrder(orderld);
	return new ResponseEntity<>(order,HttpStatus.OK);
	
}

@DeleteMapping("/{orderld}/delete")
public ResponseEntity<ApiResponse> DeleteOrderHandler(@PathVariable Long orderld, @RequestHeader("Authorization") String jwt) throws OrderException {

	orderService.deleteOrder(orderld);
	
	ApiResponse res = new ApiResponse();
	res.setMessage("Order deleted SuccessFully");
	res.setStatus(true);
	
	return new ResponseEntity<>(res,HttpStatus.OK);
	
}



}