export default function updateStudentGradeByCity(list, city, newGrades) {
  if (Array.isArray(list, newGrades) && typeof city === 'string') {
    const newList = list.filter((element) => element.location === city)
      .map((element) => {
        if (newGrades.id === element.id) {
          element.grade = newGrades.grade;
        } else {
          element.grade = 'NA';
        }
      });
  }
  return [];
}
