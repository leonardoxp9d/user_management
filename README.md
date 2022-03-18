![Logo of the project](http://logo_link)

## User Management

API to manage users, it is possible to create, edit, delete, and also view data of 1 or all registered users


## Technology 

Here are the technologies used in this project.

* Node v14.17.3
* Yarn 1.22.17
* Typescript 4.5.5
* Typeorm 0.2.45
* Docker 20.10.7 
* Docker-compose 1.28.5 
* Postgres 8.7.3


## Services Used

* Github
* VScode 1.63.2
* Insomnia 2021.4.1
* Beekeeper 3.1.0
* Eslint 8.8.0
* Prettier 2.5.1

## Getting started

* To install gems:
>    $ bundle install
* To create the bank and do as migrations:
>    $ rake db:create db:migrate db:seed
* To run the project:
>    $ rails s

## How to use

Here will be the images and descriptions. Principal content.


## Features

  - Here will be the features.


## Links

  - Link of deployed application: (if has been deployed)
  - Repository: https://link_of_repository
    - In case of sensitive bugs like security vulnerabilities, please contact
      YOUR EMAIL directly instead of using issue tracker. We value your effort
      to improve the security and privacy of this project!


## Versioning

1.0.0.0


## Authors

* **YOUR NAME**: @YOUR_GITHUB_NICKNAME (https://github.com/YOUR_GITHUB_NICKNAME)


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
*OBS.: <br>
Certifique-se de que a porta 3337 esteja libera para poder usar o server,
Se não você terá que trocar ela no arquivo src/shared/infra/http/server.ts,
e também no arquivo Dockerfile e no docker-compose.yml que ficam na raiz do projeto.
<br><br>
A porta 5232 também deve está liberada para poder utilizar o banco de dados postgres,
se não terá reconfigurar no arquivo docker-compose.yml e no ormconfig.json
Mas recomendamos que não troque a porta do banco de dados
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
