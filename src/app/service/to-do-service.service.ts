import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { toDoList } from '../models/toDoList';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  
   http = inject(HttpClient); //FAZ REQUISIÇÕES
  
   API = "http://localhost:8080/todo";



   constructor() { }

   listAll(): Observable<toDoList[]>{ //Metodo @GETMapping
     return this.http.get<toDoList[]>(this.API);
   }

   listCidade(cidade:string): Observable<toDoList[]>{ //Metodo @GETMapping
    return this.http.get<toDoList[]>(this.API +"/cidade/" + cidade);
  }

  TodoPesquisavel(nome:string): Observable<toDoList[]>{ 
    return this.http.get<toDoList[]>(this.API +"/buscarPorNome?nome=" + nome);
  }

  getById(id:number): Observable<toDoList>{
    return this.http.get<toDoList>(this.API + "/id/"+ id );
  }


   save(livro:toDoList): Observable<string>{ //Metodo @PostMapping
     return this.http.post<string>(this.API+"/", toDoList  ,{ responseType: 'text' as 'json'})//Retorno string? Sempre usar responseType

   }

   


}
