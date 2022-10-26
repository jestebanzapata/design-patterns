import { IObservable } from "./IObservable";
import { GenericData } from "./GenericData"
import { IObserver } from "./IObserver";

export class ConcreteSubject implements IObservable<GenericData> {

  private observers: IObserver<GenericData>[];

  addObserver(observer: IObserver<GenericData>) {
    this.observers.push(observer);
  }

  removeObserver(observer: IObserver<GenericData>) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers(data: GenericData) {
    this.observers.forEach(observer => {
      observer.update(data);
    })
  }

}