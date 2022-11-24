import SingletonDataManager from "./SingletonDataManager";

SingletonDataManager.addElement("Item1");
SingletonDataManager.addElement("Item2");

console.log("DataList => ", SingletonDataManager.getDataList());
SingletonDataManager.removeElement("Item1");
console.log("DataList => ", SingletonDataManager.getDataList());
console.log("Index Item2 => " , SingletonDataManager.getElementByIndex(0));