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
// note 3-4. reducer
// note 3-5. undefinedな引数