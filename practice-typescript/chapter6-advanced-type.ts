// // https://www.typescriptlang.org/docs/handbook/advanced-types.html
// 6-1 generics
interface Box<T extends string | number = number> { // 型の指定と初期値
  value: T
}
const box: Box<string> = { value: 'value'}

function boxed<T>(props: T) {
  return { value: props }
}
const box1 = boxed('test') // 省略可能
const box2 = boxed<string | null>(null)

function pick<T, K extends keyof T>(props: T, key: K) {
  return props[key]
}

const obj = {
  name: 'Taro',
  amount: 0,
  flag: false
}
const value = pick(obj, 'name')

// 6-2 conditional types
type IsString<T> = T extends string ? true : false
type X = IsString<'test'>
type Y = IsString<0>

interface Properties {
  name: string
  age: number
  flag: boolean
}
type IsType<T, U> = {
  [K in keyof T]: T[K] extends U ? true : false
}
type IsNumber = IsType<Properties, number>
type IsBoolean = IsType<Properties, boolean>

// infer 部分t系な型抽出が可能
function greet() {
  return 'Hello!'
}
type Return<T> = T extends (...arg: any[]) => infer U ? U : never
type R = Return<typeof greet> // string


// 6-3 utility types

interface User {
  name: string
  age: number | null
  gender: 'male' | 'female'
  birthplace?: string
}

// readonly
type ReadonlyWrapUser = Readonly<User>

// partial 全てoptinalに変換
type PartialWrapUser = Partial<User>

// required optionalを取り除く
type RequiredWrapUser = Required<User>

// record
type UserRecord = Record<'user', User>
// type UserRecord = {
//   user: User
// }

// pick
type UserGender = Pick<User, 'gender'>
// type UserGender = {
//   gender: 'male' | 'female'
// }

// omit(3.5~) 取り除く
// type WithoutBirthplace = Omit<User, 'birthplace'>

// exclude
type X2 = Exclude<"a" | "b", "b"> // "a"
type Y2 = Exclude<"a" | (() => void), Function> // "a"

// extract 互換性のある型を残す
type X3 = Extract<"a" | "b", "b"> // "b"
type Y3 = Extract<"a" | (() => void), Function> // () => void

// nonnullable
type X4 = NonNullable<string | null | undefined> // string

// return type 関数型の戻り値を
type X5 = ReturnType<() => string> // string

// 標準では組み込まれていないが便利なもの
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
