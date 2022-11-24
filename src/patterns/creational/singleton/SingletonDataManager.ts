let instance: DataManager;

class DataManager {
  private dataList: string[] = [];

  constructor() {
    if(instance){
      throw new Error("You can only have one instance");
    }
    instance = this;
  }

  getInstance() {
    return this;
  }

  addElement(item: string) {
    this.dataList.push(item);
  }

  removeElement(item: string) {
    this.dataList = this.dataList.filter(dataItem => dataItem !== item);
  }

  getDataList(): string[] {
    return this.dataList;
  }

  getElementByIndex(itemIndex: number): string{
    return this.dataList[itemIndex];
  }
}

const singletonDataManager = new DataManager();
export default singletonDataManager;