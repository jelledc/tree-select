import React, { useContext } from "react";
import TreeSelectOptionsContext from "./TreeSelectOptionsContext";

const Indent: React.FC<IndentProps> = props => {
  const options = useContext(TreeSelectOptionsContext);

  return (
    <span
      className={options.classNames.indent}
      style={{ width: `${props.width * 1}em` }}>
      &nbsp;
    </span>
  );
};

export default Indent;

interface IndentProps {
  width: number;
}
