let instance: DataManager;

class DataManager {
  private static instance: DataManager;
  private dataList: string[];

  private constructor() {
    this.dataList = [];
  }

  static getInstance() {
    if(!this.instance){
      this.instance = new DataManager();
    }
    return this.instance;
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

const singletonDataManager = DataManager.getInstance();
export default singletonDataManager;