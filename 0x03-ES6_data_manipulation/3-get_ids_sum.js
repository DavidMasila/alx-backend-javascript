export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    const totalIds = list.reduce((total, element) => {
      return total + element;
    });
    return totalIds;
  }
  return [];
}
