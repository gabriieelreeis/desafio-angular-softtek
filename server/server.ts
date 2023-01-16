const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use('/users', (req: any, res: any, next: () => void) => {
  if (!!req.query.cpf) {
    const users = listUsers();

    const findUser = users.find((u: any) => u.cpf == req.query.cpf);
    res.status(200);
    res.json(findUser);
    res.end();
  } else {
    next();
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function listUsers() {
  const db = fs.readFileSync('./server/db.json');
  const users = JSON.parse(db).users;
  return users;
}
