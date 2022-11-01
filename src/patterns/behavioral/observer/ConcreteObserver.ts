import { GenericData } from "./GenericData";
import { IObserver } from "./IObserver";

export class ConcreteObserver implements IObserver<GenericData> {

  identifier: string;

  private observers: IObserver<GenericData>[] = [];

  constructor (identifier: string){
    this.identifier = identifier;
  }


  update(info: GenericData) {
    console.log(`Observer ${this.identifier} reveices new info: ${info.data}`);
  }
}