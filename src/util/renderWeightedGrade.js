const courses = [
    {
    category: 'Homework',
    grade: '85%',
    weight: '30%',
    },
    {
    category: 'Midterm 1',
    grade: '90%',
    weight: '15%',
    },
    {
    category: 'Midterm 2',
    grade: '95%',
    weight: '15%',
    },
    {
    category: 'Participation',
    grade: '100%',
    weight: '5%',
    },
    {
    category: 'Clickers',
    grade: '98%',
    weight: '10%',
    },
    {
    category: 'Essays',
    grade: '87%',
    weight: '15%',
    },
    {
    category: 'Assignments',
    grade: '99%',
    weight: '25%',
    },
];

function renderCategories(index) {
    let course = {
        category: 'Stuff',
        grade: '100%',
        weight: '100%',
    }
    if (index < courses.length) {
        course = courses[index];
    }

    return {
        firstColInputProps: {
            placeholder: course.category
        },
        secondColInputProps: {
            placeholder: course.grade
        },
        thirdColInputProps: {
            placeholder: course.weight
        }
    }
}

export default renderCategories