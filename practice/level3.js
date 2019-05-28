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
function mapFromArray(arr, key) {
    // @ts-ignore
    var result = new Map();
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var obj = arr_1[_i];
        result.set(obj[key], obj);
    }
    return result;
}
// 使用例
var data = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
];
var dataMap = mapFromArray(data, "id");
// note 3-3. イベント
// note 3-4. reducer
// note 3-5. undefinedな引数
