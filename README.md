<div align="center">
    <img width="80%" src="./assets/nossaReforma.png">
</div>

### Nome do Projeto

# **Nossa Reforma**

## 🎫**Tema**
API para doação de material de construção excedentes de outras reformas.

## 👩‍🔧**Sobre o projeto** 🧱📝👷‍♀️
>"Segundo estimativas recentemente realizadas pela Organização das Nações Unidas (ONU), mais de 100 milhões de pessoas em todo o mundo não possuem um lugar para viver, enquanto mais de 1 bilhão reside em moradias inadequadas. Esse problema é uma reprodução das desigualdades sociais e de renda existentes nas sociedades." 
[Por Me. Rodolfo Alves Pena](https://escolakids.uol.com.br/geografia/problema-da-falta-de-moradia.htm#:~:text=Segundo%20estimativas%20recentemente%20realizadas%20pela,de%20renda%20existentes%20nas%20sociedades.)

<div align=justify>
    <p>Segundo estudos publicados, o nordeste é uma das regiões brasileiras mais afetadas pela desigualdade social e com os piores índices de desenvolvimento humano -IDH. Esses déficts geram grandes impactos principalmente na educação, saúde e moradia, pois as pessoas que estão na base da nossa estrutura social, por vezes, têm piores condições de vida em função da diferença econômica entre as classes.</p>
    <p>Atuando como engenheira civil e atuando em diferentes frentes de trabalho, percebi de um lado o desperdício de material, geralmente comprado em excesso, e do outro a necessidade das pessoas de reparos simples no lar que fariam diferença na qualidade da moradia, mas lhes faltam recursos. Pensando em, de algum modo, melhorar a qualidade de vida da população, pensei em iniciar pelo ponto que tenho maior conhecimento, construções e reformas. Se observarmos a quantidade de material tida como entulho por uns, mas de grande serventia para outros, faríamos habitações mais saudáveis.</p>
    <p>Com esta aplicação, o doador economiza no transporte e descarte de materiais de construção, enquanto o recebedor terá itens necessário para melhorias de suas moradias,segurança e bem-estar de suas famílias.</p>
    <p>Acredito que num ambiente estruturado e com variáveis de ambiente adaptadas às necessidades dos indivíduos, tem-se saúde física e mental para desenvolver melhor as atividades cotidianas e transformar vidas!</p>
</div>

## ⚙️**Funcionalidades da aplicação**

Este projeto é uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTAR), UPDATE(ATUALIZAR) e DELETE(REMOVER).

- [x] Cadastra doadores de materiais de construção - POST
- [x] Cadastra beneficiados para receber doações de materiais de construção - POST
- [x] Cadastra as doações de materiais de construção - POST
- [x] Valida o acesso dos doadores de materiais de construção - POST
- [x] Valida o acesso dos beneficiados de materiais de construção - POST
- [x] Busca todos os cadastros de materiais de construção - GET
- [x] Busca todos os cadastros de doadores - GET
- [x] Busca todos os cadastros de beneficiados - GET
- [x] Busca por material - GET
- [x] Atualiza dados do cadastro de material de construção - PATCH
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
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jwt](https://www.npmjs.com/package/jsonwebtoken)

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
                |       janainaLopes.jpg
                |
                |       logo_nossaReforma.png
                |
            \--📂 node_modules
            \--📂src
                |
                |     app.js
                |
                📂---controller
                |       
                |       benefitedController.js
                |
                |       donorController.js
                |
                |       materialController.js
                |
                📂---database
                |       
                |       config.js
                |                
                📂---helpers
                |       
                |       auth.js
                |              
                📂---middlewares
                |       
                |       auth.js
                |                                         
                📂---model
                |        
                |       benefitedSchema.js
                |
                |       donorsSchema.js
                |
                |       materialSchema.js
                |
                📂---routes
                |      
                |       benefitedRoutes.js
                |
                |       donorRoutes.js
                |
                |       index.js
                |
                |       materialRoutes.js
                |__

<br>

## 🔃 Quadro de rotas:

| Método HTTP  | Endpoint                     | Descrição                              |
| ------------ | ---------------------------- | ---------------------------------------|
| GET          | `/nossareforma/todos`        | Retorna todos os materiais para doação |
| GET          | `/nossareforma/buscar`       | Retorna os materiais por nome          |
| GET          | `/beneficiados/todos`        | Retorna todos beneficiados cadastrados |
| GET          | `/doadores/todos`            | Retorna todos doadores cadastrados     |
| POST         | `/doadores/criarconta`       | Cria/cadastra novo doador              |
| POST         | `/doadores/logindoador`      | login de usuário para autorização      |
| POST         | `/beneficiados/criar`        | Cria/cadastra novo beneficiado         |
| POST         | `/beneficiados/login`        | login de usuário para autorização      |
| POST         | `/nossareforma/doacao`       | Cria/cadastra novo material            |
| PATCH        | `/nossareforma/atualiza`     | Atualiza cadastro de material          |
| DELETE       | `nossareforma/delete`        | Remove cadastro do material            |

<br>

## 🗺️**Rotas/EndPoints**

### GET /todos - "/nossareforma/todos"
<https://nossareforma.herokuapp.com/nossareforma/todos>
<p>Rota pública onde retorna uma lista com todos os itens para doação, exceto nome e telefone do doador.</p>
<p>HTTP Status Code: 200 - Ok</p>

### GET - "/nossareforma/buscar"
<https://nossareforma.herokuapp.com/nossareforma/buscar>
<p>Rota que retorna lista dos cadastro contendo o material pesquisado.</p>
<p>HTTP Status Code: 200 - Ok</p>

### POST - "/doadores/criarconta"
<https://nossareforma.herokuapp.com/doadores/criarconta>
<p>Rota onde o doador se cadastra.</p>
<p>HTTP Status Code: 201 - Created</p>

### POST - "/doadores/logindoador"
<https://nossareforma.herokuapp.com/doadores/logindoador>
<p>Rota para login do doador, onde é feita a validação e gerado um token para autorização.</P>
<p>HTTP Status Code: 200 - Ok</p>

### GET /todos - "/doadores/todos"
<https://nossareforma.herokuapp.com/doadores/todos>
<p>Rota privada que retorna lista de todos os doadores cadastrados.</p>
<p>HTTP Status Code: 200 - Ok</p>

### POST - "/beneficiados/criar"
<https://nossareforma.herokuapp.com/beneficiados/criar>
<p>Rota onde o beneficiado se cadastra.</p>
<p>HTTP Status Code: 201 - Created</p>

### POST - "/beneficiados/login"
<https://nossareforma.herokuapp.com/beneficiados/logindoador>
<p>Rota para login do beneficiado, onde é feita a validação e gerado um token para autorização.</P>
<p>HTTP Status Code: 200 - Ok</p>

### GET /todos - "/beneficiados/todos"
<https://nossareforma.herokuapp.com/beneficiados/todos>
<p>Rota privada que retorna lista de todos os beneficiários cadastrados.</p>
<p>HTTP Status Code: 200 - Ok</p>

### POST - "/nossareforma/doacao"
<https://nossareforma.herokuapp.com/nossareforma/doacao>
<p>Rota que recebe um novo material, adiciona ele collection e retorna o item criado.</p>
<p>HTTP Status Code: 201 - Created</p>

### PATCH /:id - "/nossareforma/atualiza"
<https://nossareforma.herokuapp.com/nossareforma/atualiza/:id>
<p>Rota que atualiza certo item da collection e retorna o item atualizado.</p>
<p>HTTP Status Code: 200 - Ok</p>

### DELETE /:id - "nossareforma/delete"
<https://nossareforma.herokuapp.com/nossareforma/remove/:id>
<P>Rota que deleta um item baseado em seu id.</P>
<p>HTTP Status Code: 204 - No Content</p>

## 📝**Schema - materialSchema**
    - id: mongoose.Schema.Types.ObjectId,
    - finished: Boolean,
    - material: String,
    - qtyMaterial: String,
    - district: String,
    - donor: mongoose.Schema.Types.ObjectId,
    - phone: String
    
## 📝**Schema - donorsSchema**
    - name: String,
    - email: String,
    - password: String

## 📝**Schema - benefitedSchema**
    - name: String,
    - email: String,
    - password: String

## 🚀**Melhorias para o futuro**
- Criar um estoque com entrada e saída de material para controle de quantidade,
- Melhorar as validações,
- Melhorar o schema para ter mais dados dos usuários.

## 🙏🏽**Agradecimentos**
<div align=justify>
    <p>O que falar sobre essa experiência maravilhosa, sobre pessoas incríveis!?</p>
    <p>Vamos falar de Tassila Bomfim!? Amiga de todas as horas que me mostrou esse mundo da programação e {Reprograma}! Obrigada,amiga "mister" pelo incentivo incansável, por acreditar em mim sempre e me inspirar sendo essa profissional exemplar!</p>
    <p>Falando sobre amizade... QUE SELEÇÃO É ESSA, {REPROGRAMA}??? Como que vocês selecionam esse time incrível assim!? Obrigada novas, que já são antigas, amigas! Eu prefiro não nomear uma, nem ordenar, nem mensurar... vocês são incríveis! Como falamos: Deusas, Anjas, Maravilhosas! Obrigada por esta jornada... obrigada por compartilharem tanto! Mulheres, umas pelas outras, sem ninguém soltar a mão de ninguém!</p>
    <p>Sobre o mundo {Reprograma}... Que cultura extraordinária! Muito acolhimento, calor humano, embasamento, incansáveis semanas de estudos, conteúdos direcionados e semanas lindas de compartilhamento.</p>
    <p>Nossa facilitadora é um caso à parte, viu!? Raquel, que paciência! Obrigada por estar sempre disposta, pela relação próxima e cheia de alto astral! Sem você não teria sido tão bom!</p>
    <p>Por fim, e não menos importante nesse processo, agradeço, às profas e monitoras MA-RA-VI-LHO-SAS! Cada uma trazendo seu conhecimento, vivência e acolhimento da maneira mais enriquecedora possível!</p>
    <p>Enfim, agradecer ao universo por tudo isso!!!</p>
    <p>💜👩💜👩🏼💜👩🏽💜👩🏾💜👩🏿💜</p>
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

