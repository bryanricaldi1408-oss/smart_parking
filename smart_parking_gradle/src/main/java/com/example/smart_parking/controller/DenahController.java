package com.example.smart_parking.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/denah")
public class DenahController {
    @GetMapping("/ppag")
    public String viewDenahPpag(){
        return "denah_parkir_b1_ppag";
    }

    @GetMapping("/gedung-9") 
    public String viewDenahGedung9() {
        return "denah_parkir_b1_gdg9"; 
    }
}
