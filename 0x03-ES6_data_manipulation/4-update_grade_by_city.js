export default function updateStudentGradeByCity(list, city, newGrades) {
  if (Array.isArray(list, newGrades) && typeof city === 'string') {
    const newList = list.filter((element) => element.city === city);
    const finalList = newList.map((element) => {
      if (newGrades.studentId === element.id) {
        element.grade = newGrades.grade;
      } else {
        element.grade = 'NA';
      }
      return finalList;
    });
  }
  return [];
}
