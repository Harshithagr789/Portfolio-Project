package com.example.hars.Model;

public class MyPortfolio {
    private String name;
    private String email;
    private String message;
    private String phone;
    
    // ✅ Add this default constructor
    public MyPortfolio() {
    }

    // ✅ Add this full constructor if needed
    public MyPortfolio(String name, String email, String message,String phone) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.phone=phone;
    }

    // ✅ Add getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
    public String getPhone() {
    	return phone;
    }
    public void setPhone(String phone) {
    	this.phone=phone;
    }
}
