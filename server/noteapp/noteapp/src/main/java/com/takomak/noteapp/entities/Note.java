package com.takomak.noteapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="NOTE")
@Data
public class Note {

    @Id
    @Column(columnDefinition = "NOTE_ID")
    Long noteId = 0L;

    @Column(columnDefinition = "NOTE_TITLE")
    String noteTitle;

    @Column(columnDefinition = "NOTE_CONTENT")
    String noteContent;

    @Column(columnDefinition = "NOTE_DATE")
    Date noteDate;

    @Column(name="NOTE_CATEGORY_ID")
    Long noteCategoryId;

    @Column(columnDefinition = "NOTE_URL")
    String noteUrl;

}
