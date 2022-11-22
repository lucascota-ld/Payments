import repository from '../models/accounts-model';
import {Request, Response} from 'express';
import {IAccount} from '../models/accounts'

async function addAccount(req:Request, res:Response){
    try {
        const account = req.body as IAccount
        account.balance = 100.00
        const result = await repository.add(account)

        account.id = result.id
        return account

    } catch (error) {
        res.status(400).json(error)
    }
}

async function getAccountId(req:Request, res:Response, id:number){
    try {
        const account = id
        if(!account) throw new Error('Id is invalid formtat!')

        const result = await repository.findId(account)
        return result
    } catch (error) {
        res.status(400).json(error)
    }
}

/*async function setAccount(req:Request, res:Response, id:number, value:any){
    try {
        const accountId = id
        if(!accountId) throw new Error('Id is invalid formtat!')

        const account = req.body as IAccount
        account.balance += value
        
        const newAccount = await repository.set(accountId, account)
        return newAccount
        res.status(200).json(newAccount)
    } catch (error) {
        res.status(400).json(error)
    }
}*/


export default {addAccount, getAccountId, }