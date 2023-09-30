const crypto = require('crypto');
const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('App de Exemplo executando na porta 3000!')
  });

const chaveSecreta = 'ChaveSuperSecreta';
const textoOriginal = 'Minha informação confidencial';

const cipher = crypto.createCipher('aes-256-cbc', chaveSecreta);
let textoCriptografado = cipher.update(textoOriginal, 'utf8', 'hex');
textoCriptografado += cipher.final('hex');

app.get('/criptografia', (req, res) => {
    res.send('Texto criptografado' + textoCriptografado);
 })

const descipher = crypto.createDecipher('aes-256-cbc', chaveSecreta);
let textoDescriptografado = descipher.update(textoCriptografado, 'hex', 'utf8');
textoDescriptografado += descipher.final('utf8');

app.get('/descriptografia', (req, res) =>{
    res.send('Texto Descriptografado' + textoDescriptografado);
  })

console.log('Texto Criptografado:', textoCriptografado);

