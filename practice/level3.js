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
var EventDischarger = /** @class */ (function () {
    function EventDischarger() {
    }
    // eventNameはinterfaceに含まれるやつ
    // payloadはその名前に含まれるやつ
    EventDischarger.prototype.emit = function (eventName, payload) {
        // 省略
    };
    return EventDischarger;
}());
// 使用例
var ed = new EventDischarger();
ed.emit("start", {
    user: "user1"
});
ed.emit("stop", {
    user: "user1",
    after: 3
});
ed.emit("end", {});
var reducer = function (state, action) {
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
    amount: 10
}) === 110;
reducer(100, {
    type: 'decrement',
    amount: 55
}) === 45;
reducer(500, {
    type: 'reset',
    value: 0
}) === 0;
// 使用例
var f1 = function (num) { return num + 10; };
var v1 = f1(10);
var f2 = function () { return 0; };
var v2 = f2();
var v3 = f2(undefined);
// エラー例
// const v4: number = f1();
