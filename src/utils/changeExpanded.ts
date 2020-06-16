function changeExpanded(expandedNodeIds: string[], id: string, expanded: boolean) {
  const index = expandedNodeIds.indexOf(id);

  if (expanded) {
    return index === -1 ? [...expandedNodeIds, id].sort() : expandedNodeIds;
  } else {
    return index > -1 ? [
      ...expandedNodeIds.slice(0, index),
      ...expandedNodeIds.slice(index + 1)
    ].sort() : expandedNodeIds;
  }
}

export default changeExpanded;