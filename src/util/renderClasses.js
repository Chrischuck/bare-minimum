const courses = [
    {
        class: 'Math 133A',
        grade: 'A+',
        units: '3',
    },
    {
        class: 'Astro 10',
        grade: 'A',
        units: '2',
    },
    {
        class: 'Phys 50',
        grade: 'B+',
        units: '4',
    },
    {
        class: 'Math 129A',
        grade: 'A-',
        units: '3',
    },
    {
        class: 'Math 42',
        grade: 'A-',
        units: '3',
    },
    {
        class: 'CS46B',
        grade: 'A',
        units: '4',
    },
    {
        class: 'Kin 08',
        grade: 'A+',
        units: '2',
    },
];

function renderCategories(index) {
    let course = {
        class: 'Class',
        grade: 'A++',
        units: '4.20',
    }
    if (index < courses.length) {
        course = courses[index];
    }

    return {
        firstColInputProps: {
            placeholder: course.class
        },
        secondColInputProps: {
            placeholder: course.grade
        },
        thirdColInputProps: {
            placeholder: course.units
        }
    }
}

export default renderCategories