// 5-1 互換性
// unknow型が一番抽象的
let un1: unknown = 'test'
// let un2: string = un1 error // 型が決定するまでは別の型に代入できない
let un3: number = un1 as number

// 5-2 宣言空間
const Test = {}   // value(値)
interface Test {} // type(型)
namespace Test {} // namespace(名前空間)

// value(値)
function greet() {}
// const greet = 'herllo' // error

// type(型)
// interfaceはopen endedに準拠
interface User {
    name: string
    move(amount: string): string
}
interface User { // 結合される
    // name: number 異なる型宣言は不可
    age: number
    move(amount: number): string // 関数はok
}

// typeはopen endedに準拠してない
type User2 = {
    name: string
}

// type User2 = { // error
//     age: number
// }

// namespace(名前空間)
namespace Publisher {
    export const name = ''
}

namespace Publisher {
    export interface Book {
        lang: 'ja'
    }
}
