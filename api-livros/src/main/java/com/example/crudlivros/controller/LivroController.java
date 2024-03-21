package com.example.crudlivros.controller;

import com.example.crudlivros.model.Livro;
import com.example.crudlivros.service.LivroService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/livros")
public class LivroController {

    @Autowired
    private LivroService service;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping
    public ResponseEntity<Livro> addLivro(@Valid @RequestBody Livro livro) {
        return service.addLivro(livro);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public ResponseEntity<List<Livro>> buscarTodosLivros() {
        return service.buscarTodosLivros();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Livro>> buscarPorId(@PathVariable Long id) {
       return service.buscarPorId(id);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/{id}")
    public ResponseEntity<Livro> updateLivro(@Valid @PathVariable Long id, @RequestBody Livro livro) {
        return service.atualizarLivro(id,livro);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Livro>> deletarLivro(@PathVariable Long id) {
        return service.deletarLivro(id);
    }



}
