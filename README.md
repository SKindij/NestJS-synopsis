# NestJS-synopsis
_A progressive Node.js framework for building efficient, reliable and scalable server-side applications._

> 1. Please make sure that Node.js (version >= 16) is installed on your operating system.\
>     + ``node -v`` => 📘 v20.9.0
>     + ``npm -v`` => 📘 v10.7.0
> 2. Install Nest CLI:
>     + ``npm i -g @nestjs/cli``
>     + ``nest -v`` => 📘 v10.3.2
> 3. Create a new Nest project
>     + ``nest new project-name``
> 4. Starting application...
>     + ``nest start``
>       - http://localhost:3000

## 📚 Basic Information

* Documentation:
  + 🌐 https://docs.nestjs.com/
* TypeORM
  + 🌐 https://typeorm.io/
  + 🌐 https://github.com/typeorm/typeorm
* Real World
  + 🌐 https://realworld-docs.netlify.app/
  + 🌐 https://demo.realworld.io/#/

## 📚 Project Structure

```go
📁 project/
│
├─📁 src/
│  ├─ app.controller.spec.ts
│  ├─ app.controller.ts
│  ├─ app.module.ts
│  ├─ app.service.ts
│  ├─ main.ts

```

### 💢 Top-level files 💢
+ 📄 **app.controller.ts**
    - _it defines a basic controller for app_
    - _it is responsible for handling incoming requests and returning responses to client_
    - _here you define routes (HTTP endpoints) and their corresponding handler methods_
+ 📄 **app.controller.spec.ts**
    - _it contains unit tests for the controller_
    - _it helps catch bugs early in the development process_
    - _here you write tests to verify the behavior of your controller's methods_
+ 📄 **app.module.ts**
    - _it is the root module of the application_
    - _here you import and declare various components of your app_
+ 📄 **app.service.ts**
    - _it defines a basic service for your app_
    - _used to encapsulate business logic_
    - _here you define methods that perform specific tasks or operations_
    - _it can contain dependencies injected via the constructor_
+ 📄 **main.ts**
    - _it serves as the entry point for your NestJS app_
    - _it uses core function NestFactory to create a Nest app instance_
    - _here you white code to configure middleware, set up global prefixes, enable CORS_

### 💢 Top-level folders 💢





- - -

## npm "dependencies"

#### 🧩 "tsconfig-paths"
_Use this to load modules whose location is specified in the paths section of tsconfig.json or jsconfig.json. Both loading at run-time and via API are supported._

* npm-site: https://www.npmjs.com/package/tsconfig-paths
  - version: 4.2.0
  - install: `npm install --save-dev tsconfig-paths`
  - weekly downloads: 27 650 000
* home-page: github.com/dividab/tsconfig-paths

#### 🔍 "module-alias"
_Create aliases of directories and register custom module paths in NodeJS like a boss!_

* npm-site: https://www.npmjs.com/package/module-alias
  - version: 2.2.3
  - install: `npm i --save module-alias`
  - weekly downloads: 1 107 000
* home-page: github.com/ilearnio/module-alias

#### 🛠️ "nodemon"
_It is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected._

* npm-site: https://www.npmjs.com/package/nodemon
  - version: 3.1.0
  - install: `npm install --save-dev nodemon`
  - weekly downloads: 5 661 000
* home-page: https://nodemon.io







- - -

## npm "devDependencies"

#### 🧪 "" 🔬
_..._

* npm-site: 
  - version: 
  - install: ``
  - weekly downloads: 
* home-page: 


- - -

## Project modification

### in files

#### tsconfig.json

```json
  "paths": {
    "@app/": ["./src/*"]
  }

```

#### nodemon.json
```json
  {
    "watch": ["src"],
    "ext": "ts",
    "exec": "set IS_TS_NODE=true && ts-node -r tsconfig-paths/register src/main.ts"
  }
```

#### package.json
```json
  "scripts": {
    "start": "nodemon",
    "start:prod": "node dist/main",
  },
  "_moduleAliases": {
    "@app/": ["./dist"]
  }
```

#### src/main.ts
```typescript
  if (!process.env.IS_TS_NODE) {
    require('module-alias/register')
  }
```










