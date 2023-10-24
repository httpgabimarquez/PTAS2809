const crypto = require('crypto');
const express = require('express');
const app = express();
const bcrypt = require ('bcryptjs');

app.use(express.json());

app.listen(3004, function() {
    console.log('App de Exemplo executando na porta 3000!')
});

//* criacao de nova senha
app.post('/criptografia', async (req, res) => {
    const {senha} = req.body; 
    const novaSenha = await bcrypt.hash (senha, 10)
    res.send('Nova senha' + novaSenha);
 })

//* compara a senha gerada com a senha atual
app.post('/descriptografia', async (req, res) =>{
    const {senha, novaSenha} = req.body;
    const compare = await bcrypt.compare(senha, novaSenha);
    res.send('Senha verificada' + compare);
  })



