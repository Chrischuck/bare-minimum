export function gradeToNumber(grade, APlusCounts) {
  const parsedGrade = grade.toUpperCase();
  if (APlusCounts && parsedGrade === 'A+') {
    return 4.33;
  }
  switch (parsedGrade) {
    case 'A+':
      return 4;
    case 'A':
      return 4;
    case 'A-':
      return 3.7;
    case 'B+':
      return 3.3;
    case 'B':
      return 3.0;
    case 'B-':
      return 2.7;
    case 'C+':
      return 2.3;
    case 'C':
      return 2.0;
    case 'C-':
      return 1.7;
    case 'D+':
      return 1.3;
    case 'D':
      return 1.0;
    case 'D-':
      return 0;
    case 'F+':
      return 0;
    case 'F':
      return 0;
    case 'F-':
      return 0;
    default:
      return grade;
  }
}

