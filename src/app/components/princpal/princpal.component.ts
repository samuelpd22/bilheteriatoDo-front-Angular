import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toDoList } from '../../models/toDoList';
import { ToDoServiceService } from '../../service/to-do-service.service';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms'; // Importação do FormsModule







@Component({
  selector: 'app-princpal',
  standalone: true,
  imports: [CommonModule, MdbCollapseModule,MdbCarouselModule,MdbFormsModule,FormsModule],
  templateUrl: './princpal.component.html',
  styleUrl: './princpal.component.scss'
})
export class PrincpalComponent {
  toDolist: toDoList[] = []; // Agora é um array de toDoList
  mensagem: string = '';

  toDoEdit: toDoList = new toDoList(0,"","","",true,"","")

  toDoService = inject(ToDoServiceService);//@Autowired
nome: any;


  constructor(){
    this.listAll();
  }


  listAll(){          //ESTRUTURA PARA METODOD GET RETORNAR
    this.toDoService.listAll().subscribe({
      next:lista => { //QUANDO DER CERTO
        this.toDolist = lista;

      },
      error: err => { //QUANDO OCORRER ERRO


      }
    });
 };

 listCidade(cidade:string){
  this.toDoService.listCidade(cidade).subscribe({
    next:lista => { //QUANDO DER CERTO
      this.toDolist = lista;
      console.log(lista)

    },
    error: err => { //QUANDO OCORRER ERRO

      console.log("erro de depuração");
    }
  });
};


buscarPorNome() {
  if (this.nome) {
    this.toDoService.TodoPesquisavel(this.nome).subscribe({
      next: (lista) => {
        this.toDolist = lista;
      },
      error: (err) => {
        console.error("Erro ao buscar por nome:", err);
      }
    });
  } else {
    this.listAll(); // Se não houver nome, lista tudo novamente
  }
}
}