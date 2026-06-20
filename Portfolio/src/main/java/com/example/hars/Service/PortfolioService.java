package com.example.hars.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.example.hars.Model.MyPortfolio;

@Service
public class PortfolioService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendMail(MyPortfolio request) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("harshithagr01@gmail.com"); // same as username
        message.setTo("harshithagr01@gmail.com");   // where you want to receive the mail
        message.setSubject("New Portfolio Message from " + request.getName());
        message.setText(
            "Name: " + request.getName() + "\n" +
            "Email: " + request.getEmail() + "\n" +
            "Phone: " + request.getPhone() + "\n\n" +
            "Message:\n" + request.getMessage()
        );
        mailSender.send(message);
    }
}
