import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  public vagas: any = [
   {
    id: 1, 
    "img":"1.jpg",
    "nome":"Programador Front-end Junior",
    "descricao":"Desenvolvimento de apliações Front-End",
    "salario":"2866,98 + vale refeição e assistência médica"
  },

   {
    id: 2,
    "img":"2.jpg",
    "nome":"Programador FullStack Senior",
    "descricao":"Desenvolvedor FullStack e gerenciamento de projetos",
    "salario":"23.058,00  + beneficios"
  },

   {
    id: 3, 
    "img":"3.jpg", 
    "nome":"Fullstack Pleno", 
    "descricao":"Desenvolvimento de aplicações",
    "salario":"14.258,00  + beneficios"
  },

   {
     id: 4,
    "img":"4.jpg", 
    "nome":"Fullstack Senior", 
    "descricao":"buscamos profissionais com amplo nivel de experiencia no mercado de desenvolvimento",
    "salario":"8.695,00  + beneficios"
  },

   {
     id: 5,
     "img":"5.jpg", 
     "nome":"Desenvolvedor Mobile",
     "descricao":"Não precisa mais ser um hobbie, venha desenvolver apps com nossa equipe",
     "salario":"2.113,00  + beneficios"
    },

   {
     id: 6,
    "img":"6.jpg",
    "nome":"Agente Financeiro",
    "descricao":"Esta oportunidade é perfeita para voce que é otimo com finanças e quer por todo seu conhecimento em lago maior do que contabilidade domestica",
    "salario":"1.821,00  + beneficios" 
    },

   {
     id: 7, 
     "img":"7.jpg", 
     "nome":"Recepcionista",
     "descricao":"Esta vaga é perfeita para pessoas atenciosas que gostam de estar aberto ao atendimento em publico",
     "salario":"1.256,00  + beneficios"
    },

   {
     id: 8, 
     "img":"8.jpg", 
     "nome":"Agente Telemarketing",
     "descricao":"Venha fazer parte da nossa luta de busca aos clientes para entregar o melhor projeto possivel no menor tempo",
     "salario":"1.496,00  + beneficios"
    },

  ]

  ngOnInit(): void {
  }

}
