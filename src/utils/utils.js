export const sortByNameUserFirst = (members) => {
  const sortedMembers =  members.toSorted((a, b) => {
    if (a.name.toLowerCase() === "you") {
      return -1;
    } else if (b.name.toLowerCase() === "you") {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  
  return sortedMembers;
}