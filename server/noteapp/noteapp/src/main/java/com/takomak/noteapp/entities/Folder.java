package com.takomak.noteapp.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name="FOLDER")
@Data
public class Folder {
    @Id
    @Column(columnDefinition = "FOLDER_ID")
    Long folderId = 0L;

    @Column(columnDefinition = "FOLDER_NAME")
    String folderName;


}
