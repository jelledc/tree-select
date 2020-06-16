import React from "react";
import TreeSelect from "./TreeSelect"
import data from "./TreeSelect.dummyNodes.json";
import "./TreeSelect.scss";

export default {
  title: "TreeSelect",
  component: TreeSelect
};

export const Cascading = () => (
  <TreeSelect
    nodes={data} />
);

export const NonCascading = () => (
  <TreeSelect
    nodes={data}
    options={{
      cascadeSelection: false
    }} />
)

export const SingleSelection = () => (
  <TreeSelect
    nodes={data}
    options={{
      singleSelection: true
    }} />
);