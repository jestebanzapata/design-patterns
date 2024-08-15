import { ATMContext } from "./ATMContext";

const ATM = new ATMContext(10);

ATM.withdrawMoney(10);

ATM.depositMoney(5);

ATM.withdrawMoney(8);

ATM.withdrawMoney(5);