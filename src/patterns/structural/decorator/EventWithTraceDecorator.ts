import { EventDecorator } from "./EventDecorator";
import { IComponent } from "./IComponent";

export class EventWithTraceDecorator extends EventDecorator {

  constructor(component: IComponent){
    super(component);
  }

  processData(): void {
    console.log("Send event to logger");
    this.component.processData();
  }

}