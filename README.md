# user_management
API para gerenciar usuários, nela e possível criar, editar, visualizar dados de 1 ou de todos os usuários vários, e deletar,
<br><br>
*OBS.:
nas rotas de editar, visualizar dados 1 usuário, e deletar, para utilizar essas rotas 
e necessário saber o email do usuário, achamos mais fácil assim do que utilizar o id
do usuário

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
