package com.example.crudlivros.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
@Entity
@Data
@Table(name = "tbl_livros")
public class Livro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "O campo titulo é obrigatório")
    private String titulo;

    @NotBlank(message = "O campo autor é obrigatório")
    private String autor;

    @NotBlank(message = "O campo editora é obrigatório")
    private String editora;

    @NotBlank(message = "O campo descricao é obrigatório")
    private String descricao;

    @NotBlank(message = "O campo genero é obrigatório")
    private String genero;

    @NotNull
    private int anoLancamento;

}
