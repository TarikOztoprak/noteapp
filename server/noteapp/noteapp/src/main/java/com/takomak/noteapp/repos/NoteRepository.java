package com.takomak.noteapp.repos;

import com.takomak.noteapp.entities.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
