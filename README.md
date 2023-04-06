
<p>
  <h1 align="center">Microservice - Duff Challenge</h1>
</p>

## Descrição

Microserviço responsável pelos estilos de cervejas

## Tech and Tools

<p>
<a href="https://docs.nestjs.com/" target="_blank"><img src="https://img.shields.io/badge/Nest-ea2845?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" /></a>
<a href="https://nodejs.org/docs/latest-v15.x/api/" target="_blank"><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" /></a>
<a href="https://www.typescriptlang.org/docs/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
</p>

<p>
<a href="https://docs.docker.com/get-started/" target="_blank"><img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /></a>
<a href="https://eslint.org/docs/user-guide/getting-started" target="_blank"><img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLINT" /></a>
<a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier" /></a><br />
</p>

<p>
<a href="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgresql" /></a>
<a href="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" target="_blank"><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgresql" /></a>
<a href="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Github" /></a>
</p>

## Conteúdo

- [Descrição](#descrição)
- [Tech and Tools](#tech-and-tools)
- [Conteúdo](#conteúdo)
- [Instalação](#instalação)
- [Depois da instalação](#depois-da-instalação)
  - [Banco de Dados](#banco-de-dados)
- [Executando a aplicação no terminal](#executando-a-aplicação-no-terminal)
- [Testes](#testes)
- [Outros Scripts](#outros-scripts)
- [Suporte](#suporte)

## Instalação

```bash
$ npm install
```

## Depois da instalação


### Banco de Dados


<p>Crie a imagem dos containers com o comando a seguir.</p>

```bash

$ docker-compose up -d

```

## Executando a aplicação no terminal

```bash
# watch mode de desenvolvimento
$ npm run start:dev
```

Finalizando o processo da criação dos containers:

```bash
# crie o database e tabelas no container
$ npx prisma migrate dev

# Gere o Prisma Client com o seguinte comando
$ npx prisma generate
```

## Testes

```bash
# teste unitário
$ npm run test
```
## Outros Scripts

```bash
# inicia modo de desenvolvimento com debug
$ npm run start:debug

# tes com modo watch
$ npm run test:watch

# test com retorno no console
$ npm run test:cov

# teste com mensagem de debug no console
$ npm run test:debug

# modo para commitar sem a necessidade do git add .
$ npm run commit
```



## Suporte


-   Developer - [Mateus de Oliveira](mailto:mateus.oliveira.developer@gmail.com)

---

Feito com ♥ by Mateus de Oliveira :wave: