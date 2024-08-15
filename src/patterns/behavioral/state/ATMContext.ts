import { ATMEmpty } from './ATMEmptyState';
import { IATMState } from './IATMState';

export class ATMContext {

    private state: IATMState;

    private limit: number;

    coins: number;

    constructor(limit: number){
        this.state = new ATMEmpty();
        this.limit = limit;
    }

    get getLimit() {
        return this.limit;
    }

    set setState(state: IATMState){
        this.state = state;
    }

    get getState(){
        return this.state;
    }

    withdrawMoney(amount: number){
        this.state.withdrawMoney(this, amount);
    }

    depositMoney(amount: number){
        this.state.depositMoney(this, amount);
    }

}