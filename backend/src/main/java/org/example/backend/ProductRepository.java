package org.example.backend;

import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {

}

