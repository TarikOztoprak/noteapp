package com.takomak.noteapp.services;

import com.takomak.noteapp.entities.Folder;
import com.takomak.noteapp.entities.Note;
import com.takomak.noteapp.repos.FolderRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FolderService {
    FolderRepository folderRepository;

    public FolderService(FolderRepository folderRepository) {
        this.folderRepository = folderRepository;
    }

    public List<Folder> getAllFolders() {
        return folderRepository.findAll();
    }

    public Folder getFolderById(Long folderId) {
        return folderRepository.findById(folderId).orElse(null);
    }

    public Folder createFolder(Folder newFolder) {
        return folderRepository.save(newFolder);
    }
}
