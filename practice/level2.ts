// note 2-1. ジェネリクス
function myFilter<T>(arr: T[], predicate: (elm: T) => boolean): T[] {
    const result = [];
    for (const elm of arr) {
        if (predicate(elm)) {
            result.push(elm);
        }
    }
    return result;
}

// 使用例
const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);

// エラー例
// myFilter([1, 2, 3, 4, 5], str => str.length >= 4);

// note 2-2. いくつかの文字列を受け取れる関数
type Speed = 'slow' | 'medium' | 'fast';

function getSpeed(speed: Speed): number {
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
const slowSpeed = getSpeed("slow");
const mediumSpeed = getSpeed("medium");
const fastSpeed = getSpeed("fast");

// エラー例
// getSpeed("veryfast");

// note 2-3. 省略可能なプロパティ
// なお、declareはTypeScriptに特有の構文であり、以下のように関数や変数の型を中身なしに宣言できる構文です。
type obj = {
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}

declare function addEventListener(arg: string, func: () => void, option?: boolean | obj): void;
    
addEventListener("foobar", () => {});
addEventListener("event", () => {}, true);
addEventListener("event2", () => {}, {});
addEventListener("event3", () => {}, {
    capture: true,
    once: false
});

// エラー例
// addEventListener("foobar", () => {}, "string");
// addEventListener("hoge", () => {}, {
//     capture: true,
//     once: false,
//     excess: true
// });

// note 2-4. プロパティを1つ増やす関数
function giveId<T>(obj: T): T & { id: string } {
    const id = "本当はランダムがいいけどここではただの文字列";
    return {
        ...obj,
        id
    };
}

// 使用例
const obj1: {
    id: string;
    foo: number;
} = giveId({ foo: 123 });

const obj2: {
    id: string;
    num: number;
    hoge: boolean;
} = giveId({
    num: 0,
    hoge: true
});

// エラー例
// const obj3: {
//     id: string;
//     piyo: string;
// } = giveId({
//     foo: "bar"
// });

// note 2-5. useState

