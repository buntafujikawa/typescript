var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// note 2-1. ジェネリクス
function myFilter(arr, predicate) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var elm = arr_1[_i];
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}
// 使用例
var res = myFilter([1, 2, 3, 4, 5], function (num) { return num % 2 === 0; });
var res2 = myFilter(['foo', 'hoge', 'bar'], function (str) { return str.length >= 4; });
function getSpeed(speed) {
    switch (speed) {
        case "slow":
            return 10;
        case "medium":
            return 50;
        case "fast":
            return 200;
    }
}
// 使用例
var slowSpeed = getSpeed("slow");
var mediumSpeed = getSpeed("medium");
var fastSpeed = getSpeed("fast");
addEventListener("foobar", function () { });
addEventListener("event", function () { }, true);
addEventListener("event2", function () { }, {});
addEventListener("event3", function () { }, {
    capture: true,
    once: false
});
function giveId(obj) {
    var id = "本当はランダムがいいけどここではただの文字列";
    return __assign({}, obj, { id: id });
}
// 使用例
var obj1 = giveId({ foo: 123 });
var obj2 = giveId({
    num: 0,
    hoge: true
});
// エラー例
var obj3 = giveId({
    foo: "bar"
});
// note 2-5. useState
