export class GenericData {
  data: string;

  constructor(data: Partial<GenericData> = {}) {
    Object.assign(this, data);
  }
}