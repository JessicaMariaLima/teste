// importando a biblioteca
import express, {Request, Response} from 'express'
import {Server} from 'http';
import path from 'path';
import mustache from 'mustache-express';
// importando nosso arquivo index
import mainRoutes from './routes/index'
import dotenv from 'dotenv';


//usando dotenv
dotenv.config()

//usando EXPRESS
const server = express()
 
//configurando mustache
server.set('view engine','mustache')

//configurando o caminho da pasta views
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())
 
//configurando o caminho da pasta public
server.use(express.static(path.join(__dirname,'../public')))
 
// Configurando o protocolo POST
server.use(express.urlencoded({extended:true}))


server.use(mainRoutes)
 
//criando a página não encontrada
server.use((req:Request, res: Response) =>{
    res.status(404).send('Página não encontrada')
})
 
//gerando o servidor na porta 3000
server.listen(process.env.PORT)