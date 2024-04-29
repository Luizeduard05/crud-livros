import { Component, OnInit } from '@angular/core';
import { ILivros } from 'src/app/model/ILivros';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-livros-cadastrados',
  templateUrl: './livros-cadastrados.component.html',
  styleUrls: ['./livros-cadastrados.component.scss'],
})
export class LivrosCadastradosComponent implements OnInit {
  listaLivros: ILivros[];
  livroEditado: ILivros = {
    titulo: '',
    autor: '',
    descricao: '',
    editora: '',
    genero: '',
    anoLancamento: 0,
  };

  id!: number;
  titulo!: string;
  autor!: string;
  editora!: string;
  descricao!: string;
  genero!: string;
  anoLancamento!: number;

  constructor(private service: LivroService) {
    this.listaLivros = this.service.listalivros;
  }

  ngOnInit(): void {
    this.service
      .getLivros()
      .subscribe((listaLivros) => (this.listaLivros = listaLivros));
  }


  deleteLivro(id: number) {
    this.service.deleteLivro(id).subscribe((_) => this.ngOnInit());
  }

  editarLivro() {
    this.service.putLivros(this.livroEditado).subscribe((_) => this.ngOnInit());
  }

  modoEdicao(livro: ILivros) {
    this.livroEditado = { ...livro };
  }
}
