# Node App on Docker

## Set Up

```docker
  docker build -t node-docker .
  docker run --rm -it --name node-docker \
    -v $PWD:/home/app -p 8080:3000 \
    node-docker
```

## Start Server
```sh
  docker exec -it $(docker ps -qf "name=node-docker") /bin/bash
  yarn
  yarn start 
```

## References
[Auth0 Blog | Dockerを使ってNode開発環境を作る](https://auth0.com/blog/jp-use-docker-to-create-a-node-development-environment/)