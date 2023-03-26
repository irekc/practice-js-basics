function Student(initFirstName, initLastName) {
    this.firstName = initFirstName;
    this.lastName = initLastName;
    this.grades = {
        
    }

    this.addGrade = function(subject, grade) {
        if(typeof schoolSubject === 'undefined') {
            this.grades[subject] = [];
        }
        this.grades[subject].push(grade);
        return this.grades[subject];
    }
    this.getAverageGrade = function(subject) {
        if(typeof subject !== 'undefined') {
            const sumGrade = this.grades[subject].reduce(function(total, num) {
            return total + num
            });
            return sumGrade / schoolSubj.length;
        }
    }
};

const student = new Student('Jan', 'Kowalski');
student.addGrade('maths', 4);
student.addGrade('maths', 6);
student.addGrade('english', 3);
const avgMath = student.getAverageGrade('math'); // 5
