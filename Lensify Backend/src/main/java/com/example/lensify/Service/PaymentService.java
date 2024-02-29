package com.example.lensify.Service;

import com.example.lensify.Entity.Payment;
import com.example.lensify.Pojo.PaymentPojo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface PaymentService {
    Payment savePayment(PaymentPojo paymentPojo);

    List<Payment> findAll();

    Optional<Payment> findById(Long id);

    Integer deleteById(Long id);

    String update(Long id, PaymentPojo paymentPojo);



}
