const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado')
})

