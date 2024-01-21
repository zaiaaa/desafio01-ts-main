export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Voce depositou ${value} R$`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && (value <= this.balance)){
      this.balance = this.balance - value
      console.log(`Voce sacou ${value} R$`)
    }else{
      console.log(`Saldo insuficiente.`)
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance(value: number): number{
    this.balance += value

    return this.balance
  }

  //métodos em arrow functions NÃO são herdados
  validateStatus():boolean{
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

}
