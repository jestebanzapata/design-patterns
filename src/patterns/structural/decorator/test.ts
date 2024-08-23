import { EventComponent } from "./EventComponent";
import { EventWithTraceDecorator } from "./EventWithTraceDecorator";


const eventComponent: EventComponent = new EventComponent("1", {data: "test", deviceId: "1"}, 123);
eventComponent.processData();

console.log("------------------------");

const eventWithTraceDecorator: EventWithTraceDecorator = new EventWithTraceDecorator(eventComponent);
eventWithTraceDecorator.processData();