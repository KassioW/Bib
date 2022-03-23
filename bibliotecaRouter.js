const fs = require('fs').promises;

const express = require('express');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => { // retornar todos
   const data = await fs.readFile(global.fileName, 'utf-8');
   const json = JSON.parse(data)

   const livros = json.livros
    res.send(json.livros)
});

router.get('/:id', async (req, res) => {
    const data = await fs.readFile(global.fileName, 'utf-8');
    const json = JSON.parse(data)

    const listaLivros = json.livros
    const livros = listaLivros.find(a => a.id == req.params.id)

    if(livros)
      res.send(livros)
    else
     res.status(404).end()
});


router.post('/', async (req, res) => {//cadastrar livro
    let livros = req.body;

    const data = await fs.readFile(global.fileName, 'utf-8');
    let json = JSON.parse(data);

    livro = {id: json.nextId, ...livro};
    json.livros.push(livro)
    json.nextId++;

    await fs.writeFile(global.fileName, JSON.stringify(json))

    res.send(json)

});

router.delete('/:id', async (req, res) => {//excluir livro
    const data = await fs.readFile(global.fileName, 'utf-8');
    let json = JSON.parse(data);

    let listaLivros = json.livros
    listaLivros = listaLivros.filter(a => a.id != req.params.id)

    json.livros = listaLivros

    await fs.writeFile(global.fileName, JSON.stringify(json))
     
    res.send(json)

});


router.put('/:id', async (req, res) => {//atualizacao 
    const data = await fs.readFile(global.fileName, 'utf-8');
    let json = JSON.parse(data);
    
    let listaLivros = json.livros
    const index = listaLivros.findIndex(a => a.id == req.params.id)
    listaLivros[index] = req.body
    json.livros = listaLivros
    await fs.writeFile(global.fileName, JSON.stringify(json))
     
    res.send(json)

});

router.get('/livro/autor/:nome', async (req, res) => { 
    const data = await fs.readFile(global.fileName, 'utf-8');
    let json = JSON.parse(data);

    const listaLivros = json.livros
    const livros = listaLivros.find(a => a.id == req.params.id)

    if(livros)
      res.send(livros)
    else
     res.status(404).end()
   
});

router.get('/livro/:titulo', async (req, res) => { 
    const data = await fs.readFile(global.fileName, 'utf-8');
    let json = JSON.parse(data);


    
});


router.get('/livro/ano/:ano', async (req, res) => { 
    const data = await fs.readFile(global.fileName, 'utf-8');
    let json = JSON.parse(data);


    
});

module.exports = router;
