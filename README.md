![Logo of the project](http://logo_link)

# User Management

API to manage users, it is possible to create, edit, delete, and also view data of 1 or all registered users


## Technology 

Here are the technologies used in this project.

* Node v14.17.3
* Yarn 1.22.17
* Typescript 4.5.5
* Typeorm 0.2.45
* Docker 20.10.7 
* Docker-compose 1.28.5 
* PostgresSQL 8.7.3


## Services Used

* Github
* VScode 1.63.2
* Insomnia 2021.4.1
* Beekeeper 3.1.0
* Eslint 8.8.0
* Prettier 2.5.1

## Getting started
1. You must have Docker installed 

* To install dependencies:
>    $ yarn
* To create the bank and application server:
>    $ docker-compose up -d
* To create the migration:
>    $ yarn typeorm migration:run
* To view project logs:
>    $ docker logs user-management -f
* To see if the database and the server are running in docker:
>    $ docker ps

*OBS.: <br>
Make sure that port 3337 is free to use the server. 
<br>
if not you will have to change it in the src/shared/infra/http/server.ts file, and also in the Dockerfile and docker-compose.yml file that are at the root of the project. 
<br><br>
Port 5232 must also be open to be able to use the postgres database <br>
Otherwise you will have to reconfigure in the docker-compose.yml file and in the ormconfig.json <br>
But I recommend that you do not change the database port 

## How to use routes

### POST - Create User
User creation route. <br> 
when using the url: `http://localhost:3337/users` in the post route, <br>
sending data in json, by request.body: 
<br>
Example: <br>
~~~javascript
{
  "name": "Leonardo Soares",
  "username": "leonardo",
  "email": "leonardo@gmail.com",
  "password": "123456"	
}
~~~
If all goes well, it delivers as a response with the status code as: `201` <br>
and a message: `User created successfully!` <br>
I used the Insomnia tool to check:
<br>
![image](https://user-images.githubusercontent.com/54649877/158878290-809a65dd-6c32-4b77-b17c-8f601df04366.png)
<br><br>

I used the Beekeeper tool to better visualize and verify if the user was really registered: 
![image](https://user-images.githubusercontent.com/54649877/158878644-6a16ffa4-34bd-46b4-8c31-83db6f450d74.png)
<br><br>
*OBS.:<br>
If the username and email are already being used by another user, <br>
will display an error stating that it is already being used, and you must switch to complete the operation. 

### Get - Get User Profile
Route to get data from 1 user. <br>
When using the url : `http://localhost:3337/users` in the get route <br>
sending a request.query, informing the desired user's email. <br> 
If the user is registered, it will return as a response the data: name, username and email 
Example:
![image](https://user-images.githubusercontent.com/54649877/159034372-8a50cd1f-3fda-4109-b557-e0f5576151d9.png)
<br><br>
*OBS.:<br>
If the user is not registered in the database, an error message will be displayed: `User does not exists!`






### POST
Rota de criação do usuário, ao usar a url: http://localhost:3337/users na rota post,
enviando os dados em json
<br>
Exemplo: <br>
{ <br>
	"name": "nome", <br>
	"username": "apelido", <br>
	"email": "email", <br>
	"password": "senha"	<br>
}<br>
Se ocorrer tudo bem, ele entrega como resposta com o status code como 201
e uma messagem de Usuário criado com sucesso
<br>
![image](https://user-images.githubusercontent.com/54649877/158878290-809a65dd-6c32-4b77-b17c-8f601df04366.png)
<br><br>
Olhando banco de dados podemos ver que foi criado o usuário, no caso aqui usamos a ferramenta Beekeeper para visualizar melhor
![image](https://user-images.githubusercontent.com/54649877/158878644-6a16ffa4-34bd-46b4-8c31-83db6f450d74.png)
<br><br>
*OBS.:<br>
Se o username e o email, já estiverem sendo usados por outro usuário,
irá exibir um erro informando que já sendo utilizado, e você deverá trocar


## Features

  - CRUD users


## Versioning

1.0.0.0


## Authors

* **Leonardo Soares**: @leonardoxp9d (https://github.com/leonardoxp9d)


Please follow github and join us!
Thanks to visiting me and good coding!








# user_management
API para gerenciar usuários, nela e possível criar, editar, deletar, e também visualizar dados de 1 ou de todos os usuários cadastrados
<br><br>
*OBS.:
nas rotas de editar, visualizar dados 1 usuário, e deletar, para utilizar essas rotas 
e necessário saber o email do usuário, achamos mais fácil assim do que utilizar o id
do usuário

## Tecnologias Utilizadas
<li>VSCode</li>
<li>Typescript</li>
<li>Express</li>
<li>Typeorm</li>
<li>Postgress</li>
<li>Docker</li>

## Requisitos
<li>yarn 1.22.17 ou superior</li>
<li>node v14.17.3 ou superior</li>
<li>VScode 1.63.2 ou superior</li>
<li>docker 20.10.7 ou superior</li>
<li>docker-compose 1.28.5 ou superior</li>
<br>
*OBS.: Recomendamos essas versões para não haver conflito

## Instalação

1-Navegue até a pasta criada e abra no Visual Studio Code, execute o comando yarn no seu terminal 
para instalar todas as dependências.
<br>
2- Agora rode o comando: docker-compose up -d , para criar os containers da aplicação e do banco de dados
dentro do docker, 
<br>
3- Rode o comando: yarn typeorm migration:run <br>
para executar a migration e criar a tabela de Users no banco de dados
<br>
Agora e só utilizar as rotas, para conseguir visualizar e testar as rotas você utilizar ferramentas como o Insomnia ou escolher uma de sua preferencia
<br><br>

<br><br>
Como aplicação está sendo executada dentro do docker, para ver algum log dela,
use o comando: docker logs user-management -f

## Rotas
Para testar elas usamos o Insomnia.
<br>
### POST
Rota de criação do usuário, ao usar a url: http://localhost:3337/users na rota post,
enviando os dados em json
<br>
Exemplo: <br>
{ <br>
	"name": "nome", <br>
	"username": "apelido", <br>
	"email": "email", <br>
	"password": "senha"	<br>
}<br>
Se ocorrer tudo bem, ele entrega como resposta com o status code como 201
e uma messagem de Usuário criado com sucesso
<br>
![image](https://user-images.githubusercontent.com/54649877/158878290-809a65dd-6c32-4b77-b17c-8f601df04366.png)
<br><br>
Olhando banco de dados podemos ver que foi criado o usuário, no caso aqui usamos a ferramenta Beekeeper para visualizar melhor
![image](https://user-images.githubusercontent.com/54649877/158878644-6a16ffa4-34bd-46b4-8c31-83db6f450d74.png)
<br><br>
*OBS.:<br>
Se o username e o email, já estiverem sendo usados por outro usuário,
irá exibir um erro informando que já sendo utilizado, e você deverá trocar
