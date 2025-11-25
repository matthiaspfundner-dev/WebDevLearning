//#region Exercise 01
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


//#endregion

//#region Exercise 02
interface PersonExercise02 {
    name: string
    age: number
    isStudent: boolean
}

let personExercise02: PersonExercise02 = {
    name: "Max",
    age: 25,
    isStudent: true
}

console.log(`Name: ${personExercise02.name}, Age: ${personExercise02.age}, Is Student: ${personExercise02.isStudent}`)
//#endregion

//#region Exercise 03
interface PersonExercise03 {
    name: string
    age: number
    isStudent?: boolean
}

let personExercise03WithIsStudent: PersonExercise03 = {
    name: "Max",
    age: 25,
    isStudent: true
}

let personExercise03WithoutIsStudent: PersonExercise03 = {
    name: "Max",
    age: 25
}

console.log(`Name: ${personExercise03WithIsStudent.name}, Age: ${personExercise03WithIsStudent.age}, Is Student: ${personExercise03WithIsStudent.isStudent}`)
console.log(`Name: ${personExercise03WithoutIsStudent.name}, Age: ${personExercise03WithoutIsStudent.age}, Is Student: ${personExercise03WithoutIsStudent.isStudent}`)

//#endregion

//#region Exercise 04
class Car {
    make: number
    model: string

    constructor(make: number, model: string) {
        this.make = make
        this.model = model
    }
}

let car = new Car(1999, "Audi")
console.log(`${car.make}, ${car.model} `)
//#endregion