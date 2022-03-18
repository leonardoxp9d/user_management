![Logo of the project](https://user-images.githubusercontent.com/54649877/159092862-8490a67a-624d-4b3d-8359-0df9f2e09e97.png)

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
### Prerequisites
You must have node, yarn and docker installed 

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
Port 5432 must be open to be able to use the postgres database

## How to use routes

### POST - Create User
User creation route. <br> 
When accessing the url: `http://localhost:3337/users` using http `post` method, <br>
sending data in json, by request.body: 

Example: <br>
I used the Insomnia tool to check:
![image](https://user-images.githubusercontent.com/54649877/158878290-809a65dd-6c32-4b77-b17c-8f601df04366.png)

I used the Beekeeper tool to better visualize and verify if the user was really registered: 
![image](https://user-images.githubusercontent.com/54649877/158878644-6a16ffa4-34bd-46b4-8c31-83db6f450d74.png)

*OBS.:<br>
If the username and email are already being used by another user, <br>
will display an error stating that it is already being used, and you must switch to complete the operation. 

&nbsp;
&nbsp;
### Get - Get User Profile
Route to get data from 1 user. <br>
When accessing the url: `http://localhost:3337/users` using http `get` method  <br>
sending a request.query, informing the desired user's email. <br> 
If the user is registered, it will return as a response the data: name, username and email 

Example: <br>
![image](https://user-images.githubusercontent.com/54649877/159034372-8a50cd1f-3fda-4109-b557-e0f5576151d9.png)

*OBS.:<br>
If the user is not registered in the database, an error message will be displayed.
![image](https://user-images.githubusercontent.com/54649877/159051283-39c89cb9-1b6e-42e4-8c6f-be891888deb3.png)

&nbsp;
&nbsp;
### Get - List Users
Route to list all registered users <br>
When accessing the url: `http://localhost:3337/users/listUsers` using http `get` method <br>
The route will deliver as a response the data of all users registered in the database.
![image](https://user-images.githubusercontent.com/54649877/159051963-af67655b-c0d8-4409-877a-ea93db7b71b9.png)

&nbsp;
&nbsp;
### PUT - Update User
Route to update user <br>
When accessing the url: `http://localhost:3337/users/"emailUser"` using http `put` method <br>
The email of the user you want to update must be sent in the route param <br>
And in the request body, you put the data you want to change, <br>
can be name, username, and email, it has to be in json format 

Example: <br>
![image](https://user-images.githubusercontent.com/54649877/159056644-fbbe1e12-dacd-49f8-90c1-ac35f32ed9ad.png)

*OBS.: <br>
It is possible to make only 1 change, if you want to change just the name, or username or email, and only send 1 of the values <br>
If the email sent on route param does not belong to any registered user in the database, it will display an error 
![image](https://user-images.githubusercontent.com/54649877/159059009-e40299e6-0457-4169-932c-ae4a7712901f.png)

&nbsp;
&nbsp;
### DELETE - Delete User
Route to delete user <br>
When accessing the url: `http://localhost:3337/users/"emailUser"` using http `put` method <br>
To delete the user, it is necessary to pass the desired user's email in the route param 

Example: <br>
![image](https://user-images.githubusercontent.com/54649877/159059744-6103301c-d8a0-4f20-97b6-4a3bd5055ad6.png)

*OBS.: <br>
If the user is not registered in the database, an error message will be displayed. 
![image](https://user-images.githubusercontent.com/54649877/159059911-06c46e3a-1d5f-49ef-a6c3-2da3fd3b94a3.png)


## Feature

* CRUD users


## Versioning

1.0.0.0


## Authors

* **Leonardo Soares**: @leonardoxp9d (https://github.com/leonardoxp9d)


Please follow github and join us!
Thanks to visiting me and good coding!
