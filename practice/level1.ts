// note 1-1. 関数に型をつけよう
function isPositive(num: number): boolean {
    return num >= 0;
}

// 使用例
isPositive(3);

// エラー例
// isPositive('123');
// const numVar: number = isPositive(-5);


// note 1-2. オブジェクトの型
interface User {
    name: string;
    age: number;
    private: boolean;
}

function showUserInfo(user: User) {
    // 省略
}

// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false,
});

// エラー例
// showUserInfo({
//     name: 'Mary Sue',
//     private: false,
// });
// const usr: User = {
//     name: 'Gombe Nanashino',
//     age: 100,
// };

// note 1-3. 関数の型
type IsPositiveFunc = (num: number) => boolean
const isPositive2: IsPositiveFunc = num => num >= 0;

// 使用例
isPositive2(5);

// エラー例
// isPositive('foo');
// const res: number = isPositive(123);

// note 1-4. 配列の型
function sumOfPos(arr: number[]): number {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
}

// 使用例
const sum: number = sumOfPos([1, 3, -2, 0]);

// エラー例
// sumOfPos(123, 456);
// sumOfPos([123, "foobar"]);
