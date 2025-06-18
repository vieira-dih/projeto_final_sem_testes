import { Router } from 'express';
import ListExampleController from '../app/Controllers/ModelExample/ListExampleController.js';
import CreateExampleController from '../app/Controllers/ModelExample/CreateExampleController.js';
import GetExampleController from '../app/Controllers/ModelExample/GetExampleController.js';
import UpdateExampleController from '../app/Controllers/ModelExample/UpdateExampleController.js';
import DeleteExampleController from '../app/Controllers/ModelExample/DeleteExampleController.js';

import ListResponsaveisController from '../app/Controllers/Responsaveis/ListResponsaveisController.js';
import CreateResponsaveisController from '../app/Controllers/Responsaveis/CreateResponsaveisController.js';
import UpdateResponsaveisController from '../app/Controllers/Responsaveis/UpdateResponsaveisController.js';
import DeleteResponsaveisController from '../app/Controllers/Responsaveis/DeleteResponsaveisController.js';

import ListTurmasController from '../app/Controllers/Turmas/ListTurmasController.js';
import CreateTurmasController from '../app/Controllers/Turmas/CreateTurmasController.js';
import UpdateTurmasController from '../app/Controllers/Turmas/UpdateTurmasController.js';
import DeleteTurmasController from '../app/Controllers/Turmas/DeleteTurmasController.js';

import ListAlunosController from '../app/Controllers/Alunos/ListAlunosController.js';
import CreateAlunosController from '../app/Controllers/Alunos/CreateAlunosController.js';
import UpdateAlunosController from '../app/Controllers/Alunos/UpdateAlunosController.js';
import DeleteAlunosController from '../app/Controllers/Alunos/DeleteAlunosController.js';

export default (function () {

    const router = Router();

    // router.metodo("/rota", (request, response) => {...})

    // GET Listar
    router.get('/api/example', ListExampleController);

    // GET Obter um
    router.get('/api/example/:id', GetExampleController);

    // POST Criar
    router.post('/api/example', CreateExampleController);

    // PUT Atualizar
    router.put('/api/example/:id', UpdateExampleController);

    // DELETE Atualizar
    router.delete('/api/example/:id', DeleteExampleController);

    // Rotas para responsaveis CRUD
    router.get('/api/responsaveis', ListResponsaveisController);
    // GET Obter um responsavel (optional, not implemented yet)
    // router.get('/api/responsaveis/:id', GetResponsaveisController);
    router.post('/api/responsaveis', CreateResponsaveisController);
    router.put('/api/responsaveis/:id', UpdateResponsaveisController);
    router.delete('/api/responsaveis/:id', DeleteResponsaveisController);

    // Rotas para turmas CRUD
    router.get('/api/turmas', ListTurmasController);
    // GET Obter uma turma (optional, not implemented yet)
    // router.get('/api/turmas/:id', GetTurmasController);
    router.post('/api/turmas', CreateTurmasController);
    router.put('/api/turmas/:id', UpdateTurmasController);
    router.delete('/api/turmas/:id', DeleteTurmasController);

    // Rotas para alunos CRUD
    router.get('/api/alunos', ListAlunosController);
    // GET Obter um aluno (optional, not implemented yet)
    // router.get('/api/alunos/:id', GetAlunosController);
    router.post('/api/alunos', CreateAlunosController);
    router.put('/api/alunos/:id', UpdateAlunosController);
    router.delete('/api/alunos/:id', DeleteAlunosController);

    return router;

})();
