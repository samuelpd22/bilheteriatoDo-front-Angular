export class toDoList{
    id!:number;
    nome!:string;
    image!:string;
    dataEhora!:string;
    realizado!:boolean;
    local!:string;
    cidade!:string;
    
    constructor(id:number,nome:string ,image:string,dataEhora:string, realizado:boolean, local:string,cidade:string){
      this.id = id;
      this.nome = nome;
      this.image = image;
      this.dataEhora = dataEhora;
      this.realizado = realizado;
      this.local = local;
      this.cidade = cidade;
    }
  }