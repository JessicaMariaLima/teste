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
    res.render('pages/home', {
        name: 'João',
        lastName: 'Silva',
        age: 20,
        showAge,
        produtos: [
            { titulo: 'Produto x', Preco: 200 },
            { titulo: 'Produto y', Preco: 290 },
            { titulo: 'Produto Z', Preco: 450 },

        ],

        frases: ["Frase 1", "Frase 2", "Frase 3"

        ]

    })
})
// let user : string = "Jess Lima"

// router.get('/contato', (req: Request, res: Response) =>{
//     res.send("Esta é a página de contato")
// })

router.get('/sobre', (req: Request, res: Response) => {
    res.render('pages/about')

})




router.get('/contato', (req: Request, res: Response) => {
    res.send("Contato = 11 9588-5222")
})

router.get('/nome', (req: Request, res: Response) => {


    let nome: string = req.query.nome as string
    let idade: any = req.query.idade as any
    let contato: any = req.query.contato as any
    let endereco: string = req.query.endereco as string

    res.render('pages/nome', {
        nome,
        idade,
        contato,
        endereco
    })
})



// Página Idade

router.get('/age', (req: Request, res: Response) => {
    res.render('pages/age')
})


router.post('/age', (req: Request, res: Response) => {

    let age: any = req.body.age as any

    res.render('pages/age', {
        age,
    })

})


//Página de login

router.get('/login', (req: Request, res: Response) => {
    res.render('pages/login')

})

router.post('/login', (req: Request, res: Response) => {
    res.render('pages/login', {

        usuario,
        password        
    })
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