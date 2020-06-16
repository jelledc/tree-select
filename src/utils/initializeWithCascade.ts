import cascadeSelection from "./cascadeSelection";
import PathMap from "../types/PathMap";

function initializeWithCascade(selectedNodeIds: string[], pathMap: PathMap) {
  let result = [...selectedNodeIds];

  for (const id of selectedNodeIds) {
    result = cascadeSelection(result, id, pathMap);
  }

  return result;
}

export default initializeWithCascade;