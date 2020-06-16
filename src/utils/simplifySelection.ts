import { getChildNodeIds } from "./cascadeSelection";
import PathMap from "../types/PathMap";

function simplifySelection(selectedNodeIds: string[], pathMap: PathMap) {
  let result = [...selectedNodeIds];

  for (const id of selectedNodeIds) {
    const childNodeIds = getChildNodeIds(pathMap, id) ?? [];
    for (const childNodeId of childNodeIds) {
      if (result.includes(childNodeId)) {
        result.splice(result.indexOf(childNodeId), 1);
      }
    }
  }

  return result;
}

export default simplifySelection;