// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`
    
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    })
    return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft () {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} in class.`
    }
    updateGrade (points) {
        this.grade += points
    }
}


const student1 = new Student('Andrew', 'Mead', 27, 72, ['Teaching', 'Biking'])
student1.fullName = 'Clancy Turner'
console.log(student1.getBio())
student1.updateGrade(-20)
console.log(student1.getBio())

const employee1 = new Employee('Andrew', 'Mead', 27, 'Teacher', ['Teaching', 'Biking'])
employee1.fullName = 'Clancy Turner'
console.log(employee1.getBio())
