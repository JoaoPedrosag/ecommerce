<h1 align="center">Trabalho ecommerce java para web</h1>

<h3 align="center">Status: Em desenvolvimento</h3> 

## Steps to run this project:

Abra um terminal:

1. Run `sudo docker-compose up` command

Abra outro terminal

1. Run `npm i` command
   
2. Run `npm run dev` command


## Exemplos de curl

<h2 align="center">User</h2>

### 1 - register user
```bash
curl --request POST \
  --url http://localhost:5000/auth/register \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "augusto",
	"email": "test@teste.com",
	"password": "1234"
}'
```

### 2 - register user admin
```bash
curl --request POST \
  --url http://localhost:5000/auth/register \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "augusto",
	"email": "test@teste.com",
	"password": "1234",
  "admin": "true",
  "shop_name": "white"
}'
```

### 3 - login user
```bash
curl --request POST \
  --url http://localhost:5000/auth/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "test@teste.com",
	"password": "1234"
}'
```

<h2 align="center">Veste</h2>

### 1 - create veste
```bash
curl --request POST \
  --url http://localhost:5000/veste \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmVhMWIxNWJjMDFmZmIzNDY2OWU2YSIsInNob3BfbmFtZSI6ImJsYWNrIiwiaWF0IjoxNjY4MjAyMzMwLCJleHAiOjE2NjgyMDU5MzB9.kv8vV4twTFGVpilMKtGPFhVf_Dfe7DmJQycJh2O-cVk' \
  --header 'Content-Type: application/json' \
  --data '{
	"descricao": "camisa 1",
	"valor": 123.8,
	"discurso_venda": "textinho bunito",
	"estoque": 100,
	"shop_name": "black"
}'
```

### 2 - delete veste

```bash
curl --request DELETE \
  --url http://localhost:5000/veste/{veste_id} \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmVhMWIxNWJjMDFmZmIzNDY2OWU2YSIsInNob3BfbmFtZSI6ImJsYWNrIiwiaWF0IjoxNjY4MjAyMzMwLCJleHAiOjE2NjgyMDU5MzB9.kv8vV4twTFGVpilMKtGPFhVf_Dfe7DmJQycJh2O-cVk'
```

### 3 - find one veste

```bash
curl --request GET \
  --url http://localhost:5000/veste/{veste_id} \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM4YTNjNGNjOGJjZGE1MDk2ZmRhZSIsImlhdCI6MTY2ODE4NDk3NSwiZXhwIjoxNjY4MTg4NTc1fQ._Md-mhEglgrdFbYFxzRMCy4bbQij5vCviwC-TPtNQ3M'
```

### 4 - list veste

```bash
curl --request GET \
  --url http://localhost:5000/veste \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM4YTNjNGNjOGJjZGE1MDk2ZmRhZSIsImlhdCI6MTY2ODE4NDk3NSwiZXhwIjoxNjY4MTg4NTc1fQ._Md-mhEglgrdFbYFxzRMCy4bbQij5vCviwC-TPtNQ3M'
```

### 5 - list By ShopName vestes

```bash
curl --request GET \
  --url http://localhost:5000/veste/shop/{shop_name} \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM4YTNjNGNjOGJjZGE1MDk2ZmRhZSIsImlhdCI6MTY2ODE4NDk3NSwiZXhwIjoxNjY4MTg4NTc1fQ._Md-mhEglgrdFbYFxzRMCy4bbQij5vCviwC-TPtNQ3M'
```

<h2 align="center">imagem</h2>

### 1 - upload imagem

```bash
curl --request POST \
  --url http://localhost:5000/image \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM4YTNjNGNjOGJjZGE1MDk2ZmRhZSIsImlhdCI6MTY2ODEzMjMwNSwiZXhwIjoxNjY4MTM1OTA1fQ.aY5rYOnsZ9ARnKhT6qFZuQrweJ3GqMlZ2RnOlk1f1kk' \
  --header 'Content-Type: multipart/form-data' \
  --form image=@/home/augusto.savi/Downloads/teste-png.png
  ```

  