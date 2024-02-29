//package com.example.feast.Controller;
//
//import com.example.feast.Entity.User;
//import com.example.feast.Service.UserService;
//import com.example.feast.Pojo.UserPojo;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@Controller
//public class AdminUserController {
//
//    @Autowired
//    private AdminService adminService;
//
//    @GetMapping("/admin/register")
//    public String showAdminRegistrationForm(Model model) {
//        model.addAttribute("admin", new Admin());
//        return "admin/register"; // Assuming "admin/register" is the view for admin registration form
//    }
//
//    @PostMapping("/admin/register")
//    public String registerAdmin(@ModelAttribute("admin") @Valid Admin admin, BindingResult result) {
//        // Admin registration logic
//        // ...
//    }
//
//    // Other admin-related methods (admin login, dashboard, etc.)
//    // ...
//}