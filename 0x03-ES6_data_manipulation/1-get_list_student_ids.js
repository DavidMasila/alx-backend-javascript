export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    const listofIds = [];
    for (let i = 0; i < list.length; i++) {
      listofIds.push(list[i].id);
    }

    return listofIds;
  } else {
    return [];
  }
}
