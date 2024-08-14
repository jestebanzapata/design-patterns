import { IValidatorStrategy } from "./IValidatorStrategy";

export class StringValidatorContext {

    private strategy: IValidatorStrategy<string>;

    constructor (strategy: IValidatorStrategy<string>){
        this.strategy = strategy; 
    }

    setStrategy (strategy: IValidatorStrategy<string>) {
        this.strategy = strategy; 
    }

    validate(data: string) {
        return this.strategy.validate(data);
    }
    
}