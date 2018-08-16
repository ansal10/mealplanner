
### Installation and setup

Dependencies
  - Postgres 9.6
  - Node 9.8

Database setup
  - create database ```meals```
  - create database ```meals```
  - create user with username ```meals```
  - assign password to user ```meals```
  - start postgres on default port ```5432```


Setup Database

```$xslt
$ create database meals;
$ create database meals_test;
$ create user meals;
$ ALTER USER meals WITH PASSWORD 'meals';
$ grant all privileges on database meals to meals;
$ grant all privileges on database meals_test to meals;

```
Install the Node
```sh
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
$ source ~/.bashrc
$ nvm install 9.8.0
$ npm i pm2 -g
```

Install and run the API module
```
$ cd project
$ npm i
$ npm run migrate
$ npm run seed-all
$ npm run server
$ npm run prod
$ npm run built-dev
$ npm run test
```


API Documentation:
```
localhost:3000/api-docs/
```


