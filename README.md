# Node App on Docker

## Set Up and Start Project

```docker
$ docker build . -t nodejs-on-docker
$ docker run -p 49160:8080 -d nodejs-on-docker
```

コンテナに入る

```
$ docker exec -it nodejs-on-docker /bin/bash
```

Test

```
$ docker ps
$ curl -i localhost:49160
```

## References

[Node.js WebアプリケーションをDocker化する | Node.js](https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/)

[Auth0 Blog | Dockerを使ってNode開発環境を作る](https://auth0.com/blog/jp-use-docker-to-create-a-node-development-environment/)