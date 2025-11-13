package com.example.hars.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.hars.Model.MyPortfolio;
import com.example.hars.Service.PortfolioService;
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173/") // allow React requests
@RestController
public class PortfolioController {
	
	@Autowired
    private PortfolioService portSer;

    @PostMapping("/send")
    public ResponseEntity<String> sendMail(@RequestBody MyPortfolio request) {
        portSer.sendMail(request);
        return ResponseEntity.ok("Mail sent successfully!");
    }

}
