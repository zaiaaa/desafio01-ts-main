import { DioAccount } from "./DioAccount";

export class BonusAccount extends DioAccount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    withdrawBonus(value: number){
        const bonus = 10
        this.setBalance(value + bonus)
        console.log(`Você depositou ${value} R$ e teve ${bonus} de bônus.`)
    }
}