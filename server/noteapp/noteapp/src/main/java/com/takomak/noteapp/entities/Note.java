package com.takomak.noteapp.entities;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@Table(name="note")
public class Note {

    @Id
    Long noteId = 0L;

    String noteTitle;

    String noteContent;

    Date noteDate;

    Long noteCategoryId;

    String noteUrl;

}
