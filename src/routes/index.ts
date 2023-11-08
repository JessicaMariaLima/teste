import express, {Router,Request, Response} from 'express'
import {Server} from 'http'

const router = Router()

//criando a primeira rota
router.get("/",(req,res) => {
    res.send("Olá Mundo!")
})


router.get('/contato', (req: Request, res: Response) =>{
    res.send("Esta é a página de contato")
})

// Rota estática

router.get('/noticia/titulo-da-noticia', (req: Request, res: Response) =>{
    res.send("Noticia Aparecendo na Tela")
})

//Rota dinâmica
router.get('/noticia/:slug', (req:Request, res: Response) =>
{
    let slug: string = req.params.slug
    res.send(`Noticia: ${slug}`)
})

router.get('/voo/:origem-:destino', (req:Request, res:Response) =>{
    let {origem,destino} = req.params
    res.send(`Procurando voos de ${origem} até ${destino}`)
})
// forma de acesso http://localhost:3000/voo/sp-rj


export default router 