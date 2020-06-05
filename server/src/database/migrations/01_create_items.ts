import Knex from 'knex';

//criando a tabela no knex em sqlite:
export async function up(knex: Knex) { // Knex com K maiusculo para sinalizar o tipo e assim ter acesso a todos os metodos do knex, isso eh typescript
 return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
   });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items');  
}