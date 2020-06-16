import TreeNodeShape from "../types/TreeNodeShape";

export default function hasSelectedChildNodes(childNodes: TreeNodeShape[], selectedNodeIds: string[]): boolean {
  return childNodes?.some(node => selectedNodeIds.includes(node.id) || hasSelectedChildNodes(node.children, selectedNodeIds));
}