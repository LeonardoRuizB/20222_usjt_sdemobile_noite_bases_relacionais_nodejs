const {
    Client
} = require('pg')
const express = require('express')
const app = express()
app.use(express.json())

const client = new Client({
    user: '',
    host: 'motty.db.elephantsql.com',
    database: '', //Esse e o User são os mesmos
    password: '',
    port: '5432',
});

//GET http://localhost:3000/medicos
app.get('/medicos', async (req, res) => {
    client.connect()
    const { rows } = await client.query('SELECT * FROM tb_medicos')
    console.log(rows)
    res.send('Ok')

})

app.listen(3000, () => console.log('Executando...'))


teste = async () => {
    await client.connect()
    console.log("Agora foi!!")
}

teste ()



// const f = () => {
//      //demora bastante
//      return Promise.resolve(1)
// }

// teste = async () => {
//     try{
//         const r = await f()
//         console.log(r)
//         res.send(r)
//    }
//    catch (err){
//     console.log(err)
//    }
// }