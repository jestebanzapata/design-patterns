import { ATMContext } from "./ATMContext";
import { ATMFull } from "./ATMFullState";
import { ATMWithCoins } from "./ATMWithCoinsState";
import { IATMState } from "./IATMState";

export class ATMEmpty implements IATMState{
    coins: number;
    withdrawMoney(ATM: ATMContext, amount: number) {
        console.error("Operación invalida, cajero vacio, monedas solicitadas: ", amount);
    }
    depositMoney(ATM: ATMContext, amount: number) {
        if(ATM.getLimit < amount){
            console.error("Operación invalida, limite máximo de monedas de:", ATM.getLimit);
        }else {
            ATM.coins = amount;           
            console.log("Monedas depositadas: ", amount, " Monedas en cajero: ", ATM.coins) 
            if(ATM.getLimit == ATM.coins){
                ATM.setState = new ATMFull();
            } else {                ;
                ATM.setState = new ATMWithCoins();
            }
        }
    }

}