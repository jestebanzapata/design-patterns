import { ATMContext } from "./ATMContext";


export interface IATMState {

  withdrawMoney(ATM: ATMContext, amount: number);

  depositMoney(ATM: ATMContext, amount: number);

}