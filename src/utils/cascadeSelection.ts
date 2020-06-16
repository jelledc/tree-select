import PathMap from "../types/PathMap";

export function getChildNodeIds(pathMap: PathMap, contextNodeId: string) {
  return Object.keys(pathMap).filter(key =>
    pathMap[key].indexOf(contextNodeId) > -1 &&
    pathMap[key].indexOf(contextNodeId) < pathMap[key].length - 1);
}

function getParentNodeIds(pathMap: PathMap, contextNodeId: string) {
  return pathMap[contextNodeId].filter(id => id !== contextNodeId).reverse()
}

function cascadeDown(selectedNodeIds: string[], contextNodeId: string, pathMap: PathMap) {
  const result = [...selectedNodeIds];
  const childNodeIds = getChildNodeIds(pathMap, contextNodeId);

  for (const id of childNodeIds) {
    if (result.includes(contextNodeId)) {
      // Add all affected node ids.
      if (!result.includes(id)) {
        result.push(id);
      }
    } else {
      // Remove all affected node ids.
      if (result.includes(id)) {
        result.splice(result.indexOf(id), 1);
      }
    }
  }

  return result;
}

function cascadeUp(selectedNodeIds: string[], contextNodeId: string, pathMap: PathMap) {
  const result = [...selectedNodeIds];
  const parentNodeIds = getParentNodeIds(pathMap, contextNodeId);

  // Traverse up the tree.
  for (const id of parentNodeIds) {
    if (getChildNodeIds(pathMap, id).every(childNodeId => result.includes(childNodeId))) {
      // Add the ids of all parent nodes that have all children selected.
      if (!result.includes(id)) {
        result.push(id);
      }
    } else {
      // Remove any id of parent nodes where not all children are selected.
      if (result.includes(id)) {
        result.splice(result.indexOf(id), 1);
      }
    }
  }

  return result;
}

function cascadeSelection(selectedNodeIds: string[], contextNodeId: string, pathMap: PathMap) {
  let result = [...selectedNodeIds];

  result = cascadeDown(result, contextNodeId, pathMap);
  result = cascadeUp(result, contextNodeId, pathMap);

  return result;
}

export default cascadeSelection;