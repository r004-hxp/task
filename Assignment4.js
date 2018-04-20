/* 4.将多层嵌套数组平拍到一级。
* */

function flatten(array) {
    let output = [], idx = 0;
    for (let i = 0; i < array.length; i ++) {
        var value = array[i];
        if (isArray(value)) {
            value = flatten(value);
            let j = 0; len = value.length;
            output.length += len;
            while (j < len) {
                output[idx++] = value[j ++];
            }
        }else {
            output[idx++] = value;
        }
    }
    return output;
}


function isArray (arr) {
    return Object.prototype.toString.call(arr) === "[object Array]";
}


let a = flatten([1,2,3,[4,5,[3,5,6,7,9]],[6,8]]);
console.log(a);