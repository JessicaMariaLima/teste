import { info } from 'console'
import express, { Router, Request, Response } from 'express'
import { request, Server } from 'http'
import * as homeController from '../controllers/homeController'
import * as infoController from '../controllers/infoController'
import * as userController from '../controllers/userController'
const router = Router()

//criando a primeira rota
// router.get("/",(req,res) => {
//     res.send("Olá Mundo!")
// })

router.get("/",homeController.home) 

router.get('/sobre',infoController.contato) 

router.get('/contato', infoController.sobre) 

router.get('/nome', userController.nome)

router.get('/age', userController.age)


router.post('/age', userController.ageResult) 
//Página de login

// router.get('/login', (req: Request, res: Response) => {
//     res.render('pages/login')

// })

// router.post('/login', (req: Request, res: Response) => {
//     res.render('pages/login')

    
// })





// Rota estática

router.get('/noticia/titulo-da-noticia', (req: Request, res: Response) => {
    res.send("Noticia Aparecendo na Tela")
})

//Rota dinâmica
router.get('/noticia/:slug', (req: Request, res: Response) => {
    let slug: string = req.params.slug
    res.send(`Noticia: ${slug}`)
})

router.get('/voo/:origem-:destino', (req: Request, res: Response) => {
    let { origem, destino } = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})
// forma de acesso http://localhost:3000/voo/sp-rj


export default router 