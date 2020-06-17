export default interface TreeNodeShape {
  id: string;
  label: string;
  disabled?: boolean;
  children?: TreeNodeShape[];
};
