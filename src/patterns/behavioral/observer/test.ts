import { ConcreteObserver } from "./ConcreteObserver";
import { ConcreteSubject } from "./ConcreteSubject";
import { GenericData } from "./GenericData";


const library = new ConcreteSubject('Library');

const client1 = new ConcreteObserver('Client 1');
const client2 = new ConcreteObserver('Client 2');

library.addObserver(client1);
library.addObserver(client2);

const data1 = new GenericData({ data: 'New book published: 22/11/63 Stephen king'});
library.publishInfo(data1);

library.removeObserver(client2);

const data2 = new GenericData({ data: 'New book published: The dark tower' });
library.publishInfo(data2);
