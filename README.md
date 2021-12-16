<div align="center">
    <img width="80%" src="./assets/nossaReforma.png">
</div>

### Nome do Projeto

# **Nossa Reforma**

## 🎫**Tema**
API para doação de material de construção excedentes de outras reformas.

## 👩‍🔧**Sobre o projeto** 🧱📝👷‍♀️
<div align=justify>
    "Segundo estimativas recentemente realizadas pela Organização das Nações Unidas (ONU), mais de 100 milhões de pessoas em todo o mundo não possuem um lugar para viver, enquanto mais de 1 bilhão reside em moradias inadequadas. Esse problema é uma reprodução das desigualdades sociais e de renda existentes nas sociedades." 

    [Fonte: Uol](https://escolakids.uol.com.br/geografia/problema-da-falta-de-moradia.htm#:~:text=Segundo%20estimativas%20recentemente%20realizadas%20pela,de%20renda%20existentes%20nas%20sociedades.)

    <p>Segundo estudos publicados, o nordeste é uma das regiões brasileiras mais afetadas pela desigualdade social e com os piores índices de desenvolvimento humano -IDH. Esses déficts geram grandes impactos principalmente na educação, saúde e moradia, pois as pessoas que estão na base da nossa estrutura social, por vezes, têm piores condições de vida em função da diferença econômica entre as classes.</p>

    <p>Atuando como engenheira civil e atuando em diferentes frentes de trabalho, percebi de um lado o desperdício de material, geralmente comprado em excesso, e do outro a necessidade das pessoas de reparos simples no lar que fariam diferença na qualidade da moradia, mas lhes faltam recursos. Pensando em, de algum modo, melhorar a qualidade de vida da população, pensei em iniciar pelo ponto que tenho maior conhecimento, construções e reformas. Se observarmos a quantidade de material tida como entulho por uns, mas de grande serventia para outros, faríamos habitações mais saudáveis.</p>

    <p>Com esta aplicação, o doador economiza no transporte e descarte de materiais de construção, enquanto o recebedor terá itens necessário para melhorias de suas moradias,segurança e bem-estar de suas famílias.</p>

    <p>Acredito que num ambiente estruturado e com variáveis de ambiente adaptadas às necessidades dos indivíduos, tem-se saúde física e mental para desenvolver melhor as atividades cotidianas e transformar vidas!</p>
</div>

## ⚙️**Funcionalidades da aplicação**

Este projeto é uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTAR), UPDATE(ATUALIZAR) e DELETE(REMOVER).

- [x] Cadastra as doações de materiais de construção - POST
- [x] Busca todos os cadastros - GET
- [x] Busca por material - GET
- [x] Atualiza material e telefone - PATCH
- [x] Apaga os cadastro que tiveram todos os materiais doados - DELETE

## 💻**Tecnologias**

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [Nodemon](https://nodemon.io/)
- [Express](https://expressjs.com/pt-br/)
- [cors](https://www.npmjs.com/package/cors)
- [MongoDB](https://mongodb.com/)
- [Heroku](https://heroku.com/)

>>>>>>>>>>>>>>>>>>> FALTA INSERIR: Bcrypt, jwt(npm i jsonwebtoken)
## 🧱**Arquitetura MVC**

        📂  NossaReforma_ON14
            |   README.md
            |   .gitignore
            |   .env
            |   .env.example
            |   package-lock.json
            |   package.json
            |   Procfile
            |   server.js
            \--📂 assets
                |       logo_nossaReforma
            \--📂 node_modules
            \--📂src
                |
                |     app.js
                |
                📂---controller
                |       
                |       doadoesController.js
                |
                📂---database
                |       
                |       config.js
                |                                       
                📂---model
                |        
                |       materialSchema.js
                |
                📂---routes
                |      
                |       materialRoutes.js
                |
                |       index.js
                |__      

## 🗺️**Rotas/EndPoints**

### GET /todos - "/todos"
<localhost:8000/nossareforma/todos>
<https://nossareforma.herokuapp.com/nossareforma/todos>
<p>Rota que retorna uma lista com todos os itens para doação.</p>
<p>HTTP Status Code: 200 - Ok</p>

### GET - "/buscar"
<localhost:8000/nossareforma/buscar>
<https://nossareforma.herokuapp.com/nossareforma/buscar>
<p>Rota que retorna lista dos cadastro contendo o material pesquisado.</p>
<p>HTTP Status Code: 200 - Ok</p>

### POST - "/doacao"
<localhost:8000/nossareforma/doacao>
<https://nossareforma.herokuapp.com/nossareforma/doacao>
<p>Rota que recebe um novo material, adiciona ele collection e retorna o item criado.</p>
<p>HTTP Status Code: 201 - Created</p>

### PUT /:id - "/atualiza"
<localhost:8000/nossareforma/atualiza/:id>
<https://nossareforma.herokuapp.com/nossareforma/atualiza/:id>
<p>Rota que atualiza certo item da collection e retorna o item atualizado.</p>
<p>HTTP Status Code: 200 - Ok</p>

### DELETE /:id - "/delete"
<localhost:8000/nossareforma/remove/:id>
<https://nossareforma.herokuapp.com/nossareforma/remove/:id>
<P>Rota que deleta um item baseado em seu id.</P>
<p>HTTP Status Code: 204 - No Content</p>

## 📝**Schema - materialSchema**
    - id: mongoose.Schema.Types.ObjectId,
    - finalizado: Boolean,
    - material: String,
    - quantidadeDeMaterial: String,
    - bairroRetirada: String,
    - nome: String,
    - telefone: String
    
## 🚀**Melhorias para o futuro**
- criar um estoque com entrada e saída de material para controle
- login q só cadastre material quem fez cadastro prévio
- login para quem busca material só tenha acesso com cadastro prévio

## 🙏🏽**Agradecimentos**
<div align=justify>
    <p>O que falar sobre essa experiência maravilhosa, sobre pessoas incríveis!?</p>
    <p>Vamos falar de Tassila Bomfim!? Amiga de todas as horas que me mostrou esse mundo da programação e {Reprograma}! Obrigada,amiga "mister" pelo incentivo incansável, por acreditar em mim sempre e me inspirar sendo essa profissional exemplar!</p>
    <p>Falando sobre amizade... QUE SELEÇÃO É ESSA, {REPROGRAMA}??? Como que vocês selecionam esse time incrível assim!? Obrigada novas, que já são antigas, amigas! Eu prefiro não nomear uma, nem ordenar, nem mensurar... vocês são incríveis! Como falamos: Deusas, Anjas, Maravilhosas! Obrigada por esta jornada... obrigada por compartilharem tanto! Mulheres, umas pelas outras, sem ninguém soltar a mão de ninguém!</p>
    <p>Sobre o mundo {Reprograma}... Que cultura extraordinária! Muito acolhimento, calor humano, embasamento, incansáveis semanas de estudos, conteúdos direcionados e semanas lindas de compartilhamento.</p>
    <p>Nossa facilitadora é um caso à parte, viu!? Raquel, que paciência! Obrigada por estar sempre disposta, pela relação próxima e cheia de alto astral! Sem você não teria sido tão bom!</p>
    <p>Por fim, e não menos importante nesse processo, agradeço, às profas e monitoras MA-RA-VI-LHO-SAS! Cada uma trazendo seu conhecimento, vivência e acolhimento da maneira mais </p>
    <p>Enfim, agradecer ao universo por tudo isso!!!</p>
    💜👩💜👩🏼💜👩🏽💜👩🏾💜👩🏿💜
</div>


<img src="./assets/janainaLopes.jpg" width="30%">
<p>💬 Para entrar em contato seguem os canais abaixo.</p>
<p>📫 email: janaina.dev@yahoo.com</p>
<p>☎ telefone/whatsapp: (71) 99122-6375</p>


<div align=center style="display: inline_block"><br>
  <img align="center" alt="Jana-Js" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"">
  <img align="center" alt="Jana-Git" height="30" width="40" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white">
  <img align="center" alt="Jana-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Jana-Nodemon" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg">
  <img align="center" alt="Jana-Express" height="30" width="40" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <!-- <img align="center" alt="Jana-Cors" height="30" width="40" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"> -->
  <img align="center" alt="Jana-Mongo" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg">                               
  <img align="center" alt="Jana-Vs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg">                           
  <img align="center" alt="Jana-Heroku" height="30" width="40" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">
</div>

