package com.takomak.noteapp.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="folder")
@Data
public class Folder {
    @Id
    Long folderId = 0L;

    String folderName;


}
