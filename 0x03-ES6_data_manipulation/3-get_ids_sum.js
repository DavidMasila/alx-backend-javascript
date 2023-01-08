export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    const totalIds = list.reduce((total, element) => total + element.id);
    return totalIds;
  }
  return [];
}
