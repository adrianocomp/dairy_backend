const { Router } = require('express');

const UserController = require('./controllers/UserController');
const DairyController = require('./controllers/DairyController');
const ProducerController = require('./controllers/ProducerController');
const TesteController = require('./controllers/TesteController');

const routes = Router();



routes.post('/users/create', UserController.store);
routes.get('/login', UserController.index);

routes.post('/dairys/create', DairyController.store);
routes.get('/dairys/index', DairyController.index);
routes.delete('/dairys/delete/:id', DairyController.delete);

routes.post('/producers/create', ProducerController.store);
routes.get('/producers/index', ProducerController.index);
routes.get('/producers/login', ProducerController.index_login_producer);
routes.delete('/producers/delete/:id', ProducerController.delete);



routes.post('/testes/create', TesteController.store);
routes.get('/testes/index', TesteController.index);
routes.delete('/testes/delete/:id', TesteController.delete);
routes.get('/testes/index_producer', TesteController.index_producer);
routes.post('/testes/update/:id', TesteController.update_teste);

module.exports = routes;