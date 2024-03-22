import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILivros } from '../model/ILivros';

@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private apiUrl = 'http://localhost:8080/api/v1/livros';

  constructor(private http: HttpClient) {}

  livros: ILivros[] = [];

  getLivros() {
    return this.http.get<ILivros[]>(this.apiUrl);
  }
  getLivrosId(livro: ILivros) {
    alert(`ID CAPTURADO ${livro.id}`);
    return this.http.get<ILivros[]>(`${this.apiUrl}/${livro.id}`);
  }

  postLivros(livro: ILivros) {
    alert(`Livro de titulo ${livro.titulo} adicionado com sucesso!`);
    return this.http.post<ILivros>(this.apiUrl, livro);
  }

  putLivros(livro: ILivros) {
    alert(`Livro de id ${livro.id} atualizado com sucesso!`);
    return this.http.put<ILivros>(`${this.apiUrl}/${livro.id}`, livro);
  }

  deleteLivro(id: number) {
    alert(`Livro de id ${id} excluido`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
