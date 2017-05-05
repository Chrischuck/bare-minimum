export function gradeToNumber(grade, APlusCounts, goesToHundreth) {
  const parsedGrade = grade.toUpperCase();
  switch (parsedGrade) {
    case 'A+':
      return APlusCounts ? (goesToHundreth ? 4.33 : 4.3) : 4.0;
    case 'A':
      return 4;
    case 'A-':
      return goesToHundreth ? 3.67 : 3.7;
    case 'B+':
      return goesToHundreth ? 3.33 : 3.3;
    case 'B':
      return 3.0;
    case 'B-':
      return goesToHundreth ? 2.67 : 2.7;
    case 'C+':
      return goesToHundreth ? 2.33 : 2.3;
    case 'C':
      return 2.0;
    case 'C-':
      return goesToHundreth ? 1.67 : 1.7;
    case 'D+':
      return goesToHundreth ? 1.33 : 1.3;
    case 'D':
      return 1.0;
    case 'D-':
      return goesToHundreth ? 0.7 : 0.67;
    case 'F+':
      return 0;
    case 'F':
      return 0;
    case 'F-':
      return 0;
    case 'E+':
      return 0;
    case 'E':
      return 0;
    case 'E-':
      return 0;
    default:
      return grade;
  }
}

