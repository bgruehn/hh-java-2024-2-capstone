package org.example.backend;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductRepository productRepository;


//    @GetMapping("/api/categories")
//    public List<Category> getAllCategories() {
//        return categoryRepository.findAll(Category);
//    }
//
//    @GetMapping("/api/products")
//    public List<Product> getAllProducts() {
//        return productRepository.findAll(Product);
//    }
//
//    @GetMapping("/api/products")
//    public List<Product> getAllProductsByCategory() {
//        return productRepository.getAllBy(Category);
//    }


    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @PutMapping("{name}")
    public Product updateProduct(@PathVariable String name, @RequestBody Product updatedProduct) {
        Product existingProduct = productRepository.findByName(name).orElse(null);
        if (existingProduct != null) {
            existingProduct.setName(updatedProduct.getName());
            existingProduct.setCategory(updatedProduct.getCategory());
            existingProduct.setPrice(updatedProduct.getPrice());
            return productRepository.save(existingProduct);
        }
        return null;
    }

    @DeleteMapping("{name}")
    public void deleteProduct(@PathVariable String name) {
        productRepository.deleteByName(name);
    }

}




