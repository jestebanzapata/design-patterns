

export interface ITreeNode {

  identifier: string;

  children: ITreeNode[];

  addNode(ITreeNode);

  removeNode(ITreeNode);

}