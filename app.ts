import { BonusAccount } from './class/BonusAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// console.log(peopleAccount)
// peopleAccount.deposit(200)
// peopleAccount.getBalance()
// peopleAccount.withdraw(200)
// peopleAccount.getBalance()
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// companyAccount.deposit(100)
companyAccount.getLoan(300)
companyAccount.withdraw(200)
console.log(companyAccount.getBalance())

const bonusAcc: BonusAccount = new BonusAccount("Josué", 31)

bonusAcc.withdrawBonus(100)
console.log(bonusAcc.getBalance())