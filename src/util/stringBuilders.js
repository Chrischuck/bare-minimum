export function calculatorStringBuilder(finalScore, requiredGrade) {
  let answerString = '';
  const score = Number(finalScore);

  if (score <= 50) {
    answerString += 'You only need ';
  } else {
    answerString += 'You will need at least ';
  }

  answerString += `${`${finalScore}` +
                    '% on your final to get a '}${
                    requiredGrade
                    }% overall.`;

  if (score > 100) {
    answerString += ' May the force be with you!';
  }
  if (score <= 100 && score >= 90) {
    answerString += ' You can do it!';
  }
  if (score < 90 && score >= 70) {
    answerString += ' You got this in the bag!';
  }
  if (score < 70 && score >= 0) {
    answerString += ' What\'s the point of studying honestly?';
  }
  if (score < 0) {
    answerString += ' Just stay in bed at this point!';
  }
  return answerString;
}

export function gpaStringBuilder(gpa) {
  const numbericGpa = Number(gpa);
  if (numbericGpa >= 4) {
    return `Damn you're rocking a ${gpa}`;
  }
  if (numbericGpa < 4 && numbericGpa >= 3.8) {
    return `Good job you have a solid ${gpa}`;
  }
  if (numbericGpa < 3.8 && numbericGpa >= 3) {
    return `Awesome you got a ${gpa}`;
  }
  if (numbericGpa < 3 && numbericGpa >= 2.5) {
    return `Not bad, you're getting a ${gpa}`;
  }
  if (numbericGpa < 2.5) {
    return `You have a ${gpa}`;
  }
  return '';
}

export function simpleErrorStringBuilder(payload = {}) {
  const keys = Object.keys(payload);
  let baseString = 'Please input your';
  const emptyKeys = keys.filter(key => payload[key] === '');
  if (emptyKeys.length < 1) {
    return '';
  } else if (emptyKeys.length === 1) {
    baseString += ` ${emptyKeys[0]},`;
    return baseString;
  }
  for (let i = 0; i < emptyKeys.length - 1; i++) {
    baseString += ` ${emptyKeys[i]}${emptyKeys.length > 2 ? ',' : ''}`;
  }
  const lastIndex = emptyKeys.length - 1;
  baseString += ` and ${emptyKeys[lastIndex]}.`;
  return baseString;
}
