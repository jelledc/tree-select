import TreeSelectClassNames from "./TreeSelectClassNames";

export default interface TreeSelectOptions {
    /**
     * Restricts selection to 1 item.
     * Defaults to false.
     */
    singleSelection?: boolean;

    /**
     * Restricts selection to 1 item.
     * Defaults to true.
     */
    cascadeSelection?: boolean;

    /**
     * Omits child nodes from the result if their parent node has been selected.
     * Has no effect if singleSelection is true.
     * Defaults to true.
     */
    simplifyResult?: boolean;

    classNames?: TreeSelectClassNames;
};