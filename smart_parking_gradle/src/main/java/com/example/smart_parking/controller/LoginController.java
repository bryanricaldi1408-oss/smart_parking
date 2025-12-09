package com.example.smart_parking.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class LoginController {
    

    @GetMapping("/")
    public String viewWelcomePage() {
        return "welcomePage";
    }

    @GetMapping("/login")
    public String viewLoginPage() {
        return "loginPage";
    }

    @PostMapping("/login")
    public String login(HttpServletRequest request) {
        String username = request.getParameter("username");

        if (username.contains("admin")) {
            return "redirect:/home/admin";
        }

        return "redirect:/home/";
    }
}
