import { Request, Response } from "express";

export const home = ((req: Request, res: Response) => {


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