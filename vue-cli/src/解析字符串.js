// http://www.baidu.com?name=zhangsan&age=18&sex=nan#

const getStr = (url) => {
    let num1 = url.indexOf('?')
    let num2 = url.indexOf('#')
    let num3 = url.slice(num1 + 1, num2).split('&')
    /* return num3.reduce((pre, curr) => {
        const [key, value] = curr.split('=');
        pre[key] = value
        return pre
    }, {}) */
    console.log(num3);
    const obj = {}
    num3.forEach((item) => {
        obj[item.split('=')[0]] = item.split('=')[1]
    })
    return obj
}


console.log(getStr('http://www.baidu.com?name=zhangsan&age=18&sex=nan#'));