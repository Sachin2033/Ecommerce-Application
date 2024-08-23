package com.ecommerce.service;

import java.util.List;


import com.ecommerce.exception.OrderException;
import com.ecommerce.model.Address;
import com.ecommerce.model.Orders;
import com.ecommerce.model.User;

public interface OrderService {
	

public Orders createOrder(User user, Address shippingAdress);

public Orders findOrderByld(Long orderId) throws OrderException;

public List<Orders> usersOrderHistory(Long userld);

public Orders placedOrder(Long orderld) throws OrderException;

public Orders confirmedOrder(Long orderld)throws OrderException; 

public Orders shippedOrder(Long orderld) throws OrderException; 

public Orders deliveredOrder(Long orderld) throws OrderException;

public Orders cancelledOrder(Long orderld) throws OrderException;

public List<Orders> getAllOrders();

public void deleteOrder(Long orderId)throws OrderException;




}
