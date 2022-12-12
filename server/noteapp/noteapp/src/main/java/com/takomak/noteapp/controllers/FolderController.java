package com.takomak.noteapp.controllers;

import com.takomak.noteapp.entities.Folder;
import com.takomak.noteapp.entities.Note;
import com.takomak.noteapp.services.FolderService;
import com.takomak.noteapp.services.NoteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/folders")
public class FolderController {
    private FolderService folderService;

    public FolderController(FolderService folderService) {
        this.folderService = folderService;
    }

    @GetMapping
    public List<Folder> getAllFolders(){
        return this.folderService.getAllFolders();
    }

    @GetMapping("/{folderId}")
    public Folder getFolderById(@PathVariable Long folderId){
        return folderService.getFolderById(folderId);
    }

    @PostMapping
    public Folder createFolder(@RequestBody Folder newFolder){
        return folderService.createFolder(newFolder);
    }
}