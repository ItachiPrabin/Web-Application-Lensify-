package com.example.lensify.Service;

import com.example.lensify.Entity.Cart;
import com.example.lensify.Pojo.CartPojo;

import java.util.List;

public interface CartService {

    void saveCart(CartPojo cartPojo);

    List<Cart> getAll();

    void deleteById(Long id);

    void updateQuantity(Long id, Integer quantity);
}
