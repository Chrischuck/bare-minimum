function gradeToNumber(grade) {
  const parsedGrade = grade.toUpperCase();
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

export function gpaCalculate(courses, pastGpa, pastUnits, sweetalert) {
  const keys = Object.keys(courses);
  let totalPoints = 0;
  let totalCredits = 0;
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const { grade, units, course } = courses[key];
    const numericGrade = gradeToNumber(grade);

    if (typeof numericGrade === 'number' && grade && units) {
      totalPoints += numericGrade * Number(units);
      totalCredits += Number(units);
    } else if (typeof numericGrade !== 'number' && grade && units) {
      sweetalert(
        'Oops!',
        course ?
         `Your grade for ${course} doesn't look right!` :
         'One of your grades doesn\'t look right!',
         'warning');
      return 0;
    }
  }

  if (!isNaN(Number(pastGpa)) && !isNaN(Number(pastUnits))) {
    totalPoints += Number(pastGpa) * pastUnits;
    totalCredits += Number(pastUnits);
  }

  const toRound = ((totalPoints / totalCredits) * 1000) % 10 >= 5;
  const calculatedGpa = toRound ?
    Math.ceil((totalPoints / totalCredits) * 100) / 100 :
    Math.floor((totalPoints / totalCredits) * 100) / 100;
  if (isNaN(calculatedGpa)) {
    return 0;
  }
  return (calculatedGpa * 10) % 10 !== 0 ?
    calculatedGpa.toFixed(2) :
    calculatedGpa.toFixed(1);
}
