#  Projeto Final - CRUD API Escolar

Este projeto é uma **API RESTful** desenvolvida com **Node.js**, **Express** e **Sequelize**, conectada a um banco de dados **PostgreSQL**, que permite o gerenciamento de **responsáveis**, **turmas** e **alunos** de uma escola infantil.

---

##  Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express** – Framework para construção da API
- **Sequelize** – ORM para integração com banco PostgreSQL
- **PostgreSQL** – Banco de dados relacional
- **Docker & Docker Compose** – Para facilitar o ambiente de desenvolvimento

---

##  Pré-requisitos

###  Usando Docker (Recomendado)

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado e **em execução**
- Acesso à internet para baixar imagens do Docker

>  O Docker Desktop deve estar **aberto e rodando** antes de iniciar o projeto.

---

###  Rodando localmente (sem Docker)

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [PostgreSQL](https://www.postgresql.org/download/) instalado
- Um editor de código (VSCode recomendado)
- Terminal (CMD, PowerShell, Bash)

---

##  Estrutura do Projeto

```
projeto_final_sem_testes/
├── APP/                   # Código-fonte da aplicação
│   ├── app/              # Controllers, models, middlewares, etc.
│   └── config/           # Configurações do Sequelize e banco de dados
├── init.sql              # Script de criação das tabelas no PostgreSQL
├── Dockerfile            # Dockerfile da API
├── docker-compose.yml    # Orquestração Docker
├── .env                  # Variáveis de ambiente
└── README.md             # Documentação
```

---

##  Como Rodar Usando Docker

### 1 Instalar e abrir o Docker Desktop

- Baixe: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)
- Abra o Docker e **aguarde ele iniciar completamente**

### 2️ Clonar o repositório

```bash
git clone https://github.com/vieira-dih/projeto_final_sem_testes.git
```

```bash
cd projeto_final_sem_testes
```

### 3️ Verificar se as portas estão livres

- `3000`: porta da API
- `5432`: porta do PostgreSQL

### 4️ Subir os containers

```bash
docker-compose up --build
```

Isso fará:
- Subir o banco PostgreSQL
- Construir a imagem da API
- Executar o script `init.sql` para criar as tabelas

###  Acesse a API em:
**http://localhost/**

###  Para parar os containers:
```bash
docker-compose down
```

---

##  Como Rodar Localmente (sem Docker)

### 1️ Instalar dependências

```bash
npm install
```

### 2️ Configurar o banco de dados

- Crie um banco PostgreSQL (ex: `escola_db`)
- Edite os arquivos:

  - `APP/config/db.js`
  - `APP/config/sequelize.js`

```js
const db = new Sequelize('escola_db', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'postgres'
});
```

### 3️ Executar script SQL

Use pgAdmin ou terminal:

```bash
psql -U seu_usuario -d escola_db -f init.sql
```

### 4️ Iniciar a API

```bash
npm start
```

 Acesse em: **http://localhost/**

---

##  Endpoints da API

###  Responsáveis

- `GET /api/responsaveis`
- `POST /api/responsaveis`
- `PUT /api/responsaveis/:id`
- `DELETE /api/responsaveis/:id`

**Exemplo:**

```json
POST http://localhost/api/responsaveis
Content-Type: application/json

{
  "nome": "Maria Silva",
  "telefone": "11999999999",
  "email": "maria@email.com"
}
```

---

###  Turmas

- `GET /api/turmas`
- `POST /api/turmas`
- `PUT /api/turmas/:id`
- `DELETE /api/turmas/:id`

**Exemplo:**

```json
POST http://localhost/api/turmas
Content-Type: application/json

{
  "nome": "Turma B",
  "faixa_etaria": "5-6 anos"
}
```

---

###  Alunos

- `GET /api/alunos`
- `POST /api/alunos`
- `PUT /api/alunos/:id`
- `DELETE /api/alunos/:id`

**Exemplo:**

```json
POST http://localhost/api/alunos
Content-Type: application/json

{
  "nome": "Lucas Costa",
  "data_nascimento": "2014-06-01",
  "responsavel_id": 1,
  "turma_id": 2
}
```

---

##  Como Testar a API

Você pode testar com:

### Postman

1. Baixe: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
2. Crie uma nova requisição
3. Escolha o método (GET, POST, etc)
4. Use a URL: `http://localhost/...`
5. Vá na aba **Body** → marque **raw** e **JSON**
6. Adicione o JSON de exemplo e envie

**Cabeçalho obrigatório:**

```
Content-Type: application/json
```

---

### Insomnia

1. Baixe: [https://insomnia.rest/download](https://insomnia.rest/download)
2. Crie uma requisição e insira a URL
3. Escolha o método e o body (JSON)
4. Envie e veja a resposta

---

## ⚠️ Observações Importantes

- O Docker Desktop deve estar **aberto** ao usar Docker
- O banco de dados precisa estar ativo e com tabelas criadas (`init.sql`)
- As rotas seguem o padrão RESTful

---
