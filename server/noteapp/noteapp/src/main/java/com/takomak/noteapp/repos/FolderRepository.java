package com.takomak.noteapp.repos;

import com.takomak.noteapp.entities.Folder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FolderRepository extends JpaRepository<Folder, Long> {
}
