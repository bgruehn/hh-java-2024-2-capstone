package org.example.backend;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor

public class CategoryController {

    private final CategoryRepository categoryRepository;

    @PostMapping
    public Category addCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    @GetMapping
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @PutMapping("{name}")
    public Category updateCategory(@PathVariable String name, @RequestBody Category updatedCategory) {
        Category existingCategory = categoryRepository.findByName(name).orElse(null);
        if (existingCategory != null) {
            existingCategory.setName(updatedCategory.getName());
            return categoryRepository.save(existingCategory);
        }
        return null;
    }

    @DeleteMapping("{name}")
    public void deleteCategory(@PathVariable String name) {
        categoryRepository.deleteByName(name);
    }

}

