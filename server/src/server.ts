import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// a cada requsição faz a conversão do body em um objeto Json
app.use(express.json());

// GET: Buscar ou listar informações
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso atualizar ou deletar Ex '/users/:id' pra recuperar - request.params
// Query Params: E usado para paginação, filtros, ordenação.... Ex /users?pages=2&sort=name pra recuperar- request.query
app.use(cors());
app.use(routes);


app.listen(3333);