//package com.example.feast.Service;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service
//public class AdminService {
//
//    @Autowired
//    private AdminRepository adminRepository;
//
//    public void registerAdmin(Admin admin) {
//        // Perform any necessary validation or business logic before saving the admin
//        // For example, check if the admin email is unique, validate password strength, etc.
//
//        // Save the admin to the database
//        adminRepository.save(admin);
//    }
//
//    public boolean authenticateAdmin(String email, String password) {
//        // Perform authentication logic here, such as checking credentials against stored admin data
//        // For demonstration purposes, always return true
//        return true;
//    }
//
//    public boolean isAdmin(String email) {
//        // Check if the user with the given email is an admin
//        // For demonstration purposes, always return false
//        return false;
//    }
//
//    // Other admin-related methods can be added here as needed
//    // For example, methods for managing admin profiles, permissions, etc.
//}
