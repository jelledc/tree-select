import React, { ChangeEventHandler, useContext } from "react";
import Indent from "./Indent";
import TreeNodeShape from "../types/TreeNodeShape";
import TreeSelectOptionsContext from "./TreeSelectOptionsContext";
import hasSelectedChildren from "../utils/hasSelectedChildren";

const TreeNode: React.FC<TreeNodeProps> = props => {
  const options = useContext(TreeSelectOptionsContext);

  const handleSelectionChange: ChangeEventHandler<HTMLInputElement> = e => {
    props.onSelectionChange(props.id, e.target.checked);
  };

  const handleExpandedChange: ChangeEventHandler<HTMLInputElement> = e => {
    props.onExpansionChange(props.id, e.target.checked);
  };

  return (
    <>
      <div className={options.classNames.treeNode}>
        <Indent width={props.depth} />
        <span className={options.classNames.expandWrapper}>
          {props.children && props.children.length > 0 && (
            <input
              type="checkbox"
              className={options.classNames.expand}
              checked={props.expandedNodeIds.includes(props.id)}
              onChange={handleExpandedChange} />
          )}
        </span>
        <label className={options.classNames.label}>
          <input
            type="checkbox"
            disabled={props.disabled}
            className={[
              options.classNames.checkbox,
              hasSelectedChildren(props.children, props.selectedNodeIds) && options.classNames.checkboxHasSelectedChildren
            ].filter(className => className).join(" ")}
            checked={props.selectedNodeIds.includes(props.id)}
            onChange={handleSelectionChange} />
          {props.label}
        </label>
      </div>
      {props.expandedNodeIds.includes(props.id) && props.children?.map(node =>
        <TreeNode
          key={node.id}
          id={node.id}
          label={node.label}
          disabled={node.disabled}
          children={node.children}
          depth={props.depth + 1}
          selectedNodeIds={props.selectedNodeIds}
          expandedNodeIds={props.expandedNodeIds}
          onSelectionChange={props.onSelectionChange}
          onExpansionChange={props.onExpansionChange} />
      )}
    </>
  )
};

export default TreeNode;

interface TreeNodeProps extends TreeNodeShape {
  depth: number;
  selectedNodeIds: string[];
  expandedNodeIds: string[];
  onSelectionChange: (id: string, selected: boolean) => void;
  onExpansionChange: (id: string, expanded: boolean) => void;
}