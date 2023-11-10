import express, { Router, Request, Response } from 'express'
import { request, Server } from 'http'

const router = Router()

//criando a primeira rota
// router.get("/",(req,res) => {
//     res.send("Olá Mundo!")
// })

router.get("/", (req, res) => {

    //    let user = {
    //         name: 'José',
    //         age: 28,
    //         showWelcome : true
    //    }


    // res.render('home',{
    //     name: 'João',
    //     lastName:'Silva',
    //     age: 20,
    //     showWelcome : true
    // })

    let age: number = 20;
    let showAge: boolean = false;


    if (age >= 18) {
        showAge = true
    }
    res.render('home', {
        name: 'João',
        lastName: 'Silva',
        age: 20,
        showAge,
        produtos: [
            {titulo: 'Produto x', Preco: 200},
            {titulo: 'Produto y', Preco: 290},
            {titulo: 'Produto Z', Preco: 450},

        ]

    })
})
// let user : string = "Jess Lima"

// router.get('/contato', (req: Request, res: Response) =>{
//     res.send("Esta é a página de contato")
// })

router.get('/sobre', (req: Request, res: Response) => {
    res.render('about')

})

router.get('/contato', (req: Request, res: Response) => {
    res.send("Contato = 11 9588-5222")
})






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