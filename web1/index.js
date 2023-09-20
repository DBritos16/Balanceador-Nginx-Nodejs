const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    return res.send('Mensaje desde web 1');
});

app.listen(3000, ()=> console.log('Servidor corriendo en el puerto 3000'));