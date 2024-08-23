package com.ecommerce.service;

import java.time.LocalDateTime;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.ecommerce.exception.OrderException;
import com.ecommerce.model.Address;
import com.ecommerce.model.Cart;
import com.ecommerce.model.CartItem;
import com.ecommerce.model.OrderItem;
//import com.ecommerce.model.Order;
import com.ecommerce.model.Orders;
import com.ecommerce.model.User;
import com.ecommerce.repository.AddressRepository;
import com.ecommerce.repository.CartRepository;
import com.ecommerce.repository.OrderItemRepository;
import com.ecommerce.repository.OrderRepository;
import com.ecommerce.repository.UserRepository;

import jakarta.persistence.criteria.Order;

@Service
public class OrderServiceImplementation implements OrderService{

	private OrderRepository orderRepository;
	private CartService cartService;
	private AddressRepository addressRepository;
	private UserRepository userRepository;
	private OrderItemService orderItemService;
	private OrderItemRepository orderItemRepository;

	
	public OrderServiceImplementation(OrderRepository orderRepository, 
			CartService cartService,AddressRepository addressRepository, UserRepository userRepository,
			OrderItemService orderItemService, OrderItemRepository orderItemRepository) {
		this.orderRepository=orderRepository;
		this.cartService=cartService;
		this.addressRepository=addressRepository;
		this.userRepository=userRepository;
		this.orderItemService=orderItemService;
		this.orderItemRepository=orderItemRepository;
	}

	
	
	
	@Override
	public Orders createOrder(User user, Address shippAddress) {
		shippAddress.setUser(user);
		Address address=addressRepository.save(shippAddress);
		user.getAddress().add(address);
		userRepository.save(user);
		
		Cart cart=cartService.findUserCart(user.getId());
		List<OrderItem> orderItems=new ArrayList<>();
		
		for(CartItem item:cart.getCartItem()) {
			OrderItem orderItem=new OrderItem();
			
			 orderItem.setPrice(item.getPrice());
			 orderItem.setProduct(item.getProduct());
			 orderItem.setQuantity(item.getQuantity());
			 orderItem.setSize(item.getSize());
			 orderItem.setDiscountedPrice(item.getDiscountedPrice());
			 
			 OrderItem createdOrderItem=orderItemRepository.save(orderItem);
			 orderItems.add(createdOrderItem);
			 
		}
		
		Orders createdOrder =new Orders();
		createdOrder.setUser(user);
		createdOrder.setOrderItems(orderItems);
		createdOrder.setTotalPrice(cart.getTotalPrice());
		createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
		createdOrder.setDiscount(cart.getDiscount());
		createdOrder.setTotalItem(cart.getTotalItem());
		
		createdOrder.setShippingAddress(address);
		createdOrder.setOrderDate(LocalDateTime.now());
		createdOrder.setOrderStatus("PENDING");
		createdOrder.getPaymentDetails().setStatus("PENDING");
		createdOrder.setCreatedAt(LocalDateTime.now());
		
		Orders savedOrder=orderRepository.save(createdOrder);
		
		for(OrderItem item:orderItems) {
			item.setOrder(savedOrder);
			orderItemRepository.save(item);
		}
		 
		return savedOrder;
	}

	@Override
	public Orders findOrderByld(Long orderId) throws OrderException {
		Optional<Orders> opt=orderRepository.findById(orderId);
		
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new OrderException("Order not Exist with id="+orderId);
	}

	@Override
	public List<Orders> usersOrderHistory(Long userld) {
		List<Orders> orders=orderRepository.getUsersOrders(userld);
		
		return orders;
	}

	@Override
	public Orders placedOrder(Long orderId) throws OrderException {
		Orders orders=findOrderByld(orderId);
		orders.setOrderStatus("PLACED");
		orders.getPaymentDetails().setStatus("COMPLETED");
		return orders;
	}

	@Override
	public Orders confirmedOrder(Long orderId) throws OrderException {
		Orders orders=findOrderByld(orderId);
		orders.setOrderStatus("CONFIRMED");
		
		return orderRepository.save(orders);
	}

	@Override
	public Orders shippedOrder(Long orderld) throws OrderException {
		Orders orders=findOrderByld(orderld);
		orders.setOrderStatus("SHIPPED");
		
		return orderRepository.save(orders);
	}

	@Override
	public Orders deliveredOrder(Long orderld) throws OrderException {
		Orders orders=findOrderByld(orderld);
		orders.setOrderStatus("DELIVERED");
		
		return orderRepository.save(orders);
	}

	@Override
	public Orders cancelledOrder(Long orderld) throws OrderException {
		Orders orders=findOrderByld(orderld);
		orders.setOrderStatus("CANCELLED");
		return orderRepository.save(orders);
	}

	@Override
	public List<Orders> getAllOrders() {
		// TODO Auto-generated method stub
		return orderRepository.findAll();
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		Orders order=findOrderByld(orderId);
		
		orderRepository.deleteById(orderId);
		
		
	}

}
