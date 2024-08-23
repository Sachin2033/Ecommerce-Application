package com.ecommerce.response;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;

public class ApiResponse {
    private String message;
    private boolean status;

    // Constructor
 public ApiResponse() {
	 
 }
    
    public ApiResponse(String message, boolean status) {
        this.message = message;
        this.status = status;
    }

    // Getter for message
    public String getMessage() {
        return message;
    }

    // Setter for message
    public void setMessage(String message) {
        this.message = message;
    }

    // Getter for status
    public boolean getStatus() {
        return status;
    }

    // Setter for status
    public void setStatus(boolean b) {
        this.status = b;
    }

    @Override
    public String toString() {
        return "ApiResponse{" +
                "message='" + message + '\'' +
                ", status=" + status +
                '}';
    }
}

