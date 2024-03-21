package com.example.crudlivros.service;

import com.example.crudlivros.model.Livro;
import com.example.crudlivros.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {

    @Autowired
    private LivroRepository repository;

    public ResponseEntity<Livro> addLivro(Livro livro) {
        if (livro.getAnoLancamento() <= 0){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(repository.save(livro), HttpStatus.CREATED);
    }

    public ResponseEntity<List<Livro>> buscarTodosLivros() {
        return new ResponseEntity<>(repository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<Optional<Livro>> buscarPorId(Long id) {
        if (repository.existsById(id)) {
            return new ResponseEntity<>(repository.findById(id), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Livro> atualizarLivro(Long id, Livro livro) {

            if (repository.existsById(id)) {
                    Livro livroatualizado = new Livro();
                    livroatualizado.setId(id);
                    livroatualizado.setTitulo(livro.getTitulo());
                    livroatualizado.setAutor(livro.getAutor());
                    livroatualizado.setEditora(livro.getEditora());
                    livroatualizado.setDescricao(livro.getDescricao());
                    livroatualizado.setGenero(livro.getGenero());
                    livroatualizado.setAnoLancamento(livro.getAnoLancamento());

                    return new ResponseEntity<>(repository.save(livroatualizado), HttpStatus.OK);

    }
    return  new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    public ResponseEntity<Optional<Livro>> deletarLivro(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
