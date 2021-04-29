# Node App on Docker

## Set Up and Start Project

```docker
$ docker-compose up -d
```

コンテナに入る

```
$ docker exec -it nodejs-on-docker /bin/bash
```

Test

```
$ docker-compose ps
$ curl -i localhost:8080
```

## References

[Node.js WebアプリケーションをDocker化する | Node.js](https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/)

[Auth0 Blog | Dockerを使ってNode開発環境を作る](https://auth0.com/blog/jp-use-docker-to-create-a-node-development-environment/)