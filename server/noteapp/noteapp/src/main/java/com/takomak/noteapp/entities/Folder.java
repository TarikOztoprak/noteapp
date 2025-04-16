package com.takomak.noteapp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="folder")
@Data
public class Folder {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "folder_seq")
    @SequenceGenerator(name = "folder_seq", sequenceName = "folder_sequence", allocationSize = 1)
    Long folderId = 0L;

    String folderName;


}
