function changeMultipleSelected(selectedNodeIds: string[], id: string, selected: boolean) {
  const index = selectedNodeIds.indexOf(id);

  if (selected) {
    return index === -1 ? [...selectedNodeIds, id].sort() : selectedNodeIds;
  } else {
    return index > -1 ? [
      ...selectedNodeIds.slice(0, index),
      ...selectedNodeIds.slice(index + 1)
    ].sort() : selectedNodeIds;
  }
}

export default changeMultipleSelected;