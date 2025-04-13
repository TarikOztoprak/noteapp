package com.takomak.noteapp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="category")
@Data
public class Category {
    @Id
    Long categoryId = 0L;

    String categoryName;

    Long categoryFolderId;

    String categoryType;
}
