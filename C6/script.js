const studentsList = [
    {
        studentName: 'Sharleen Rollo',
        phoneNumber: '32432543543',
        age: 24,
        hobbies: ['footbal']
    },
    {
        studentName: 'Della Wally',
        phoneNumber: '3454365464',
        age: 22,
        hobbies: ['book', 'handball']
    },
    {
        studentName: '"Ryana Ami',
        phoneNumber: '45645764',
        age: 30,
        hobbies: ['music']
    },
    {
        studentName: 'Lydia Mercy',
        phoneNumber: '45654768',
        age: 29,
        hobbies: ['book']
    },
    {
        studentName: 'Mikey Valorie',
        phoneNumber: '56897678756',
        age: 25,
        hobbies: ['gaming']
    },
    {
        studentName: '"Chester Lexie',
        phoneNumber: '346786943',
        age: 36,
        hobbies: ['football', 'handball']
    },
    {
        studentName: 'Adaly Goddard',
        phoneNumber: '45786645345',
        age: 39,
        hobbies: ['handball']
    },
    {
        studentName: 'Johnnie Peta',
        phoneNumber: '34567668654',
        age: 25,
        hobbies: ['football', 'music']
    },
    {
        studentName: 'Natille Nigellus',
        phoneNumber: '45765687967',
        age: 27,
        hobbies: ['music']
    }
]

let allStudents = [];

for (let i = 0; i < studentsList.length; i++) {
    let student = new Student(studentsList[i].studentName, studentsList[i].phoneNumber, studentsList[i].age);
    student.setHobbies(studentsList[i].hobbies);
    // console.log(student);
    allStudents[allStudents.length] = student;  
}

console.log(allStudents);

console.log('Student Message: ' + allStudents[5].greetings());

for (let i = 0; i < allStudents.length; i++){
    if (allStudents[i].getHobbies().includes('music') || allStudents[i].getHobbies().includes('book')) {
        console.log(allStudents[i].greetings())
    }
}