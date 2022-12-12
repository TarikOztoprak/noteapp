package com.takomak.noteapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name="CATEGORY")
@Data
public class Category {
    @Id
    @Column(columnDefinition = "CATEGORY_ID")
    Long categoryId = 0L;

    @Column(columnDefinition = "CATEGORY_NAME")
    String categoryName;

    @Column(name="CATEGORY_FOLDER_ID")
    Long categoryFolderId;

    @Column(columnDefinition = "CATEGORY_TYPE")
    String categoryType;
}
