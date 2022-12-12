package com.takomak.noteapp.controllers;

import com.takomak.noteapp.entities.Category;
import com.takomak.noteapp.entities.Folder;
import com.takomak.noteapp.services.CategoryService;
import com.takomak.noteapp.services.FolderService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> getAllCategories(){
        return this.categoryService.getAllCategories();
    }

    @GetMapping("/{categoryId}")
    public Category getCategoryById(@PathVariable Long categoryId){
        return categoryService.getCategoryById(categoryId);
    }

    @PostMapping
    public Category createCategory(@RequestBody Category newCategory){
        return categoryService.createCategory(newCategory);
    }
}
