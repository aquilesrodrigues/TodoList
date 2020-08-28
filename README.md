# TodoList

## Repositório principal do projeto **TODOLIST-PROJ**

### Preparação do ambiente de trabalho

- [x] 1. Preparar ambiente do projeto **NODE**
- [x] 2. Iniciar um projeto Node
- [x] 3. Criar arquivo .GITIGNORE
- [x] 4. Instalar o EXPRESS
- [x] Iniciar um projeto Node
- [x] Iniciar um projeto Node
- [ ] item incompleto

1. Preparar o ambiente do projeto **NODE**
    1. Você deve instalar  o editor, o git, configurar uma conta no github para poder executar os demais passos do seu projeto.
    2. Após concluir todos os pre-requisitos acima continue

2. Inciar projeto **NODE**

    :left_speech_bubble: _No shell, utilizar o **NPM** (O Gerenciador de pacotes do node) com o comando acima, ele se encarrega de inicializar um projeto novo em node. o **-y**  faz ele ignorar uma série de perguntas para começar o projeto. Será tudo automático!_

    ~~~cmder
    npm init -y
    ~~~

    > :vertical_traffic_light: Como saída teremos o arquvo package.json com as configurações básicas criadas.
    >Todo pacote instalado no node será registrado no arquivo package.json.

3. Criar arquivo .GITIGNORE

    :left_speech_bubble: _.gitignore - informa ao git para não commitar os caminhos, arquivos e outras informações que forem representados dentro do arquivo.

    ~~~Javascript

        node_modules/
    ~~~

    > :vertical_traffic_light: Em seu editor de texto criar o arquivo .gitignore e dentro dele inserir a linha node_modules/
    >Como saída teremos o arquvo .gitignore com suas configurações básicas.

4. Instalar o EXPRESS

    :left_speech_bubble: _O Express é uma dependencia do Node.js responsável_

    ~~~Shell

        npm i -S express
    ~~~

    > :vertical_traffic_light: Como saída teremos uma pasta **/node_modules** contendo o pacote instalado e todos as demais dependências, também o arquivo _package-lock.json_ e o _server.js_.
    :exclamation: O Registro abaixo :point_down: foi criado dentro do arquivo **package.json**.

    ~~~JavaScript
    "dependencies": {
    "express": "^4.17.1"
    },
    ~~~

    > :vertical_traffic_light: Caso você queira reinstalar os pacotes do node por algum motivo ou iniciar um projeto novo. Ele informará quais módulos deverão ser instalados. Basta executar o comando abaixo :point_down:  na sua linha de comandos.

    ~~~Shell
        npm install
    ~~~

5. Criar/Editar SERVER.JS

    :left_speech_bubble: _O arquivo **server.js** contém os scripts para execução do servidor de aplicação no node.

    ~~~JavaScript
        const express = require('express')
        const app = express()
        app.listen(3001)
        console.log("servidor funcionando")
    ~~~

    > :vertical_traffic_light: em seu editor de texto, criar ou editar o arquivo server.js e inserir o código acima. Vamos declarar duas constantes. A primeira importa o express e a segunda recebe o objeto express(). na constante criada app, vamos passar a porta 3001, através do método listen()  e para facilictar a visualização do que está acontecendo vamos gerar uma mensagem de que está tudo bem através do console.log.

6. Instalar o Nodemon

    :left_speech_bubble: _esse módulo é o utilitário que irá monitorar todas as alterações nos arquivos de nossa aplicação e reiniciar automaticamente o servidor quando for necessário._

    ~~~Shell

    npm i -D nodemon
    ~~~

    > :vertical_traffic_light: a cada alteração que fazemos em um arquivo, precisamos reiniciar a aplicação com o comando node script ou script.js. O **-D** serve para informar que queremos sua execução apenas em modo desenvolvimento. Para rodar nossos scripts no shell basta digitar _nodemon script.js_.

    :exclamation: O Registro de dependência abaixo :point_down: foi criado dentro do arquivo **package.json** no momento da instalação do nodemon.

    ~~~JavaScript
        "devDependencies": {
        "nodemon": "^2.0.4"
        }
    ~~~

7. Inicializar o Nodemon junto com o Server

    :left_speech_bubble: _Assim que iniciamos o NPM será lido o arquivo **package.json** e que contém o bloco "script" que declaramos alguns scripts para serem utilizadas junto com o node._

    ~~~Shell

    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      **"start": "nodemon server.js"**
    },
    ~~~

    > :vertical_traffic_light: O que iremos fazer é inserir dentro do "scripts" um atalho chamado **start** que ao ser chamaod no shell junto com o comando node irá executar o script declarado acima :point_up: .

    :exclamation: O script **"start": "nodemon server.js"** foi criado dentro do bloco script no arquivo **package.json**.



    Coluna 1 | Coluna 2
    :-------------- | :--------------
    exemplo 1 | Exemplo 2

    :left_speech_bubble: _Vai no repositório e pega a última versão do módulo EXPRESS_

>No momento todo o trabalho está a cargo de @aquilesrodrigues
>E-mail :e-mail: aquiles.silva@a.ficr.edu.br
>conteúdo a ser inserido :green_circle:
> :triangular_flag_on_post: conteúdo a ser inserido
[TodoList-PROJ](https://github.com/aquilesrodrigues/TodoList).
