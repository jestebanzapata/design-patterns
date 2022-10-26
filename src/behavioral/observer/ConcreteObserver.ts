import { GenericData } from "./GenericData";
import { IObserver } from "./IObserver";

export class ConcreteObserver implements IObserver<GenericData> {

  constructor (){

  }

  update(data: GenericData) {
    throw new Error("Method not implemented.");
  }
}