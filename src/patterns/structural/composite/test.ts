import { GenericTreeNode } from "./GenericTreeNode";
import { ITreeNode } from "./ITreeNode";

const printTreeNode = (indent: number, node: ITreeNode) => {

  console.log(Array(indent).join("--"), node.identifier);

  for (let index = 0; index < node.children.length; index++) {
    const children = node.children[index];
    printTreeNode(indent + 1, children);
  }

}

const nodeParent = new GenericTreeNode("Parent");

const nodeChild1 = new GenericTreeNode("Parent_Child1");
const nodeChild2 = new GenericTreeNode("Parent_Child2");

const nodeChild1FromChild1 = new GenericTreeNode("Child1_child1");
const nodeChild2FromChild1 = new GenericTreeNode("Child1_child2");

const nodeChild1FromChild2 = new GenericTreeNode("Child2_child1");

nodeChild1.addNode(nodeChild1FromChild1);
nodeChild1.addNode(nodeChild2FromChild1);

nodeChild2.addNode(nodeChild1FromChild2);

nodeParent.addNode(nodeChild1);
nodeParent.addNode(nodeChild2);

printTreeNode(1, nodeParent);