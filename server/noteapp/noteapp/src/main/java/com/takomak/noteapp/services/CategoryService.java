package com.takomak.noteapp.services;

import com.takomak.noteapp.entities.Category;

import com.takomak.noteapp.repos.CategoryRepository;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class CategoryService {
    CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public Category getCategoryById(Long categoryId) {
        return categoryRepository.findById(categoryId).orElse(null);
    }

    public Category createCategory(Category newCategory) {
        return categoryRepository.save(newCategory);
    }
}
