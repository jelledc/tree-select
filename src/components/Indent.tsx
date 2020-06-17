import React, { useContext } from "react";
import TreeSelectOptionsContext from "./TreeSelectOptionsContext";

const Indent: React.FC<IndentProps> = props => {
  const options = useContext(TreeSelectOptionsContext);

  return (
    <>
      {[...Array(props.width).keys()].map(key =>
        <span key={key} className={options.classNames.indent}>&nbsp;</span>
      )}
    </>
  );
};

export default Indent;

interface IndentProps {
  width: number;
}
