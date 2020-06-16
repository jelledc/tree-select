import React from "react";
import TreeSelectOptions from "../types/TreeSelectOptions";
import TreeSelectOptionsContext, { defaultOptions } from "./TreeSelectOptionsContext";
import TreeSelectRoot from "./TreeSelectRoot";
import TreeNodeShape from "../types/TreeNodeShape";

const TreeSelect: React.FC<TreeSelectProps> = props => {
  const options: Required<TreeSelectOptions> =
    Object.assign({}, defaultOptions, props.options);

  return (
    <TreeSelectOptionsContext.Provider value={options}>
      <TreeSelectRoot
        nodes={props.nodes}
        expandedNodeIds={props.expandedNodeIds}
        selectedNodeIds={props.selectedNodeIds}
        onSelectionChange={props.onSelectionChange} />
    </TreeSelectOptionsContext.Provider>
  );
};

export default TreeSelect;

interface TreeSelectProps {
  nodes: TreeNodeShape[];
  selectedNodeIds?: string[];
  expandedNodeIds?: string[];
  options?: TreeSelectOptions;
  onSelectionChange?: (ids: string[]) => void;
};