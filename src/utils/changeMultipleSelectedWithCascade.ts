import changeMultipleSelected from "./changeMultipleSelected";
import cascadeSelection from "./cascadeSelection";
import PathMap from "../types/PathMap";

function changeMultipleSelectedWithCascade(selectedNodeIds: string[], id: string, selected: boolean, pathMap: PathMap) {
  const selectedNodeIdsBeforeCascade = changeMultipleSelected(selectedNodeIds, id, selected);
  return cascadeSelection(selectedNodeIdsBeforeCascade, id, pathMap);
}

export default changeMultipleSelectedWithCascade;