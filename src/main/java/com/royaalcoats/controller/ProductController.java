package com.royaalcoats.controller;

import com.royaalcoats.model.Product;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*") // Allow frontend to access
public class ProductController {

    // Mock database for now
    private List<Product> products = new ArrayList<>();

    public ProductController() {
        products.add(new Product("DIY Powder Coat Kit", "Complete kit for home use", 49.99, "kit.jpg"));
        products.add(new Product("Matte Black Spray", "High quality matte finish", 19.99, "spray.jpg"));
        products.add(new Product("Glossy Gold Finish", "Premium gold look", 24.99, "gold.jpg"));
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return products;
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        products.add(product);
        return product;
    }
}
