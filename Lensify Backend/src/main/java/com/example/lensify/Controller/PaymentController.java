package com.example.lensify.Controller;

import com.example.lensify.Entity.Payment;
import com.example.lensify.Pojo.PaymentPojo;

import com.example.lensify.Service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/payment")
@RequiredArgsConstructor
public class PaymentController {
    private final PaymentService paymentService;

    @PostMapping("/save")
    public Long savePayment(@RequestBody PaymentPojo paymentPojo) throws IOException {
        Payment successPayment=paymentService.savePayment(paymentPojo);

        return successPayment.getId();
    }

    @GetMapping("/findAll")
    public List<Payment> getAll(){
        return this.paymentService.findAll();
    }

    @GetMapping("/findById/{id}")
    public Optional<Payment> getById(@PathVariable("id") Integer id){
        return this.paymentService.findById(Long.valueOf(id));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable("id") Long id){
        Integer paymentId =this.paymentService.deleteById(Long.valueOf(id));

    }

    @PutMapping("/update/{id}")
    public String updatePayment(@PathVariable Long id, @RequestBody PaymentPojo paymentPojo) {
        return paymentService.update(id, paymentPojo);
    }

}
