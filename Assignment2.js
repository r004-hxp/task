/* 2. 用 Promise 实现异步流式操作方法，
 *     比如方法flow([a, b]),就执行a, 再执行b.
 *     如果数组中出现嵌套数据，比如flow([a, [b,c],d])就执行a,再同时执行b,c,最后执行d，
 *     嵌套数组则定义为并行操作，嵌套只能有一层。
* */

function flow() {
    let genFn = arguments[0],
        idx = 0;
    return new Promise((resolve, reject) => {

        function next () {

        }
   })

}

function isArray (arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
}



