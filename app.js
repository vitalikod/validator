const express = require('express');
const server = express();

const port = 5000;

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use(express.static('./pablic'));

server.get('/', (req, res) => {
    res.render('main');
    console.log(`server work on port ${port}`);
})

server.post('/test', upload.none(), (req, res) => {
    console.log(req.body);
})

server.get('/product/:id', (req, res) => {
    const id = Number(req.params.id); 
    if (isNaN(id)) {
        res.json({ status: 'error' });
        return;     
    }
    const db = [
        {id: 1, amount: 10},
        {id: 2, amount: 10},
        {id: 3, amount: 10},
    ]

    const item = db.find(product => product.id === id );
    
    if (!item) {
        res.json({ status: 'unknown id'});
        return;
    }
    if (item) {
        res.json({ amount: item.amount });
        return;
    }
});

server.listen(port);