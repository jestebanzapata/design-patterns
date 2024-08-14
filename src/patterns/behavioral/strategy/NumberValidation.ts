import { IValidatorStrategy } from "./IValidatorStrategy";

export class NumberValidation implements IValidatorStrategy<string>{

    /**
     * Validates if the string is a number
     * @param data 
     * @returns 
     */
    validate(data: string) {
        return !isNaN(Number(data));
    }
    
}