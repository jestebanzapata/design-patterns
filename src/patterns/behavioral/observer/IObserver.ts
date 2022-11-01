

export interface IObserver<T> {

  identifier: string;

  update(data: T);

}