# TodoList

## Repositório principal do projeto **TODOLIST-PROJ**

### Preparação do ambiente de trabalho

- [x] 1. Preparar ambiente do projeto **NODE**
- [x] 2. Iniciar projeto NODE
- [x] 3. Criar arquivo .GITIGNORE
- [x] 4. Instalar o EXPRESS
- [x] 5. Criar/Editar SERVER.JS
- [x] 6. Instalar o Nodemon
- [x] 7. Configurando o Nodemon
- [x] 8. Inicializando o nodemon
- [x] 9. Melhorando o server.js
- [x] 10. Usar o bodyParser
- [x] 11. Rotas com Express
- [x] 12. Informando o caminho da aplicação
- [x] 13. Editando Rota e chamando o controller
- [x] 14. Editando Controller
- [x] 15. SqlLITE BANCO DE DADOS
- [x] 16. Sequelize
- [x] 17. Sequelize CLI
- [x] 18. .sequelizerc
- [x] 19. Iniciar o sequelize
- [x] 20. Conexão com Banco SQLite
- [x] 21. Modelo associativo da TABELA no Sequelize
- [x] 22. Migrando Tabela modelo para o banco
- [x] 23. Criando migração
- [x] 24. Alterando o arquivo migration
- [x] 25. 25. Enviando para o banco físico
- [x] 26. Nova Tabela **Lista** no Sequelize
- [x] 27.
- [0] item incompleto.

    ---

1. Preparar o ambiente do projeto **NODE**
    1. Você deve instalar  o editor, o git, configurar uma conta no github para poder executar os demais passos do seu projeto.
    2. Após concluir todos os pre-requisitos acima continue

    ---

2. Iniciar projeto **NODE**

    :left_speech_bubble: _No shell, utilizar o **NPM** (O Gerenciador de pacotes do node) com o comando acima, ele se encarrega de inicializar um projeto novo em node. o **-y**  faz ele ignorar uma série de perguntas para começar o projeto. Será tudo automático!_

    ~~~cmder
    npm init -y
    ~~~

    > :vertical_traffic_light: Como saída teremos o arquvo package.json com as configurações básicas criadas.
    >Todo pacote instalado no node será registrado no arquivo package.json.

    ---

3. Criar arquivo .GITIGNORE

    :left_speech_bubble: *.gitignore* - informa ao git para não commitar os caminhos, arquivos e outras informações que forem representados dentro do arquivo.

    ~~~Javascript
        node_modules/
    ~~~

    > :vertical_traffic_light: Em seu editor de texto criar o arquivo .gitignore e dentro dele inserir a linha _node_modules/_
    >Como saída teremos o arquvo .gitignore com suas configurações básicas.

    ---

4. Instalar o EXPRESS

    :left_speech_bubble: _o módulo Express – o mais usado e mais bem conhecido framework web node.js_

    ~~~Shell

        npm i -S express
    ~~~

    > :vertical_traffic_light: No shell devemos digitar a linha acima :point_up: para instalação. Como saída teremos uma pasta **/node_modules** contendo o pacote instalado e todos as demais dependências. Também o arquivo _package-lock.json_ e o _server.js_.

    :exclamation: O Registro abaixo :point_down: foi criado dentro do arquivo **package.json** automaticamente.

    ~~~JavaScript
        "dependencies": {
          "express": "^4.17.1"
        },
    ~~~

    > :vertical_traffic_light: Caso você queira reinstalar os pacotes do node por algum motivo ou iniciar um projeto novo. Ele informará quais módulos deverão ser instalados. Basta executar o comando abaixo :point_down:  na sua linha de comandos.

    ~~~Shell
        npm install
    ~~~

    :exclamation: Os módulos são bibliotecas JavaScript que você pode incluir no seu projeto.  Sempre que você instalar um módulo do npm, ele será instalado na pasta **node_modules/**

    ---

5. Criar/Editar SERVER.JS

    :left_speech_bubble: _O arquivo **server.js** contém os scripts para execução do servidor de aplicação no node.

    ~~~JavaScript
        const express = require('express')
        const app = express()
        app.listen(3001)
        console.log("servidor funcionando")
    ~~~

    > :vertical_traffic_light: em seu editor de texto, criar ou editar o arquivo server.js e inserir o código acima. Vamos declarar duas constantes. A primeira importa o express e a segunda recebe o objeto **express()**. na instância criada **app**, vamos passar a porta **3001**, através do método **listen()** e para facilictar a visualização do que está acontecendo vamos gerar uma mensagem de que está "tudo bem" através do **console.log**.

    ---

6. Instalar o Nodemon

    :left_speech_bubble: _esse módulo é o utilitário que irá monitorar todas as alterações nos arquivos de nossa aplicação e reiniciar automaticamente o servidor quando for necessário._

    ~~~Shell
        npm i -D nodemon
    ~~~

    > :vertical_traffic_light: a cada alteração que fazemos em um arquivo, precisamos reiniciar a aplicação com o comando node script ou script.js. O **-D** serve para informar que queremos sua execução apenas em modo desenvolvimento. Para rodar nossos scripts no shell basta digitar _nodemon script.js_.

    :exclamation: O Registro de dependência abaixo :point_down: foi criado dentro do arquivo do seu projeto **package.json** no momento da instalação do nodemon.

    ~~~JavaScript
        "devDependencies": {
        "nodemon": "^2.0.4"
        }
    ~~~

    ---

7. Configurando o Nodemon

    :left_speech_bubble: _Assim que iniciamos o NPM será lido o arquivo **package.json** ele contém vários blocos para serem carregados junto com o node._

    ~~~Shell

    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "nodemon server.js"
    },
    ~~~

    > :vertical_traffic_light: O que iremos fazer é inserir dentro do bloco "scripts" uma álias **start** que ao ser chamada no shell junto com o comando node irá executar o sua declaração: _"start"_: **"nodemon server.js"**.

    :exclamation: O script **"start": "nodemon server.js"** foi criado dentro do bloco **"script"** no arquivo **package.json**.

    ---

8. Inicializando o nodemon

    :left_speech_bubble: _Como NPM támbem é responsável pela gerencia de dependências do projeto vamos chamá-lo para executar o script "start"._

    ~~~Shell
        npm start
    ~~~

    > :vertical_traffic_light: No prompt de comandos vamos digitar **npm start** o nodemon irá executar o server.js e ficará monitorando qualquer alteração no projeto a fim de reiniciá-lo automaticamente.

    ---

9. Melhorando o server.js

    :left_speech_bubble: _Agora com o nodemon de olho em tudo, vamos melhorar nosso server.js alterando duas linhas._

    ~~~Javascript

        const port = process.env.PORT || 3000;

        app.listen(port);

        console.log('servidor funcionando, na porta:', port);
    ~~~

    > :vertical_traffic_light: em seu editor de texto, vamos alterar o arquivo **server.js** e modificar as constantes e a linha console.log com o código acima :point_up:.

    ---

10. Usar o bodyParser

    :left_speech_bubble: _O body-parser é um módulo disponibilizado no Framework Express capaz de converter o body da requisição para vários formatos e justamente por isso vamos incrementar o server.js_

    ~~~Javascript
        const express = require("express");
        const app = express();
        const port = process.env.PORT || 3000;
        const routes = require("./src/api/routes/usuarioRoutes.js")
    ...
    // inserindo aqui o body-parse:
        const bodyParser = require("body-parser");
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
    ...
        app.listen(port);

    ~~~

    > :vertical_traffic_light: em seu editor de texto, vamos alterar o arquivo **server.js** vamos usar o BodyParser após a requisição: **express** , através do express com o seu módulo **app.use()** que iremos receber os recursos do bodyParser.

    :exclamation: certifique-se de que instalou o módulo npm denominado 'body-parser' chamando:

    ~~~Javascript
    npm install body-parser --save
    ~~~

    ---

11. Rotas com Express

    :left_speech_bubble: _Inserir a primeira rota básica apenas para informar que a rota está funcionando_

    ~~~Javascript
        app.route('/').get((req, res)=>{res.send('API todoList - Certo no método GET')});
    ~~~

    > :vertical_traffic_light: em seu editor de texto, vamos alterar o arquivo **server.js** vamos inserir o **app.route()**, abaixo das requisições: . Teremos nossa primeira rota que é do tipo **“get”**. Ela é composta de dois parâmetros, o primeiro é o endereço da nossa rota, no caso a raiz da aplicação **.route("/)**, já o segundo é uma função de retorno, que recebe também dois parâmetros o **“req”** (requisição) e o **“res”** (resposta), nessa função retornamos uma simples mensagem com o método **“send”** do Express.

    :exclamation: certifique-se de inserir route após as requisições anteriores: **express** e  **body-parser**

    ---

12. Informando o caminho da aplicação

    :left_speech_bubble: _Criar pastas principal da aplicação (api), as subpastas (controllers models routes) e os dois arquivos_

    ~~~shell

        mkdir api

        cd api

        mkdir controllers models routes

    ~~~

    > :vertical_traffic_light: **api**: Esta pasta contém toda a parte lógica e estrutural de nossa aplicação, é nela que definimos nossos _controllers, models, routes, enums, util, helpers_.
    > **api/controllers**: Responsável por armazenar todos os controllers de nossa aplicação, centralizados em um único lugar. Geralmente é onde encontramos algumas das regras de negócio. **api/models**: Responsável por armazenar todos as models da nossa aplicação, que neste projeto serão as classes de instâncias do ORM SEQUELIZE.

    ---

13. Editando Rota e chamando o controller

    :left_speech_bubble: _No arquivo usuarioRoutes.js vamos apontar para o controller Usuário_

    ~~~Javascript
        module.exports = function(app){
            const usuarioR = require("../controllers/usuariosController.js")
            app.route("/usuarios")
            .get(usuarioR.listartodos)
            .post(usuarioR.criaregistro)
        }
    ~~~

    > :vertical_traffic_light: Em seu editor de texto, vamos criar o arquivo **usuarioRoutes.js** em **./src/api/routes** internamente usar o **modulo.exports** para disponibilizar a função para outros arquivos. Instanciar o objeto  **usuarioR** chamadno o arquivo (**usuariosController.js**)) em **../controllers/** passando os médotos **get**(_listartodos_) e **post**(_criarregistro_).

    ---

    > Após criar o arquivo _usuarioRoutes.js_, retornar ao **server.js** e inserir a chamada para a função **app** logo abaixo das instância **app.** conforme script abaixo :point_down:

    ~~~Javascript
        routes(app);
    ~~~

    :exclamation: Observe que instanciamos o objeto usuarios apontando para um arquivo que ainda não existe "_../controllers/usuariosController.js_", é o que vamos fazer logo abaixo.

    ---
14. Editando Controller

    :left_speech_bubble: _No arquivo usuariosController.js vamos criar duas funções: a primeira listas os registros e a segundo criar registros_

    ~~~javascript
    const UsuarioC = require("../models").Usuarios

        exports.listartodos = (req, res) =>{
          UsuarioC.findAll().then(usuariosC=>{
                res.send(usuariosC);  
          }).catch(error=>{ })

        }

        exports.criaregistro = (req, res) =>{
          console.log(UsuarioC)
          const {nome,email} = req.body
          UsuarioC.create({nome,email}).then(UsuarioC=>{
                res.send(UsuarioC)
          }).catch(error=>{res.send(error)})

        }
    ~~~

15. SqlLITE BANCO DE DADOS

    :left_speech_bubble: _Como estamos em fase de modelagem vamos trabalhar inicialmente com SQLite._

    SQLite

    ~~~Shell

       npm i -S sqlite3
    ~~~

     ou Postgres

    ~~~Shell

    npm i -S pg pg-hstore
    ~~~

     ou SQL Server

    ~~~Shell

    npm i -S tedious
    ~~~

    ---

16. Sequelize

    :left_speech_bubble: _é um ORM (Object-Relational Mapper) para Node.js. Eles faz o mapeamento de dados relacionais (armazenados tabelas, linhas e colunas) para objetos em JS. Ele permite criar, buscar, alterar e remover dados do banco usando objetos e métodos em JS, além de fazer alterações na estrutura das tabelas. Ele suporta os bancos PostgreSQL, MySQL, MSSQL e SQLite. Esse tipo de esquema sempre teremos um arquivo de configuração, responsável por fornecer os dados para que o componente de ORM possa se comunicar com o banco e aplicação._

    ~~~Shell

       npm i -S sequelize
    ~~~

    > :vertical_traffic_light:  SEQUELIZE é um **ORM**_(Mapeamento Objeto Relacional)_, sua base consiste em manter o uso de orientação a objetos  e um pouco do conceito de  non-query. Pois serão raros os momentos onde teremos que escrever uma linha de código SQL. Operam como um agente de banco de dados, sendo possível através de pouquíssimas mudanças, utilizar o mesmo código para mais de um banco de dados. Não importa se ele está em PostgreSQL, SqlServer ou até mesmo SQlite! você só precisa mudar o driver de conexão e está pronto para uso.

    :exclamation: Referências: [Introdução ao Sequelize](https://ezdevs.com.br/introducao-a-orm-no-node-js-com-sequelize/),
    [node, express, postres usando Sequelize](https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize).

    ---

17. Sequelize CLI

    :left_speech_bubble: _o Sequelize-CLI será utilizado apenas no ambiente de desenvolvimento._

    ~~~Shell

       npm i -D sequelize-cli
    ~~~

    > :vertical_traffic_light:  No shel utilizando o gerenciador de pacotes NPM, vamos instalar o SEQUELIZE-CLI com a flag -D para ser utilizado apenas no ambiente de desenvolvimento.

    :exclamation: Lembramos que tanto o sequelize como sequelize-cli foram inseridos dentro do arquivo package.json em duas áreas diferentes **"sequelize" ==> "dependencies"** e o **"sequelize-cli" ==> "devDependencies"**.

    ---

18. .sequelizerc

    :left_speech_bubble: _personalizar o Sequelize em nosso projeto._

    ~~~Javascript

        const path = require('path');

        module.exports = {
            "config": path.resolve('./src/database/config', 'config.json'),
            "models-path": path.resolve('./src/api/models'), // respeitar MVC
            "seeders-path": path.resolve('./src/database/seeders'),
            "migrations-path": path.resolve('./src/database/migrations')
        };
    ~~~

    > :vertical_traffic_light:  Para configurar o sequelize, crie um arquivo na raiz do seu projeto, com o nome **.sequelizerc**. Em seu editor de texto, inserir algumas configurações de caminho das pastas do nosso projeto. Seu arquivo .sequelizerc deverá conter o seguinte conteúdo acima :point_up:.
    ---
    > O **config.json** ==> contém configuração de autenticação do banco de dados. **migrations** ==> A pasta conterá as migrações de nosso aplicativo. **models** ==> os modelos de aplicativos _(Na arquitetura MVC, o model é a representação da tabela do banco de dados)_. **seeders* ==> Os dados de semente _(são dados iniciais fornecidos com um sistema para fins de teste, treinamento ou modelagem)_.

    :exclamation: Referências: Respeitando o padrão MVC o "models" ficará na pasta **/api**. Nesta pasta será criado automaticamente um arquivo chamado **index.js**, nele consta script que verifica todos arquivos inseridos na pasta **models** e gera exportação para ser utilizado por outros arquivos. Para as demais pastas, irei colocar o _config, seeders e migrations_ na pasta **/database**.

    ---

19. Iniciar o sequelize

    :left_speech_bubble: _Iniciar o Sequelize com o npx._

    ~~~Shell

       npx sequelize init
    ~~~

    > :vertical_traffic_light:  No shel utilizando o inicializador de pacotes NPX iremos iniciarlizar o sequelize

    :exclamation: O **"npx"** é o comando que inicializa sem obrigação de instalar pacotes.

    ---

20. Conexão com Banco SQLite

    :left_speech_bubble: _Configurando a conexão com o banco no ./src/database/config/**config.json**. As configurações abaixo são criadas por padrão_

    ~~~json

       {
        "development": {
            "username": "root",
            "password": null,
            "database": "database_development",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "test": {
            "username": "root",
            "password": null,
            "database": "database_test",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": null,
            "database": "database_production",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
       }
    ~~~

    > :vertical_traffic_light:  Iremos trabalhar com SQLlite e por iremos modificar o arquivo acima :point_up: pelo modelo

    :exclamation: O arquivo config está em formato **"json"**.

    ~~~json
    {
        "development": {
            "storage": "./src/database/database.sqlite3",
            "dialect": "sqlite"
        },
        "test": {
            "storage": "./src/database/database.sqlite3",
            "dialect": "sqlite"
        },
        "production": {
            "storage": "./src/database/database.sqlite3",
            "dialect": "sqlite"
        }
      }
    ~~~

    ---

21. Modelo associativo da TABELA no Sequelize

    :left_speech_bubble: _Criando um modelo associativo de uma tabela **Usuario** no no Sequelize. para ser posteriormente migrado para o banco de dados_

    ~~~Shell

       npx sequelize model:generate --name Usuarios --attributes nome:string,email:string
    ~~~

    >:vertical_traffic_light:  O comando acima :point_up: vai gerar 2 arquivos: o_model ==> **./src/api/models/usuarios.js** migration ==> **.//src/database/migrations/"timestamp"-create-usuarios.js"**_.

    ...
    > o Arquivo usuarios.js - é o modelo associativo do sequelize para com o banco. </br>
    > O Arquivo "timestamp"-create-usuario.js internamente possui dois atributos a mais inseridos pelo próprio sequelize que é **(createdAt / updatedAt)** garantindo informaçoes sobre criação e atualização de cada registro na tabela.

    :exclamation: **.//src/database/migrations/"timestamp"-create-usuario.js"** não deve ser alterado. Nele consta detalhes da operação realizada, se foi operação de criação e seu timestamp.
    **timestamp**: representa um ponto específico na linha do tempo e leva em consideração o fuso horário em questão (UTC). Com isto, teremos sempre o detalhamento perante a linha do tempo real.
    ...
    :exclamation: "POR PADRÃO" o SEQUELIZE cria o nome da tabela no plural. Quando executei o comando **(...model:generate --name usuario ...)** foi criado o arquivo em _.//src/database/migrations/"timestamp"-create-usuario.js_ nele constava "**queryInterface.createTable('Usuarios')**, { "**U**suário**s**" - a primeira letra em maiúscula e o acrescimo do 's' no final }.

    ---
22. Migrando Tabela modelo para o banco

    :left_speech_bubble: _Criando uma tabela **Usuario** no banco **database.sqlite3** pelo shel utilizando o Sequelize-cli._

    ~~~Shell

       npx sequelize db:migrate
    ~~~

    > :vertical_traffic_light: O arquivo "**src\database\config\config.json**", foi acionado e estabelecida a conexão e na sequência o arquivo de banco de dados "**./src/database/database.sqlite3**" foi alterado com a inclusão da tabela usuario.

    ---

23. Alterar Tabela

    :left_speech_bubble: _migrations foram criadas para ser um controle de versionamento de um estado para outro dos bancos de dados._

    ~~~Shell

       npx sequelize migration:create --name usuario-add-senha
    ~~~

    > :vertical_traffic_light: Vamos para o shell e digitar a linha acima :point_up:. Será gerado o arquivo **src/database/migrations/timestamp-usuario-add-senha.js**.

    :exclamation: Neste arquivo modelo iremos fazer algumas alterações antes de gravarmos no banco de dados.

    ---

24. Fazendo a alteração no arquivo migration

    :left_speech_bubble: _Vamos alterar o arquivo migração criado por nós._

    > :vertical_traffic_light: Vamos abrir o arquivo **src/database/migrations/timestamp-usuario-add-senha.js**. Em um editor de texto inserir o script abaixo :point_down:, que tem o nome da tabela "**Usuarios**" e o novo campo "**senha**" declarados

    ~~~Javascript

       'use strict';

        module.exports = {
        up: async (queryInterface, Sequelize) => {
            return Promise.all([
            queryInterface.addColumn(
                'Usuarios',
                'senha',
                {
                type: Sequelize.STRING
                }
            )

            ]);
        },

        down: async (queryInterface, Sequelize) => {
            return Promise.all([
            queryInterface.removeColumn('Usuarios','senha')
            ]);
        }
        };
    ~~~

    :exclamation: Neste arquivo iremos fazer algumas alterações nos módulos **up e down**. **UP** - é a função que indica o que modificar no banco de dados quando executarmos a migration e a **DOWN**, que funciona como um rollback, ou seja, tudo que for feito na up deve ser desfeito na down.

    ---

25. Enviando para o banco físico

    :left_speech_bubble: _O Sequelize-cli irá popular na tabela **Usuarios** o campo senha declalarado no arquivo migration_

    ~~~Javascript

       npx sequelize db:migrate
    ~~~

    > :vertical_traffic_light:  O comando acima :point_up: migration ==> **.//src/database/migrations/"timestamp"-create-usuario.js"**.

    ---
26. Nova Tabela **Lista** no Sequelize

    :left_speech_bubble: _Criando um modelo associativo de uma tabela **Usuario** no no Sequelize. para ser posteriormente migrado para o banco de dados_

    ~~~Shell

       npx sequelize model:generate --name Listas --attributes titulo:string,usuarioId:integer
    ~~~

    > :vertical_traffic_light:  O comando acima :point_up: vai gerar 2 arquivos: o model ==> **./src/api/models/usuario.js** e o migration ==> **.//src/database/migrations/"timestamp"-create-usuario.js"**.
    ...
    > os models são a representação das tabelas do banco de dados em forma de classe.

    :exclamation: **.//src/database/migrations/"timestamp"-create-usuario.js"** não deve ser alterado. Nele consta detalhes da operação realizada, se foi operação de criação e seu timestamp.
    **timestamp**: representa um ponto específico na linha do tempo e leva em consideração o fuso horário em questão (UTC). Com isto, teremos sempre o detalhamento perante a linha do tempo real.

    ---

>No momento todo o trabalho está a cargo de
>E-mail :e-mail: aquiles.silva@a.ficr.edu.br
---
>:green_circle: Foi criado o Grupo 25 - Para dar continuidade ao projeto
...
> :triangular_flag_on_post: Trabalho foi desenvolvido como modelo de aprendizagem por @aquilesrodrigues
[TodoList-PROJ](https://github.com/aquilesrodrigues/TodoList).
