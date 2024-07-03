package org.example.backend;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface CategoryRepository extends MongoRepository<Category, String>{

    Optional<Category> findByName(String name);

    void deleteByName(String name);
}
