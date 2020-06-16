function changeSingleSelected(id: string, selected: boolean) {
  if (selected) {
    return [id];
  } else {
    return [];
  }
}

export default changeSingleSelected;