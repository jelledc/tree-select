import TreeNodeShape from "../types/TreeNodeShape";
import PathMap from "../types/PathMap";

function buildPathMap(nodes: TreeNodeShape[], parentNodeIds: string[] = []): PathMap {
  return nodes.reduce((map: PathMap, node) => {
    const currentElement = { [node.id]: [...parentNodeIds, node.id] };
    const childElements = buildPathMap(node.children ?? [], [...parentNodeIds, node.id]);
    return Object.assign(map, currentElement, childElements);
  }, {});
}

export default buildPathMap;
