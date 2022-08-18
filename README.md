* Abra o projeto e instale as dependências
```
  yarn ou npm i
  *** Em caso de erro de engine: yarn --ignore-engines
```

* Execute o projeto
```
  yarn start ou npm start
```

# Documentação  

Rota 1:  
URL: /post/read  
Método: GET  
Descrição: retorna uma lista com todos os posts.   

Rota 2:  
URL: /post/create  
Método: POST  
Descrição: cria um post.   
Body:  
{  
  "title": "Preço do dólar",  
  "body": "Um dólar hoje equivale à R$5,17",  
  "imageURL": "https://blog.cotacao.com.br/wp-content/uploads/2018/04/1-D%C3%B3lar-1996.png",  
  "userId": "74"  
}  

Rota 3:  
URL: /post/read/:user_id  
Método: GET  
Descrição: retorna uma lista com todos os posts do usuário do ID fornecido.   

Rota 4:  
URL: /session/login  
Método: POST  
Descrição: efetua o login de um usuário de acordo com email e senha fornecidos.  

Rota 5:  
URL: /user/read  
Método: GET  
Descrição: retorna uma lista com os posts do usuário logado no sistema.  

Rota 6:  
URL: /user/create  
Método: POST  
Descrição: cria um usuário no sistema.
{  
  "email": "teste@gmail.com",  
  "name": "José da Silva",  
  "password": "teste123321teste"
}  
