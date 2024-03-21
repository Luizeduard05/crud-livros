import { Component, Input, OnInit } from '@angular/core';
import { ILivros } from 'src/app/model/ILivros';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros-cadastrados',
  templateUrl: './livros-cadastrados.component.html',
  styleUrls: ['./livros-cadastrados.component.scss'],
})
export class LivrosCadastradosComponent implements OnInit {
  listaLivros: ILivros[];
  edicaoLivro: ILivros | '' = '';

  id!: number;
  titulo!: string;
  autor!: string;
  editora!: string;
  descricao!: string;
  genero!: string;
  anoLancamento!: number;

  constructor(private service: LivroService) {
    this.listaLivros = this.service.livros;
  }

  ngOnInit(): void {
    this.service
      .getLivros()
      .subscribe((listaLivros) => (this.listaLivros = listaLivros));
  }

  deleteLivro(id: number) {
    this.service.deleteLivro(id).subscribe((_) => this.ngOnInit());
  }

  editarLivro(livro: ILivros) {
    if (this.edicaoLivro === livro) {
      this.edicaoLivro = '';
    } else {
      this.edicaoLivro = livro;
    }
    this.service.putLivros(livro).subscribe((_) => this.ngOnInit);
  }
}
