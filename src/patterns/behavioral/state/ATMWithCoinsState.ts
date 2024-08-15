import { ATMContext } from "./ATMContext";
import { ATMEmpty } from "./ATMEmptyState";
import { ATMFull } from "./ATMFullState";
import { IATMState } from "./IATMState";

export class ATMWithCoins implements IATMState{
    coins: number;
    withdrawMoney(ATM: ATMContext, amount: number) {
        if(amount <= ATM.coins){
            ATM.coins = ATM.coins- amount;
            console.log("Monedas retiradas: ", amount, " , Monedas en cajero: ", ATM.coins);
            if(ATM.coins == 0){
                ATM.setState = new ATMEmpty();
            }

        }else {
            console.error("Operación invalida, monedas cajero: ", ATM.coins, " , monedas solicitadas: ", amount);         
        }
    }
    depositMoney(ATM: ATMContext, amount: number) {
        const newCoinsValue = ATM.coins + amount;
        if(newCoinsValue > ATM.getLimit){
            console.error("Operación invalida, supera limite máximo cajero. Monedas cajero: ", ATM.coins);        
        }else{
            ATM.coins = newCoinsValue;
            if(newCoinsValue == ATM.getLimit){                
                ATM.setState = new ATMFull();
            }
        }
        
    }

}