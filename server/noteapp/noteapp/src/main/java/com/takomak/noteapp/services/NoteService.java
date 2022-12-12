package com.takomak.noteapp.services;

import com.takomak.noteapp.entities.Note;
import com.takomak.noteapp.repos.NoteRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteService {
    NoteRepository noteRepository;

    public NoteService(NoteRepository noteRepository) {
        this.noteRepository = noteRepository;
    }

    public List<Note> getAllNotes() {
        return this.noteRepository.findAll();
    }

    public Note getNoteById(Long noteId) {
        return noteRepository.findById(noteId).orElse(null);
    }

    public Note createNote(Note newNote) {
        return noteRepository.save(newNote);
    }

    public void deleteNote(Long noteId) { noteRepository.deleteById(noteId);
    }
}
