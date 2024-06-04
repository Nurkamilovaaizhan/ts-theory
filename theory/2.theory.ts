//! Классы и типы
class Animal {
    // private - не можем иметь доступ извне
    private name: string

    constructor(name: string){
        this.name = name
    }

    getName() {
        return this.name
    }
}

const CAT = new Animal('cat')
CAT.getName.name

//! Интерфейсы
/* Интерфейсы — это еще один мощный инструмент в TypeScript наряду с типами. Он позволяет гибко описать наши данные. Также он удобно поддается расширению и объединению с другими типами или интерфейсами.*/ 
interface IProfile extends IWork {
    name: string
    age: number
    isOwner: boolean
}

interface IWork {
    place: string
}

const profile: IProfile = {} as IProfile

//! Типы
type TName = string | number
type TProfile = {
    name: TName
    age: number
    isOwner: boolean
} & TWork

type TWork = {
    place: string
}

const profile2: TProfile = {} as TProfile

