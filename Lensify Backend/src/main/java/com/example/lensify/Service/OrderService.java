package com.example.lensify.Service;

import com.example.lensify.Entity.Order;
import com.example.lensify.Pojo.OrderPojo;


import java.util.List;
import java.util.Optional;

public interface OrderService {

    String save(OrderPojo orderpojo);


    List<Order> getAll();


    Optional<Order> findById(Long id);

    void deleteById(Long id);

    String update(Long id , OrderPojo orderpojo);

}
