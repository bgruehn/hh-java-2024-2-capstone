package org.example.backend;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class Category {
    @Getter
    String id;
    @Getter
    @Setter
    String name;
}
