import { IValidatorStrategy } from "./IValidatorStrategy";

export class RequiredValidation implements IValidatorStrategy<string>{

    /**
     * Validates if the string is not empty
     * @param data 
     * @returns 
     */
    validate(data: string) {
        return data?.trim() !== '';
    }
    
}