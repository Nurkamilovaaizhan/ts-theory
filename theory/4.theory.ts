//! Utility types
interface IProfile {
    name: string
    age: number
    isOwner: boolean
}
//? Pick
const profile: Pick<IProfile, 'name'> = {
    // только name
    name
}
//? Omit
const profile2: Omit<IProfile, 'name'> = {
    // все кроме name
    name
}
//? Partial
const profile3: Partial<IProfile> = {
    // поля (name...) необязательны
}
//? Required
const profile4: Required<IProfile> = {
    // поля обязательны
}
//? Readonly
const profile5: Readonly<Pick<IProfile, 'age'>> = {
    // в дальнейшем нельзя изменить значения
    age:25
}
// profile5.age = 253

//? Record (UT)
const store: Record<string, number> = {
    // левую часть пишем строкой, а правую намбер
    bugatti: 100000 
}