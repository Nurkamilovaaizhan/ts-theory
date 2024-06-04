//! ENUM
enum Colors {
    RED,
    GREEN,
    BLUE,
}

enum Tokens {
    accessToken,
    refreshToken,
}

const primary: Colors = Colors.GREEN
const token: Tokens = Tokens.accessToken

//! Утверждения (Assertions)
const someValue:any ='dsg353n46n'
const strLength:number = (someValue as string).length

//! Generic (Обобщение)
function getCar<T>(name: T):T {
    return name
}
getCar('Porshe')

function getCar2<T extends number>(name: T):T {
    return name
}
getCar(2)
