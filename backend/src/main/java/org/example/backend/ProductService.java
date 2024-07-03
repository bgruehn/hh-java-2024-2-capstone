package org.example.backend;

import java.util.List;
import java.util.Optional;

public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

//    public List<Product> getAllProductsByCategory(String category) {
//        return productRepository.findByCategory(category);
//    }

    public Optional<Product> updateProduct(String name, Product updatedProduct) {
        Optional<Product> existingProduct = productRepository.findById(name);
        if (existingProduct.isPresent()) {
            Product productToUpdate = existingProduct.get();
            productToUpdate.setName(updatedProduct.getName());
            productToUpdate.setCategory(updatedProduct.getCategory());
            productToUpdate.setPrice(updatedProduct.getPrice());
            return Optional.of(productRepository.save(productToUpdate));
        }
        return Optional.empty();
    }
}
