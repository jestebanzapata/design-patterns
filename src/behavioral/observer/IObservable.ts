import { IObserver } from "./IObserver";

export interface IObservable<T> {

  addObserver(observer: IObserver<T>);

  removeObserver(observer: IObserver<T>);

  notifyObservers(data: T);

}