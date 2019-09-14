/*
note 3-1. 配列からMapを作る
以下のコードで定義される関数mapFromArrayは、オブジェクトの配列からMapを作って返す関数です。
配列から取り出した各オブジェクトをMapに登録しますが、その際にキーとして各オブジェクトの指定されたプロパティの値を用います。
mapFromArrayに適切な型を付けてください。
 */

// > あるTを型とすると、keyof Tという型の構文があります。keyof Tは、「Tのプロパティ名全ての型」です。
// > keyofとセットで使われることが多いのがプロパティアクセス型です。これは型TとKに対してT[K]という構文で書きます。Kがプロパティ名の型であるとき、T[K]はTのそのプロパティの型となります。
// > U extends any[]の部分ですね。これは新しい記法ですが、型引数Uはany[]の部分型でなければならないという意味です

// @ts-ignore
function mapFromArray<T, K extends keyof T>(arr: T[], key: K): Map<T[K], T> {
    // @ts-ignore
    const result = new Map();
    for (const obj of arr) {
        result.set(obj[key], obj);
    }
    return result;
}

// 使用例
const data = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
];
const dataMap = mapFromArray(data, "id");
/*
dataMapは
Map {
  1 => { id: 1, name: 'John Smith' },
  2 => { id: 2, name: 'Mary Sue' },
  100 => { id: 100, name: 'Taro Yamada' }
}
というMapになる
*/

// エラー例
// mapFromArray(data, "age");

 
/*
note 3-2. Partial
PartialはTypeScriptの標準ライブラリに定義されている型で、オブジェクトの型を渡されると、その各プロパティを全部省略可能にするものです。MyPartialという名前でこれを実装してください。
 */
// 使用例
/*
 * T1は { foo?: number; bar?: string; } となる
 */

type MyPartial<T> = {[P in keyof T]?: T[P]}

type T1 = MyPartial<{
    foo: number;
    bar: string;
}>;
/*
 * T2は { hoge?: { piyo: number; } } となる
 */
type T2 = MyPartial<{
    hoge: {
        piyo: number;
    };
}>;

// note 3-3. イベント

interface EventPayloads {
    start: {
        user: string;
    };
    stop: {
        user: string;
        after: number;
    };
    end: {};
}

class EventDischarger<E> {
    // eventNameはinterfaceに含まれるやつ
    // payloadはその名前に含まれるやつ
    emit<Event extends keyof E>(eventName: Event, payload: E[Event]) {
        // 省略
    }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();
ed.emit("start", {
    user: "user1"
});
ed.emit("stop", {
    user: "user1",
    after: 3
});
ed.emit("end", {});

// // エラー例
// ed.emit("start", {
//     user: "user2",
//     after: 0
// });
// ed.emit("stop", {
//     user: "user2"
// });
// ed.emit("foobar", {
//     foo: 123
// });

// note 3-4. reducer

type Action = {
    type: "increment",
    amount: number,
} | {
    type: "decrement",
    amount: number,
} | {
    type: "reset",
    value: number,
}

const reducer = (state: number, action: Action) => {
    switch (action.type) {
        case "increment":
            return state + action.amount;
        case "decrement":
            return state - action.amount;
        case "reset":
            return action.value;
    }
};

// 使用例
reducer(100, {
    type: 'increment',
    amount: 10,
}) === 110;
reducer(100, {
    type: 'decrement',
    amount: 55,
}) === 45;
reducer(500, {
    type: 'reset',
    value: 0,
}) === 0;

// // エラー例
// reducer(0,{
//     type: 'increment',
//     value: 100,
// });

// note 3-5. undefinedな引数
/*
conditional type
型レベルの条件分岐が可能な型
T extends U ? X : Y
https://qiita.com/Quramy/items/b45711789605ef9f96de
 */
type Func<A, R> = undefined extends A ? (arg?: A) => R : (arg: A) => R;

// 使用例
const f1: Func<number, number> = num => num + 10;
const v1: number = f1(10);
const f2: Func<undefined, number> = () => 0;
const v2: number = f2();
const v3: number = f2(undefined);

// エラー例
// const v4: number = f1();
