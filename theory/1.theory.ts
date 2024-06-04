//? Базовые типы
let firsrName: string = "Dean"
let age: number = 20
let isStudent: boolean = true
let smth: undefined = undefined
let city: null = null
let isHasAnInternship: unknown = null
let experience: any = 0

//? структура объектов
const userProfile: {
    firstName: string,
    age: number,
    isOwner: boolean
} = {
    firstName: "Sam",
    age: 23,
    isOwner: true
}

//? Массивы и Кортежи
const numbers: number[] = [1, 2, 3, 4, 5, 6]
const numbers2: Array<number> = [1, 2, 3, 4, 5, 6]

const profile: [string, number] = ["Sam", 2]

//? Функции
function getAge(name?:string):number {
    return 25
}
getAge("Cas")  
// после name идет ?, значит необязательно
const getAge2 = (name?:string):number => 22

//? REST
function getFullName(firsrName: string, ...names: string[]) {
    return firsrName + ' ' + names.join(' ')
}
// ввод: Sam, Dean, Cas
// вывод: Sam Dean Cas

//? Функциональная перегузка
function getInfo(name: string):string;
function getInfo(age: string):number;
function getInfo(single: boolean):boolean;
function getInfo(value: any):any {
    return value;
}
const result = getInfo('Aizhan');
const result2 = getInfo(19);

// 