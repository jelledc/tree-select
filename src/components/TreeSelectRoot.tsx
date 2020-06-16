import React, { useState, useContext } from "react";
import TreeNode from "./TreeNode";
import changeSingleSelected from "../utils/changeSingleSelected";
import changeMultipleSelected from "../utils/changeMultipleSelected";
import changeMultipleSelectedWithCascade from "../utils/changeMultipleSelectedWithCascade";
import changeExpanded from "../utils/changeExpanded";
import initializeWithCascade from "../utils/initializeWithCascade";
import simplifySelection from "../utils/simplifySelection";
import buildPathMap from "../utils/buildPathMap";
import TreeSelectOptionsContext from "./TreeSelectOptionsContext";
import TreeNodeShape from "../types/TreeNodeShape";

const TreeSelectRoot: React.FC<TreeSelectRootProps> = props => {
  const options = useContext(TreeSelectOptionsContext);
  const pathMap = buildPathMap(props.nodes);

  const [selectedNodeIds, setSelectedNodeIds] = useState(options.cascadeSelection ?
    initializeWithCascade(props.selectedNodeIds ?? [], pathMap) :
    props.selectedNodeIds ?? []);

  const [expandedNodeIds, setExpandedNodeIds] = useState(props.expandedNodeIds ?? []);

  const handleSelectionChange = (id: string, selected: boolean) => {
    let ids = [];

    if (options.singleSelection) {
      ids = changeSingleSelected(id, selected);
    } else {
      if (options.cascadeSelection) {
        ids = changeMultipleSelectedWithCascade(selectedNodeIds, id, selected, pathMap);
      } else {
        ids = changeMultipleSelected(selectedNodeIds, id, selected);
      }
    }

    setSelectedNodeIds(ids);

    if (props.onSelectionChange) {
      props.onSelectionChange(options.simplifyResult ? simplifySelection(ids, pathMap) : ids);
    }
  };

  const handleExpandedChange = (id: string, expanded: boolean) => {
    setExpandedNodeIds(changeExpanded(expandedNodeIds, id, expanded));
  };

  return (
    <div className={options.classNames.treeSelectRoot}>
      {props.nodes.map(node =>
        <TreeNode
          key={node.id}
          id={node.id}
          label={node.label}
          children={node.children}
          depth={0}
          selectedNodeIds={selectedNodeIds}
          expandedNodeIds={expandedNodeIds}
          onSelectionChange={handleSelectionChange}
          onExpansionChange={handleExpandedChange} />
      )}
    </div>
  );
};

export default TreeSelectRoot;

interface TreeSelectRootProps {
  nodes: TreeNodeShape[];
  selectedNodeIds?: string[];
  expandedNodeIds?: string[];
  onSelectionChange?: (ids: string[]) => void;
}