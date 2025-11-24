class Student {
    name: string
    age: number
    isStudent: boolean

    constructor(name: string, age: number, isStudent: boolean) {
        this.name = name
        this.age = age
        this.isStudent = isStudent
    }
}

let student = new Student("John Doe", 20, true)
console.log(`Name: ${student.name}, Age: ${student.age}, Is Student: ${student.isStudent}`)