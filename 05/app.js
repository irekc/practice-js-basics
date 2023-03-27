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
            let sumGrade = 0;
            let lengthSubject = 0;
            for(const key in this.grades) {
                const sum = this.grades[key].reduce(function(total, num) {
                    return total + num
                });
                sumGrade += sum;
                lengthSubject += this.grades[key].length;
                console.log(sumGrade, lengthSubject);
            }
            return sumGrade / lengthSubject;

        } else {
            const sum = this.grades[subject].reduce(function(total, num) {
                return total + num;
            });
            return sum / this.grades[subject].length;
        }
    }

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
student.addGrade('polish', 2);
student.addGrade('polish', 5);
const avgMath = student.getAverageGrade('maths'); // 5
const avgGrades= student.getAverageGrade(); // 5
console.log(student);
console.log(avgMath, avgGrades);
