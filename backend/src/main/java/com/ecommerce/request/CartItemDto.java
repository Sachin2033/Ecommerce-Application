package com.ecommerce.request;

public class CartItemDto {
private int quantity;
public CartItemDto() {
	
}
public int getQuantity() {
	return quantity;
}
public void setQuantity(int quantity) {
	this.quantity = quantity;
}
public CartItemDto(int quantity) {
	super();
	this.quantity = quantity;
}


}
