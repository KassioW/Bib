const express = require('express'); //commons
const cors = require('cors');
const routerBiblioteca = require('./bibliotecaRouter')

const app = express();
app.use(express.json());
app.use(cors());


global.fileName = 'livros.json';

app.use('/biblioteca', routerBiblioteca);

app.use(2022, () => {
    console.log('ok');
})