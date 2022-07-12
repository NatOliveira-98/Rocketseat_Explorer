const { Router } = require('express');

const NotesController = require('../controllers/NotesController');
const ensureAuthentication = require('../middleware/ensureAuthentication');

const notesRoutes = Router();
const notesController = new NotesController();

notesRoutes.use(ensureAuthentication);

notesRoutes.post('/', notesController.create);
notesRoutes.delete('/:id', notesController.delete);
notesRoutes.get('/', notesController.index);
notesRoutes.get('/:id', notesController.show);

module.exports = notesRoutes;
