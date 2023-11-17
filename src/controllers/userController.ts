import { Request, Response } from "express";

export const nome = ((req: Request, res: Response) => {


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


export const age = ((req: Request, res: Response) => {

 
    res.render('pages/age')
    
})


export const ageResult = ((req: Request, res: Response) => {

 
    let age: any = req.body.age as any

    res.render('pages/age', {
        age,
    })
    
})



