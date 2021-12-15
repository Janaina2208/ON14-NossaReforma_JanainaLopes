Projeto de doação de material de construção

Uma Api de doação de material de construção para pessoas que precisam reformar.

Ah qual objetivo? Reformamos nossa casa e às vezes sobra material ou trocamos portas e janelas e, ao invés de descartar, doamos para pessoas que estão em dificuldade financeira e precisam de reparos em suas casas.

Cadastro de quem vai doar.
Com a lista do material
Cadastro de quem vai receber a doação

-- parametros
finalizado: boolean
material para doar:boolean por itens
material que preciso: boolean por itens
outros materiais: [String]
Quantidade de material: String
bairro: String
nome: String
telefone: String

---------
Apresentação
Será apresentada na sala de aula com duração de três minutos, sem extensão, para cada aluna.

<img src="./assets/nossaReforma.png" width="100%">

##### Nome Projeto
Nossa Reforma

##### Tema
API para doação de material de construção.

problema - como resolver - código

##### Sobre (pra quem, como e porque) 🧱📝👩‍🔧👷‍♀️
Atudando como engenharia civil e trabalhando em algumas frentes, inclusive para diferentes classes socioeconomicas, percebi de um lado o desperdício de material comprado em excesso e do outro a necessidade das pessoas de reparos no lar que fariam diferença na qualidade da moradia, mas lhes faltam recursos.

Temos no Brasil uma grande desigualdade na distribuição de renda, no nordeste

Economiza o doador no quesito descarte e ganha o recebedor pelo item necessário ao bem-estar.

cadastro - login - post de material -

### Funcionalidades da aplicação

Este projeto em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO).

- [x] Cadastra as doações de materiais de construção - POST
- [x] Busca todos os cadastros - GET
- [x] Busca por material - GET
- [x] Atualiza material e telefone - PUT
- [x] Apaga os cadastro que tiveram todos os materiais doados - DELETE

### Tecnologias

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)

<div style="display: inline_block"><br>
  <img align="center" alt="Jana-Js" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"">
  <img align="center" alt="Jana-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg">
  <img align="center" alt="Jana-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Jana-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Jana-Mongo" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg">                               <img align="center" alt="Jana-Vs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg">                           <img align="center" alt="Jana-Angular" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg">
  <img align="center" alt="Jana-Python" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg">
</div>


## ✅Arquitetura MVC

        📂  NossaReforma_ON14
            |   README.md
            |   .gitignore
            |   package-lock.json
            |   package.json
            |   server.js
            \--📂 assets
                |       logo_nossaReforma
            \--📂 node_modules
            \--📂src
                |
                |     app.js
                |
                |
                📂---controller
                |       
                |       doadoesController.js
                |                      
                📂---model
                |       
                |       
                |       doacoes.json
                |       
                |
                📂---routes
                |      
                |       doacoesRoutes.js
                |__      

### 👩‍👧‍👦Rotas

* local: http://localhost:8000

##### DEMANDAS DE NEGÓGIOS 📝

Rotas/EndPoints
## GET /todos - "/todos"
Rota que retorna uma lista com todos os itens da minha geladeira.
HTTP 200 OK

## GET - "/buscar"
Rota que retorna os detalhes sobre algum item, baseado no seu id.
HTTP 200 OK

## POST - "/doacao"
Rota que recebe um novo item, adiciona ele à geladeira e retorna o item criado.
HTTP 201 CREATED
*cria personas = pessoas fictícias

## PUT /:id - "/atualiza"
Rota que atualiza a quantidade de um certo item na geladeira e retorna o item atualizado.
HTTP 200 OK
*** atualiza o material da pessoa caso não tenha doado tudo.

## DELETE /:id - "/delete"
Rota que deleta um item baseado em seu id.
HTTP 204 NO CONTENT
*** deleta o item caso já tenha todo material doado

## doacoesSchema
Finalizado: boolean,
Material doação:boolean por itens,
    Argamassas: Boolean,
    Cimento: Boolean,
    Fixadores: Boolean,
    Madeiramento: Boolean,
    Materiais hidráulicos: Boolean,
    Materiais elétricos: Boolean,
    Pisos e revestimentos: Boolean,
    Telha: Boolean,
    Tijolo: Boolean,
    Tinta: Boolean,
    Outros Materiais: [String]
Quantidade de material: String
Bairro para retirada: String
Nome: String
Telefone: String

## Melhorias para o futuro
criar um estoque com entrada e saída de material para controle

## Agradecimentos


<img src="./assets/janainaLopes.jpg" width="30%">
💬 Para entrar em contato seguem os canais abaixo.
📫 email: janaina.dev@yahoo.com
☎ telefone/whatsapp: (71) 99122-6375