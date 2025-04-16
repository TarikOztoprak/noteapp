package com.takomak.noteapp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="category")
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_seq")
    @SequenceGenerator(name = "category_seq", sequenceName = "category_sequence", allocationSize = 1)
    Long categoryId = 0L;

    String categoryName;

    Long categoryFolderId;

    String categoryType;
}
