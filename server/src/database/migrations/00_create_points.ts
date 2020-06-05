import Knex from 'knex';

//criando a tabela no knex em sqlite:
export async function up(knex: Knex) { // Knex com K maiusculo para sinalizar o tipo e assim ter acesso a todos os metodos do knex, isso eh typescript
 return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('latitude').notNullable();
    table.string('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable(); // 2 de soh vai ter 2 caracteres
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('point');  
}