const { Router } = require('express');
const UsersController = require('../controllers/UsersController');

const userRoutes = Router();
const usersController = new UsersController();

// function myMiddleware(request, response, next) {
//   console.log('You passed through the middleware function');

//   if (!request.body.isAdmin) {
//     return response.json({ message: 'user not authorized' });
//   }

//   // the destination
//   next();
// }

// userRoutes.post('/', myMiddleware, usersController.create);
userRoutes.post('/', usersController.create);
userRoutes.put('/:id', usersController.update);

module.exports = userRoutes;
