# API Agendify

Uma API RESTful para gerenciar contatos e autenticação de usuários no Agendify.

## Endpoints do serviço

A seguir estão os endpoints disponíveis neste serviço:

POST /users: Criação de usuário.\
GET /users: Lista todos os usuários.\
GET /users/profile: Lista o usuário logado.\
PATCH /users/:id: Atualiza um usuário.\
DELETE /users/:id: Realiza um soft delete no usuário.\
POST /login: Gera o token de autenticação.\
POST /contacts: Cria um contato.\
GET /contacts: Lista todos os contatos criados pelo usuario logado.\
PATCH /contacts/:id: Atualiza um contato.\
DELETE /contacts/:id: Deleta um contato.
GET /address/:id: Lista o endereço do contato.\
GET /template/about:  Página com uma descrição detalhada sobre o que foi desenvolvido.\
GET /template/about-me: Página para descrever o desenvolvedor do projeto, onde é possível enviar um email ao mesmo.\
GET /template/technology: Página para listar as tecnologias e ferramentas que foram utilizadas.\
GET /template/:  Página inicial para o site com um breve resumo da proposta, possui o formulário de login e cadastro, ao efetuar o login é redirecionando para esta [aplicação](https://github.com/ViniciusOgawa/Agendify2.0).\
POST /address/sendEmail: Rota para envio de email.

## Como executar o Projeto

1. Para inciar este projeto, é necessário instalar as dependências, que serão utilizadas. Portanto utilize o comando abaixo para instalar tais dependências:

```bash
# caso use npm
npm install

# caso use yarn
yarn
```

2. Configure as variáveis de ambiente:

- Renomeie o arquivo .env.example para .env.
- Preencha as variáveis de ambiente no arquivo .env com as informações corretas.

3. Crie o banco de dados:

```bash
# caso use npm
npx sequelize db:create

# caso use yarn
yarn sequelize db:create
```

3. Execute as migrações do banco de dados:

```bash
# caso use npm
npx sequelize db:migrate

# caso use yarn
yarn sequelize db:migrate
```

4. Inicie o servidor:

```bash
# caso use npm
npm start

# caso use yarn
yarn start
```

5. O serviço estará disponível em http://localhost:3000.
