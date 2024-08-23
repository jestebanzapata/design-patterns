

export interface IComponent {

  id: string;

  payload: {
    deviceId: string;
    data: string;
  };

  timestamp: number;

  processData();

}