// 4-1
// week type 全てオプショナル
type User = {
    age?: number
    name?: string
}
function registerUser(user: User) {}

const maybeUser = {
    age: 26,
    name: 'hoge',
    gender: 'male'
}

const notUser = {
    gender: 'male'
}

registerUser(maybeUser) // 部分的に一致すればOK
// registerUser(notUser) error

// 直接引数に記述すると excess property checksにうおち
registerUser({
    age: 26,
    name: 'hoge',
    // gender: 'male' // error
})

// week typeじゃなくても同じ挙動、そういう仕様らしい
type User2 = {
    age: number
    name: string
}
function registerUser2(user: User2) {}
registerUser2(maybeUser)
// registerUser2(notUser) error


// 4-1-5 readonly
type State = {
    id: number
    name: string
}

const state: Readonly<State> = { // 全部readonlyにする場合
    id: 1,
    name: 'hoge'
}

// state.name = 'fuga' error 値は書き換えられてしまう

const frozenState = Object.freeze(state)
// frozenState.name = 'fuga' error 値は書き換えられない

// 4-2
// 抽象的な型 to 詳細な型 = ダウンキャスト / 逆がアップキャスト

type User3 = {
    name: string
    [k: string]: any // インデックスシグネチャ
}
const userA: User3 = {
    name: 'hoge',
    age: 26
}

type Question = 'Q1' | 'Q2'
type Answer = 'mighty' | 'lot' | 'few' | 'entirely'
type User4 = {
    name: string
    // enquete: { [k: string]: Answer | undefined } or
    enquete: { [K in Question]?: Answer}
}
const userB: User4 = {
    name: 'hoge',
    enquete: {
        Q1: 'entirely',
        Q2: 'lot'
    }
}
const x = userB.enquete['Q1']
const y = userB.enquete['Q3'] // 存在しない可能性があるプロパティ参照がAnswer型として推論されないように、undefindeとのunion

/// const assertion
const tuple = [false, 1, '2'] as const

// non null assertion
function greet(name?: string) {
    console.log(`Hello ${name!.toUpperCase()}`)
}

// double assertion
const hoge = 0 as any as string

// 4-3
// タグ付きunion types = union typesの全てが共通のプロパティを持つ

type User5 = { name: string }
type UserC = User5 & { gender: 'male' | 'female' | 'other' }
type UserD = User5 & { graduate: string }

const users: (UserC | UserD)[] = [
    { name: 'hoge', gender: 'male'},
    { name: 'hoge', gender: 'male'}
]

const filteredUsers = users.filter(user => 'graduate' in user) // (UserC|UserD)[]

function filterUser(user: UserC | UserD): user is UserD { // ユーザー定義type guards
    return 'graduate' in user
}
const filteredUsers2 = users.filter(filterUser) // UserB[]

