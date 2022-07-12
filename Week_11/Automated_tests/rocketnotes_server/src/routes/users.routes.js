const { Router } = require('express');
const multer = require('multer');

const uploadConfig = require('../configs/upload');
const UsersController = require('../controllers/UsersController');
const UserAvatarController = require('../controllers/UserAvatarController');
const ensureAuthentication = require('../middleware/ensureAuthentication');

const usersRoutes = Router();
const usersController = new UsersController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.MULTER);

usersRoutes.post('/', usersController.create);
usersRoutes.put('/', ensureAuthentication, usersController.update);
usersRoutes.patch(
  '/avatar',
  ensureAuthentication,
  upload.single('avatar'),
  userAvatarController.update,
);

module.exports = usersRoutes;
