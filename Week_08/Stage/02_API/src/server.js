require('express-async-errors');

const express = require('express');
const AppError = require('./utils/AppError');
// como não tem arquivo indicado, ele carrega o index.js por padrão
const routes = require('./routes');
const runMigrations = require('./database/sqlite/migrations');

runMigrations();

const app = express();
app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  // client error
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  console.error(error);

  // server error
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));