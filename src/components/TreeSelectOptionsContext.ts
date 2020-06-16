import React from "react";
import TreeSelectOptions from "../types/TreeSelectOptions";

export const defaultOptions: Required<TreeSelectOptions> = {
  singleSelection: false,
  cascadeSelection: true,
  simplifyResult: true,
  classNames: {
    treeSelectRoot: "tree-select",
    treeNode: "tree-select__node",
    indent: "tree-select__indent",
    expandWrapper: "tree-select__expand-wrapper",
    expand: "tree-select__expand",
    label: "tree-select__label",
    checkbox: "tree-select__checkbox",
    checkboxHasSelectedChildren: "tree-select__checkbox--has-selected-children"
  }
};

const TreeSelectOptionsContext = React.createContext<TreeSelectOptions>(defaultOptions);

export default TreeSelectOptionsContext;