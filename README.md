# Contacts API

#### Api criada com o objetivo de comportar uma aplicação onde um usuário pode se registrar, e criar seus contatos, como se fosse uma agenda.

#

## Instalação

```
Primeiro passo: rodar o comando "yarn install", para realizar a instalação de todos os pacotes.

Segundo passo: renomear o arquivo .env.example para .env e então preencher com suas informações.

Terceiro passo: rodar o comando "yarn run typeorm migration:run -d ./src/data-source.ts" para criar as tabelas no banco de dados.

Quarto passo: rodar o comando "yarn run dev" para iniciar a api e poder acessar as rotas.
```

#

## Rotas



  
- ### **LOGIN**

  - **POST** - /login - Rota para logar na aplicação

  ```
  Não precisa de autenticação

  body => {   
      email: string,
      password: string,
    }

  response - 201 => {
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk2NzdmNTA5LTg3YjctNGJlYS04ZDdlLTJhZWNkNzA5ODI4ZiIsImlh
  dCI6MTY4MDc4MzQyOSwiZXhwIjoxNjgwODY5ODI5LCJzdWIiOiI5Njc3ZjUwOS04N2I3LTRiZWEtOGQ3ZS0yYWVjZDcwOTgyOGYifQ.BRHTORyzAieKt1TkriP406t2p2pr4kq0yKZ7OoRqURE",
    "user"{ 
      "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
      "name": "User",
      "email": "user@mail.com",
      "telephone": "99999999999",
      "createdAt": "2023-03-30T17:00:59.485Z"
      }
    }
  ```

- ### **Users**

  - **POST** - /users - Rota para criação de usuário

  ```
  Não precisa de autenticação

  body => {
      name: string
      email: string,
      password: string,
      telephone: string,
    }

  response - 201 => {
      "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
      "name": "User",
      "email": "user@mail.com",
      "telephone": "99999999999",
      "createdAt": "2023-03-30T17:00:59.485Z"
    }
  ```

  - **GET** - /users/profile - Rota para recuperar todos os dados do usuário logado.

  ```
  Precisa de autenticação

  body => Não possui body.

  response - 200 => {
      "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
      "name": "User",
      "email": "user@mail.com",
      "telephone": "99999999999",
      "createdAt": "2023-03-30T17:00:59.485Z"
        }
  ```

  - **GET** - /users - Rota para recuperar todos os usuários

  ```
  Precisa de autenticação

  body => Não possui body.

  response - 200 => [
        {
          "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
          "name": "User",
          "email": "user@mail.com",
          "telephone": "99999999999",
          "createdAt": "2023-03-23T02:26:44.915Z"
        },
        {
          "id": "46b094a9-9472-4f40-92c1-2c3dfbc5696c",
          "name": "User2",
          "email": "user2@mail.com",
          "telephone": "99999999999",
          "createdAt": "2023-03-23T02:26:44.915Z"
        },
        ...
    ]
  ```

  - **PATCH** - /users/userId - Rota para atualização de usuário

  ```
  Precisa de autenticação (Só o próprio usuário pode atualizar sua conta)

  body (Todos os campos são opcionais) => {
      name: string,
      email: string,
      password: string,
      telephone: string,
    }

  response - 201 => {
      "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
      "name": "Name",
      "email": "user@mail.com",
      "telephone": "99999999999",
      "createdAt": "2023-03-23T02:26:44.915Z"
    }
  ```

  - **DELETE** - /users/userId - Rota deletar um usuário

  ```
  Precisa de autenticação (Só o próprio usuário pode deletar sua conta)

  body => Não possui body.

  response - 204 => Não possui retorno
  ```
  
  

- ### **Contacts**

  - **POST** - /contacts - Rota para criação de contato

  ```
  Precisa de autenticação

  body => {
      name: string,
      email: string,
      telephone: string,
    }

  response - 201 => {
  	    "id": "3e9ed33b-f44d-4391-9c03-4b67160bff66",
  	    "name": "Contato",
  	    "email": "contato@mail.com",
  	    "telephone": "99999999999",
  	    "createdAt": "2023-03-23T12:47:35.305Z",
  	    "user": {
  		    "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
  		    "name": "User",
  		    "email": "user@mail.com",
  		    "telephone": "99999999999",
  		    "createdAt": "2023-03-23T02:26:44.915Z"
  	    }
    }
  ```

  - **GET** - /contacts - Rota para recuperar todos os contatos do usuário logado

  ```
  Precisa de autenticação

  body => Não possui body.

  response - 200 => [
       "id": "3e9ed33b-f44d-4391-9c03-4b67160bff66",
  	    "name": "Contato",
  	    "email": "contato@mail.com",
  	    "telephone": "99999999999",
  	    "createdAt": "2023-03-23T12:47:35.305Z",
  	    "user": {
  		    "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
  		    "name": "User",
  		    "email": "user@mail.com",
  		    "telephone": "99999999999",
  		    "createdAt": "2023-03-23T02:26:44.915Z"
  	    }, 
        "id": "3e9ed33b-f44d-4391-9c03-4b67160bff66",
  	    "name": "Contato2",
  	    "email": "contato2@mail.com",
  	    "telephone": "99999999999",
  	    "createdAt": "2023-03-23T12:47:35.305Z",
  	    "user": {
  		    "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
  		    "name": "User2",
  		    "email": "user2@mail.com",
  		    "telephone": "99999999999",
  		    "createdAt": "2023-03-23T02:26:44.915Z"
  	    }
        ...
    ]
  ```

  - **GET** - /contacts/users/contactId - Rota recuperar um contato pelo id

  ```
  Precisa de autenticação

  body => Não possui body.

  response - 200 => {
  	    "id": "3e9ed33b-f44d-4391-9c03-4b67160bff66",
  	    "name": "Contato",
  	    "email": "contato@mail.com",
  	    "telephone": "99999999999",
  	    "createdAt": "2023-03-23T12:47:35.305Z",
  	    "user": {
  		    "id": "d1f57dff-d579-474d-9bea-86e626fb66fc",
  		    "name": "User",
  		    "email": "user@mail.com",
  		    "telephone": "99999999999",
  		    "createdAt": "2023-03-23T02:26:44.915Z"
  	    }
  ```

  - **PATCH** - /contacts/contactId - Rota para atualização de contato

  ```
  Precisa de autenticação

  body (Todos os campos são opcionais) => {
      name: string,
      email: string,
      telephone: string,
    }

  response - 201 => {
        "id": "3e9ed33b-f44d-4391-9c03-4b67160bff66",
  	    "name": "Contato",
  	    "email": "contato@mail.com",
  	    "telephone": "99999999999",
  	    "createdAt": "2023-03-23T12:47:35.305Z",
    }
  ```

  - **DELETE** - /contacts/contactId - Rota deletar um contato

  ```
  Precisa de autenticação (Só o usuário dono do contato pode deletar)

  body => Não possui body.

  response - 204 => Não possui retorno
  ```
