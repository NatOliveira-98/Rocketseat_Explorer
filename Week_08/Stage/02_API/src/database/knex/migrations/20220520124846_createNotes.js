exports.up = knex =>
  knex.schema.createTable('notes', table => {
    table.increments('id'); // primary key
    table.text('title');
    table.text('description');
    table.integer('user_id').references('id').inTable('users'); // foreign key
    table.timestamp('created_at').default(knex.fn.now());
    table.timestamp('updated_at').default(knex.fn.now());
  });

exports.down = knex => knex.schema.dropTable('notes');

// cardinalidade, é a frequência com que uma table se relaciona com outra
