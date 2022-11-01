import { IObservable } from "./IObservable";
import { GenericData } from "./GenericData"
import { IObserver } from "./IObserver";

export class ConcreteSubject implements IObservable<GenericData> {

  private identifier: string;
  private observers: IObserver<GenericData>[] = [];

  constructor (identifier: string) {
    this.identifier = identifier;
  }

  addObserver(observer: IObserver<GenericData>) {
    console.log(`Add observer ${observer.identifier}`);
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver<GenericData>) {
    console.log(`Remove observer ${observer.identifier}`);
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  publishInfo(data: GenericData) {
    console.log(`Subject ${this.identifier} will send new info to the observers`);
    this.notifyObservers(data);
  }

  notifyObservers(data: GenericData) {
    this.observers.forEach(observer => {
      observer.update(data);
    })
  }

}