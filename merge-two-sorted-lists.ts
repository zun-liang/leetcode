const mergeTwoLists = (list1: any[], list2: any[]) => {
  if (list1.length === 0) {
    return list2;
  } else if (list2.length === 0) {
    return list1;
  } else {
    return [...list1, ...list2].sort((a, b) => a - b);
  }
};
