import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';


const routes = express.Router();
const classesController = new ClassesController();
const connectionController = new ConnectionController();
// a cada requsição faz a conversão do body em um objeto Json
// app.use(express.json());
// GET: Buscar ou listar informações
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso atualizar ou deletar Ex '/users/:id' pra recuperar - request.params
// Query Params: E usado para paginação, filtros, ordenação.... Ex /users?pages=2&sort=name pra recuperar- request.query

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

export default routes;