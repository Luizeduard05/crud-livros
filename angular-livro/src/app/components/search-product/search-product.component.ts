import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ILivros } from 'src/app/model/ILivros';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
})
export class SearchProductComponent implements OnInit{
  livro: ILivros[];

  titulo: string = '';
  autor: string = '';
  editora: string = '';
  descricao: string = '';
  genero: string = '';
  anoLancamento: number = 0;

  constructor(private service: LivroService) {
    this.livro = this.service.livros;
  }

  ngOnInit(): void {
    this.service
    .getLivros()
    .subscribe((listaLivros) => (this.livro = this.livro));
  }

  getLivros() {
    this.service.getLivros().subscribe((livro) => (this.livro = livro));
  }

  postLivro() {
    this.service
      .postLivros({
        titulo: this.titulo,
        autor: this.autor,
        editora: this.editora,
        descricao: this.descricao,
        genero: this.genero,
        anoLancamento: this.anoLancamento,
      })
      .subscribe((novoLivro) => {
        this.getLivros()
        this.limparCampos();
      });
  }

  limparCampos() {
    this.titulo = '';
    this.autor = '';
    this.editora = '';
    this.descricao = '';
    this.genero = '';
    this.anoLancamento = 0;
  }
}
