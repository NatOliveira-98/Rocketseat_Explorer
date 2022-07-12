const { hash, compare } = require('bcryptjs');

const AppError = require('../utils/AppError');
const UserRepository = require('../repositories/UserRepository');
const CreateUserService = require('../services/CreateUserService');
const sqliteConnection = require('../database/sqlite');

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const userRepository = new UserRepository();
    const createUserService = new CreateUserService(userRepository);

    await createUserService.execute({ name, email, password });

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const user_id = request.user.id;

    const database = await sqliteConnection();

    const user = await database.get('SELECT * FROM users WHERE id = (?)', [
      user_id,
    ]);
    if (!user) {
      throw new AppError('Usuário não encontrado');
    }

    const userWithUpdatedEmail = await database.get(
      'SELECT * FROM users WHERE email = (?)',
      [email],
    );
    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError('Este email já está em uso');
    }

    // nullish operator
    // if name is true use it, if not use user.name
    user.name = name ?? user.name;
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError(
        'Por favor, informe a senha antiga para poder definir uma nova.',
      );
    }
    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password);
      if (!checkOldPassword) {
        throw new AppError('A senha antiga não confere');
      }

      user.password = await hash(password, 8);
    }

    await database.run(
      `UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, user_id],
    );

    return response.status(200).json();
  }
}

module.exports = UsersController;

//
// an controller can have up to 5 methods

/*
  - index: GET para listar vários usuários;
  - show: GET para exibir um registro específico;
  - create: POST para criar um registro;
  - update: PUT para atualizar um registro;
  - delete: DELETE para remover um registro;
*/

// class UsersController {
//   create(request, response) {
//     const { name, email, password } = request.body;

//     if (!name) {
//       throw new AppError('Nome é obrigatório!');
//     }

//     // .json() é o mais utilizado para response de API's
//     response.status(201).json({ name, email, password });
//   }
// }
