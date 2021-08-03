import express from 'express';
import Products from './class.js';


const puerto = 8080;

const app = express();

const server = app.listen(puerto, () =>
  console.log('Server Up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR =>', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let products = new Products()

app.get('/api/productos/listar', (request, response) => {
    response.json(products.getProducts());
  });

app.get('/api/productos/guardar', (request, response) => {
  products.addProduct(request.body);
  response.json(request.body);
  });

app.get('/api/productos/listar/:id', (request, response) => {
    response.json(products.getProductsById(request.params.id));
  });  

