<h1 align="center">Trabalho ecommerce java para web</h1>

<h3 align="center">Status: Em desenvolvimento</h3> 

## Steps to run this project:

1. Run `sudo docker-compose up -d` command

2. Run `npm i` command
   
3. Run `npm start` command


## Exemplos de curl

### 1. Create computador
```bash
curl --request POST \
  --url http://localhost:5000/computador \
  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmM4YTNjNGNjOGJjZGE1MDk2ZmRhZSIsImlhdCI6MTY2ODA1OTQ1NiwiZXhwIjoxNjY4MDYzMDU2fQ.rwxPcpLjeGuKexrhMzGdbeQN2OvTptcfrhC_mfBTIXk' \
  --header 'Content-Type: application/json' \
  --data '{
	"hostname": "127.0.0.4",
	"processador": "intel core 7",
	"memoria": " 16 gb ddr4",
	"armazenamento": "128g ssd",
	"estado": "desativado"
}'
```

### 2. listar todos computadores
```bash
curl --request GET \
  --url http://localhost:5000/computador
```

### 3. Buscar um computador
```bash
curl --request GET \
  --url http://localhost:5000/computador/{id}
```

### 4. Update computador
```bash
curl --request PUT \
  --url http://localhost:5000/computador/{id} \
  --data '{"_id":"{id}","hostname":"127.0.0.1","processador":"intel core 32","memoria":" 16 gb ddr4","armazenamento":"128g ssd","estado":"desativado","__v":5}'
```
### 5. Delete computador
```bash
curl --request DELETE \
  --url http://localhost:5000/computador/{id}
```
