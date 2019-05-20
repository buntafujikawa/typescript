// note 1-1. 関数に型をつけよう
function isPositive(num) {
    return num >= 0;
}
// 使用例
isPositive(3);
function showUserInfo(user) {
    // 省略
}
// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false
});
var isPositive2 = function (num) { return num >= 0; };
// 使用例
isPositive2(5);
// エラー例
// isPositive('foo');
// const res: number = isPositive(123);
// note 1-4. 配列の型
function sumOfPos(arr) {
    return arr.filter(function (num) { return num >= 0; }).reduce(function (acc, num) { return acc + num; }, 0);
}
// 使用例
var sum = sumOfPos([1, 3, -2, 0]);
// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);
