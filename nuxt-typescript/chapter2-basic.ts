// 2-4 typeOf 型を取得
let asString: string = ''
let value: typeof asString
value = 'value'
// value = 0

let myObject = { foo: 'foo' }
let anotherObject: typeof myObject = { foo: '' }
anotherObject['foo'] ='value'

// keyof オブジェクトのプロパティ名称を取得
type SomeType = {
    foo: string
    bar: string
    baz: string
}
let someKey: keyof SomeType
someKey = 'foo'
// someKey = 'hoge'

const myObject2 = {
    foo: 'FOO',
    bar: 'BAR',
    baz: 'BAZ'
}

let myObjectKey: keyof typeof myObject2
myObjectKey = 'bar'
// myObjectKey = 'hoge'

// 2-5 アサーション
let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length // JSXを使用する場合は非推奨
let strLength2: number = (someValue as string).length

// 2-7 enum
// 数値列挙
enum Direction {
    Up,
    Down,
    Left,
    Right
}
const up = Direction.Up // 0

enum Ports {
    USER_SERVICE = "8080",
    REGISTER_SERVICE = "8081"
}

// open ended
enum Ports {
    MEDIA_SERVICE = "8888"
}