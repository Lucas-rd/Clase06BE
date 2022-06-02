const express = require('express')
const app = express()
const puerto = 8080

app.get('/', (req,res)=>{
    res.send("Hola soy home")
})

app.get('/user/:id/:nombre', (req,res)=>{
    const {id, nombre} = req.params

    console.log(req.params)
    res.send(`Hola soy user: ${id} ${nombre}`)
})

app.get('/productos', (req,res)=>{
    res.send("Hola soy los productos de ropa get")
})

app.post('/productos', (req,res)=>{
    res.send("Hola soy los productos de ropa post")
})

app.listen(puerto, ()=>{
    console.log(`Servidor inciado en puerto: ${puerto}`)
})