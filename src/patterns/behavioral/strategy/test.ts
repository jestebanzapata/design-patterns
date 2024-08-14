import { StringValidatorContext } from "./StringValidatorContext";
import { RequiredValidation } from "./RequiredValidation";
import { NumberValidation } from "./NumberValidation";
import { EmailValidation } from "./EmailValidation";


const validatorContext = new StringValidatorContext(new RequiredValidation());


// RequiredValidation
let data = "";
let isValid = validatorContext.validate(data);
console.log(`Data:'${data}'  is valid: ${isValid} -- RequiredValidation`);

data = "Test";
isValid = validatorContext.validate(data);
console.log(`Data:'${data}'  is valid: ${isValid} -- RequiredValidation`);


// NumberValidation
validatorContext.setStrategy(new NumberValidation());
data = "12312";
isValid = validatorContext.validate(data);
console.log(`Data:'${data}'  is valid: ${isValid} -- NumberValidation`);

data = "12ds312";
isValid = validatorContext.validate(data);
console.log(`Data:'${data}'  is valid: ${isValid} -- NumberValidation`);


// EmailValidation
validatorContext.setStrategy(new EmailValidation());
data = "fsdfszxcf";
isValid = validatorContext.validate(data);
console.log(`Data:'${data}'  is valid: ${isValid} -- EmailValidation`);

data = "esteban@email.com";
isValid = validatorContext.validate(data);
console.log(`Data:'${data}'  is valid: ${isValid} -- EmailValidation`);