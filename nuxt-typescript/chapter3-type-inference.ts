// 3-1 widening literal types
namespace Chapter3 {
    const zero = 0 // 0
    const zero2: 0 = 0 // 0
    const zero3 = 0 as 0 // 0

    let zeroA = 0 // number
    let zeroB = zero // number
    let zeroC = zero2 // 0
    let zeroD = zero3 // 0

    // 3-2
    const a = [0, 1] // number[]
    const b = [0, 1, '1'] // (string | number)[]
    const a1 = [0 as 0, 1 as 1] // (0|1)[]

    const t = [false, 1, '2'] as [boolean, number, string]
    // t[0] = 'a' // error
    t.push('a') // boolean, number, stringなら追加できる

    // 3-5
    function wait(duration: number) { // res={}型
    // function wait(duration: number): Promise<string> { // res=string
        return new Promise<string>(resolve => { // tsconfigのtaretをesnextに指定する必要あり
            setTimeout(() => resolve(`${duration}ms passed`), duration)
        })
    }
    wait(1000).then(res => {})
}
