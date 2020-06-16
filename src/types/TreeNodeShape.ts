export default interface TreeNodeShape {
  id: string;
  label: string;
  children?: TreeNodeShape[];
};
