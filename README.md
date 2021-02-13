# typescript-express-template

A Microservice Template in NodeJS, TypeScript, and Express

Express + Routing-Controllers + TypeScript + TypeORM + TypeDI

---

## Installation

```shell
npm install
```

- Create `.env` file from `.env.example` and populate environment variables

---

## Running

```shell
# Build and Run
npm start

# Run on local machine with watcher
npm run start:dev
```

---

## Features

- [x] TypeScript
- [x] Depedency Injection of Services, Repositories, Controllers
- [x] Modular App.ts
- [x] Properly structured codebase models, repositories, services, controllers, migrations etc.
- [x] ORM Migrations used for maintaining database schemas
- [x] Follows pure REST APIs
- [x] Input validations
- [x] Use of `.env` file
- [x] Git pre-commit hooks setup
- [x] Linting and Standard Formatting
- [x] Added system metadata like createdAt, updatedAt
- [x] Use of DTOs
- [x] Added audit log like createdBy, updatedBy
- [x] isActive
- [x] uuid as primary key
- [x] Soft Delete Options
- [x] Pagination
- [ ] Structured Logging
- [ ] Unit Testing
- [ ] Authentication
- [ ] Authorization
- [ ] Error Handling and Generic Error Middleware
- [ ] Search Framework
- [ ] AbstractService or interface Service
- [ ] Graceful Shutdown
- [x] Containerized with Docker

---

## Libraries Used

- NodeJS with TypeScript
  - ts-node and ts-node-dev for running on local machine
- Express Framework
- TypeORM - ORM Tool to interact with Database
- TypeDI - Dependency Injection library (https://github.com/typestack/typedi)
- routing-controllers - For Defining Routes in elegent way (https://github.com/typestack/routing-controllers)
- class-validator - For input validations (https://github.com/typestack/class-validator)
- class-transformer - For transforming objects (https://github.com/typestack/class-transformer)
- dotenv - Use Environment Variables from .env file
- ESLint - For Linting the ES and TypeScript codebase
  - `ext install dbaeumer.vscode-eslint`
- Prettier - For Formatting Standard (https://eslint.org/docs/user-guide/getting-started)
  - `ext install esbenp.prettier-vscode`
- Husky - https://github.com/typicode/husky
- lint-staged - https://github.com/okonet/lint-staged

---

## Development

- Create an entity: `npm run typeorm -- entity:create -n User`
- Generate migration: `npm run typeorm -- migration:generate -n CreateUser`
- Run the migrations: `npm run typeorm -- migration:run`

Notes:

- Migration name pattern: Add<field>To<Entity>
  - AddLastNameToUser
  - UpdateEmailToEmployee

---

### Development Guidelines

- Make use of `index.ts` in folder which has multiple files

---

### Development Notes

```javascript

```
