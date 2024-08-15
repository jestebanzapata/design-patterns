import { ATMContext } from "./ATMContext";
import { ATMEmpty } from "./ATMEmptyState";
import { ATMWithCoins } from "./ATMWithCoinsState";
import { IATMState } from "./IATMState";

export class ATMFull implements IATMState{
    coins: number;
    withdrawMoney(ATM: ATMContext, amount: number) {
        if(amount <= ATM.getLimit){
            ATM.coins = --amount;

            if(ATM.coins == 0){
                ATM.setState = new ATMEmpty();
            }else{
                ATM.setState = new ATMWithCoins();
            }

        }else {
            console.error("Operación invalida, monedas cajero: ", ATM.coins, " , monedas solicitadas: ", amount);            
        }
    }
    depositMoney(ATM: ATMContext, amount: number) {
        console.log("Operación invalida, cajero lleno.");        
    }

}