interface Person {
    name: string,
    age: number,
    [key: string]: any
}

const Lance: Person = {
    name: "Lance Bowers",
    age: 30,
    email: "the.doctor1501@gmail.com"
}

const arr: Array<string> = ["1", "2", "3", "4"]