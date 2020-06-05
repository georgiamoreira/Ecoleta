import Knex from 'knex';

//criando a tabela no knex em sqlite:
export async function seed(knex: Knex) { // Knex com K maiusculo para sinalizar o tipo e assim ter acesso a todos os metodos do knex, isso eh typescript
 await knex('items').insert([
  { title: 'Lâmpadas', image: 'lampadas.svg' },
  { title: 'Pilhas e Baterias', image: 'baterias.svg' },
  { title: 'Papéis e Papelão', image: 'papeis-papelao.svg' },
  { title: 'Resíduos Eletrônicos', image: 'eletronicos.svg' },
  { title: 'Resíduos Orgânicos', image: 'organicos.svg' },
  { title: 'Óleo de Cozinha', image: 'oleo.svg' },
 ]);   
}

