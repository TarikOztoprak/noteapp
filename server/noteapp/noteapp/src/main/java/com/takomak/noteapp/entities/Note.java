package com.takomak.noteapp.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="note")
public class Note {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "note_seq")
    @SequenceGenerator(name = "note_seq", sequenceName = "note_sequence", allocationSize = 1)
    Long noteId = 0L;

    String noteTitle;

    String noteContent;

    Date noteDate;

    Long noteCategoryId;

    String noteUrl;

}
