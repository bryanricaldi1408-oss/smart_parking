package com.example.smart_parking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/home")
public class HomeController {
    @GetMapping("/")
    public String viewHomepageGuest() {
        return "homePage";
    }

    @GetMapping("/admin") 
    public String viewHomepageAdmin() {
        return "homePage";
    }
}
