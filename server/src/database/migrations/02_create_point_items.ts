import Knex from 'knex';

//criando a tabela no knex em sqlite:
export async function up(knex: Knex) { // Knex com K maiusculo para sinalizar o tipo e assim ter acesso a todos os metodos do knex, isso eh typescript
 return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();

    table.integer('point_id').notNullable().references('id').inTable('points');
    table.integer('item_id').notNullable().references('id').inTable('items');
   });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('point_items');  
}