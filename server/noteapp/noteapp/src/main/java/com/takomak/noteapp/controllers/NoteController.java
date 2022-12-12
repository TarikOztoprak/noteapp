package com.takomak.noteapp.controllers;

import com.takomak.noteapp.entities.Note;
import com.takomak.noteapp.services.NoteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notes")
public class NoteController {
    private NoteService noteService;

    public NoteController(NoteService noteService) {
        this.noteService = noteService;
    }

    @GetMapping
    public List<Note> getAllNotes(){
        return this.noteService.getAllNotes();
    }

    @GetMapping("/{noteId}")
    public Note getNoteById(@PathVariable Long noteId){
        return noteService.getNoteById(noteId);
    }

    @PostMapping
    public Note createNote(@RequestBody Note newNote){
        return noteService.createNote(newNote);
    }

    @DeleteMapping("/{noteId}")
    public void deleteNote(@PathVariable Long noteId){
        noteService.deleteNote(noteId);
    }
}
