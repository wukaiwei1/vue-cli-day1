let arr = [
    { a: 100 },
    { a: 20 },
    { a: -10 }
]
// 求和
const str = arr.reduce((pre, curr) => {
    // console.log(pre, curr);
    return pre + curr.a
}, 0)

console.log(str);


let numStr = 'asdasufdsuifbuadifbuaia'

numStr = numStr.split('')
const getNum = numStr.reduce((pre, curr) => {
    if (pre[curr]) {
        pre[curr]++
    } else {
        pre[curr] = 1
    }
    return pre
}, {})
console.log(getNum);
// 遍历求出现最多次数的值
let max = 0
let addStr = ''
for (let k in getNum) {
    if (max < getNum[k]) {
        max = getNum[k]
        addStr = k
    }
}
console.log(`出现最多次数的值是${addStr},次数是${max}`);