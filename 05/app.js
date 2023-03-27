function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {};
};

Student.prototype.addGrade = function(subject, grade) {
    if(typeof this.grades[subject] === 'undefined') {
    this.grades[subject] = [];
    }
    this.grades[subject].push(grade);
}
    
Student.prototype.getAverageGrade = function(subject) {

    if(typeof subject === 'undefined') {
        const allGrades = [];
        for(const key in this.grades) {
            const arr = this.grades[key];

            arr.forEach(function(grade) {
                allGrades.push(grade);
            });
        }

        return this.avg(allGrades);

    }
        
    if(typeof this.grades[subject] === 'undefined') {
        return 0;
    }

    return this.avg(this.grades[subject]);

}

Student.prototype.avg = function(arr) {
    if(arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce(function(sum, grade) {
        return sum + grade;
    })

    return sum / arr.length;
}

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('polish', 2);
student.addGrade('polish', 5);
const avgMath = student.getAverageGrade('maths'); // 5
const avgGrades= student.getAverageGrade(); // 4
console.log(student);
console.log(avgMath, avgGrades);
