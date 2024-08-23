import { IComponent } from "./IComponent";

export abstract class EventDecorator implements IComponent {
  id: string;
  payload: { deviceId: string; data: string; };
  timestamp: number;
  protected component: IComponent;

  constructor(component: IComponent){
    this.component = component;
  }

  processData() {
    this.component.processData();
  }

}