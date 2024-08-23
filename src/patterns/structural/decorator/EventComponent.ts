import { IComponent } from "./IComponent";

export class EventComponent implements IComponent {

  id: string;
  payload: IPayload;
  timestamp: number;

  constructor(id: string, payload: IPayload, timestamp: number){
    this.id = id;
    this.payload = payload;
    this.timestamp = timestamp;
  }

  processData() {
    console.log("Send data to endpoint: ", {...this})
  }

}

interface IPayload {
  deviceId: string; 
  data: string;
}