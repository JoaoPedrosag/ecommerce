const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./routes/User');
const connect = require('./database/ConnectDataBase');
const server = http.createServer(app);
server.listen(port);