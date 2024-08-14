import { IValidatorStrategy } from "./IValidatorStrategy";

export class EmailValidation implements IValidatorStrategy<string>{

    /**
     * Validates if the string is a valid email
     * @param data 
     * @returns 
     */
    validate(data: string) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(data);
    }
    
}