# Projeto Final - CRUD API Detalhado

Este projeto é uma API RESTful construída com Node.js, Express e Sequelize para gerenciar as tabelas `responsaveis`, `turmas` e `alunos` em um banco de dados PostgreSQL.

---

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Docker](https://docs.docker.com/get-docker/) e [Docker Compose](https://docs.docker.com/compose/install/)
- Node.js (versão recomendada 14 ou superior) e npm (opcional, para rodar localmente sem Docker)
- Acesso à internet para baixar as imagens Docker e dependências npm

---

## Estrutura do Projeto

- `init.sql`: Script SQL para criação das tabelas no banco de dados.
- `docker-compose.yml`: Configuração dos containers Docker para a API e banco de dados.
- `Dockerfile`: Configuração para construir a imagem da API Node.js.
- `APP/`: Código fonte da aplicação Node.js, incluindo modelos, controladores e rotas.
- `README.md`: Documentação do projeto.

---

## Como subir o projeto usando Docker

### Passo 1: Clonar o repositório

```bash
git clone <url-do-repositorio>
cd projeto_final_sem_testes
```

### Passo 2: Verificar portas

Certifique-se que as portas abaixo estejam livres no seu sistema:

- **3000**: Porta onde a API estará disponível
- **5432**: Porta padrão do PostgreSQL

### Passo 3: Subir os containers

Execute o comando abaixo para construir e iniciar os containers:

```bash
docker-compose up --build
```

Este comando fará o seguinte:

- Construirá a imagem da API Node.js
- Iniciará o container do banco de dados PostgreSQL
- Executará o script `init.sql` para criar as tabelas necessárias no banco

### Passo 4: Acessar a API

Após os containers estarem rodando, a API estará disponível em:

```
http://localhost/
```

---

## Como rodar localmente sem Docker

Caso prefira rodar localmente sem Docker, siga os passos abaixo:

### Passo 1: Instalar dependências

```bash
npm install
```

### Passo 2: Configurar banco de dados

- Instale e configure o PostgreSQL localmente.
- Crie um banco de dados para o projeto.
- Ajuste as configurações de conexão nos arquivos:
  - `APP/config/db.js`
  - `APP/config/sequelize.js`

### Passo 3: Criar tabelas

Execute o script SQL `init.sql` no banco de dados para criar as tabelas.

### Passo 4: Iniciar a aplicação

```bash
npm start
```

A API estará disponível em:

```
http://localhost/
```

---

## Endpoints da API

### Responsáveis

- `GET /api/responsaveis` - Lista todos os responsáveis
- `POST /api/responsaveis` - Cria um novo responsável
  - Body JSON: `{ "nome": "Nome", "telefone": "Telefone", "email": "Email" }`
- `PUT /api/responsaveis/:id` - Atualiza um responsável existente
  - Body JSON: Campos a atualizar
- `DELETE /api/responsaveis/:id` - Remove um responsável

### Turmas

- `GET /api/turmas` - Lista todas as turmas
- `POST /api/turmas` - Cria uma nova turma
  - Body JSON: `{ "nome": "Nome", "faixa_etaria": "Faixa Etária" }`
- `PUT /api/turmas/:id` - Atualiza uma turma existente
  - Body JSON: Campos a atualizar
- `DELETE /api/turmas/:id` - Remove uma turma

### Alunos

- `GET /api/alunos` - Lista todos os alunos
- `POST /api/alunos` - Cria um novo aluno
  - Body JSON: `{ "nome": "Nome", "data_nascimento": "YYYY-MM-DD", "responsavel_id": 1, "turma_id": 1 }`
- `PUT /api/alunos/:id` - Atualiza um aluno existente
  - Body JSON: Campos a atualizar
- `DELETE /api/alunos/:id` - Remove um aluno

---

## Testando a API

Você pode testar os endpoints usando ferramentas como:

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)

Exemplo de requisição para criar um aluno:

```json
POST http://localhost/api/alunos
Content-Type: application/json

{
  "nome": "João Silva",
  "data_nascimento": "2010-05-15",
  "responsavel_id": 1,
  "turma_id": 2
}
```

---

## Observações importantes

- Certifique-se que o banco de dados esteja rodando e acessível antes de iniciar a API.
- O script `init.sql` deve ser executado para garantir que as tabelas estejam criadas.
- As rotas seguem o padrão RESTful para facilitar a integração com frontends ou outras aplicações.


