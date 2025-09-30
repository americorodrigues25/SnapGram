# 💻 SnapGram

![React](https://img.shields.io/badge/React-19.x-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-5.x-lightgrey?logo=express&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?logo=mongodb)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple?logo=redux)

<div align="center">
<img width="48%" style="max-width: 200px; margin: 5px;" alt="SnapGram print 1" src="https://github.com/user-attachments/assets/1c477f79-a8c9-4b60-964d-728ee5f40177" />
<img width="48%" style="max-width: 200px; margin: 5px;" alt="SnapGram print 2" src="https://github.com/user-attachments/assets/3c937c3e-c407-48f4-ade3-e109c3108b5a" />
</div>
<br>
<div align="center">
<img width="48%" style="max-width: 200px; margin: 5px;" alt="SnapGram" src="https://github.com/user-attachments/assets/24cf8137-69f5-4b45-8fc9-ac89e3cdd792" />
<img width="48%" style="max-width: 200px; margin: 5px;" alt="SnapGram" src="https://github.com/user-attachments/assets/32c1a681-ae63-4fb4-a11a-572cb4e472aa" />
</div>

---

## 📚 Sobre o projeto
<p>SnapGram é como uma <b>rede social</b> de compartilhamento de fotos, permitindo aos usuários editar sua bio, fazer publicações de fotos e interagir com outros usuários por meio de <b>comentários e curtidas</b> nas fotos. </p>
<p>O projeto foi desenvolvido em React para o front end e Node com express para o backend, para banco de dados utilizei MongoDB Atlas, que ja vem gerenciado e pronto para uso, basta fazer as configurações necessárias. </p>
<p>Primeiro construí o backend e as APIs, testando todas as rotas com o Postman. Depois, parti para o frontend e a integração com o servidor.</p>

---

## ✨ Funcionalidades
- Login e cadastro de novos usuários
- Perfil único para cada usuario editar (Nome de usuário, foto do perfil, bio, senha)
- Compartilhamento de foto no feed
- Perfil do usuario onde aparece as fotos que ele já publicou
- Editar e excluir foto publicada
- Adicionar comentários nas fotos publicadas
- Curtir fotos publicadas
- Página individual para visualizar a publicação selecionada por meio de id
- Barra de pesquisa para procurar alguma publicação

## 🛠️ Tecnologias utilizadas
-  [React](https://react.dev/)
-  [CSS Modules](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
-  [Node.js](https://nodejs.org/pt)  
-  [Express](https://expressjs.com/)  
-  [MongoDb Atlas](https://www.mongodb.com/products/platform/atlas-database)
-  [Redux](https://redux.js.org/)
-  [Mongoose](https://mongoosejs.com/)
-  [Postman](https://www.postman.com/)

---

## 🎬 Demonstração em vídeo

https://github.com/user-attachments/assets/1b0310a0-fa62-4a06-808d-96db739859eb

---

## 🚀 Como instalar e rodar o projeto:
```bash
# Abra um terminal e copie este repositório com o comando:
$ git clone https://github.com/americorodrigues25/SnapGram

# Entre na raiz do projeto:
$ cd SnapGram
```

### Backend — configuração e execução

```bash
# Entre na pasta do backend
$ cd backend

# Crie o arquivo de variáveis de ambiente .env (ou copie de .env.example e ajuste com suas configurações do MongoDB Atlas)

# Instale as dependências:
$ npm install

# Execute a API
$ npm run dev
```

### Frontend — configuração e execução

```bash
# Entre na pasta do frontend:
$ cd ../frontend
```

```bash
# Instale as dependências:
$ npm install

# Rode o frontend:
$ npm start
```

### Rodando backend e frontend juntos (modo desenvolvimento)
#### Abra dois terminais diferentes e rode em cada um:

##### Terminal 1:

```bash
$ cd SnapGram/backend
$ npm run dev
```

##### Terminal 2:

```bash
$ cd SnapGram/frontend
$ npm start
```
---

## 📢 Publicação no LinkedIn
[🔗 Ver post no LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7378885798789677056/)

---

<div align="center">💻 Feito por Américo Rodrigues</div>
