// export default function updateStudentGradeByCity(list, city, newGrades) {
//   const defaultGrade = { grade: 'N/A' };

//   if (list instanceof Array) {
//     return list
//       .filter((list) => list.location === city)
//       .map((list) => ({
//         id: list.id,
//         firstName: list.firstName,
//         location: list.location,
//         grade: (newGrades
//           .filter((grade) => grade.studentId === list.id)
//           .pop() || defaultGrade).grade
//       }));
//   }
//   return [];
// }

// export default function getStudentsByLocation(array, city, grad) {
//     return array
//       .filter((i) => i.location === city)
//       .map((student) => {
//         const gradeI = grad
//           .filter((i) => i.studentId === student.id)
//           .map((x) => x.grade)[0];
//         const grade = gradeI || 'N/A';
//         return { ...student, grade };
//       });
//   }

export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((element) => element.location === city)
    .map((element) => {
      if (element.id === newGrades.studentId) {
        element.grade = newGrades.grade;
      } else {
        element.grade = 'NA';
      }
    });
}
