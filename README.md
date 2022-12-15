# intexsoft-backend #
Intexsoft practical task. Web API for working with images. 
Authentication in the application is carried out through a bearer token.
Database: postgresql.

# Requirements #
+ Node.js v16.18.0;
+ Npm v8.19.2;
+ Docker v20.10.17 and docker-compose v1.29.2
+ .env file in root project directory, which must contain port, secret key for tokens generatin, TTL for tokens and database url, like this:
    ```
    PORT = your_server_port
    JWT_ACCESS_SECRET = your_secret_for_access_token
    JWT_REFRESH_SECRET = your_secret_for_refresh_token

    DATABASE_URL="postgresql://__user__:__password__@localhost:5432/__db_name__?schema=public"

    ACCESS_TOKEN_TTL = your_ttl_time_for_acces_token
    REFRESH_TOKEN_TTL = your_ttl_time_for_refresh_token
    ```

# Project start instructions #
### Clone the project
    ```
    git clone --branch develop https://github.com/lKvasiKl/intexsoft-backend.git
    ```

### Create and launch docker container (you can set your own configuration in docker-compose.yaml file)
In the `docker-compose.yaml` location directory, run this comand:
    ```
    docker-compose up -d
    ```
    
### Apply migrations for database
In the `schema.prisma` location directory, run this comand:
    ```
    npx prisma migrate dev
    ```

### Run server
    ```
    npm start
    ```
