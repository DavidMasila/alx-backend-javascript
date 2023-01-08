export default function getListStudentIds(list) {
  if (Array.isArray(list)) {
    const newMap = list.map((element) => {
      return element.id;
    });
    return newMap;
  } else {
    return [];
  }
}
