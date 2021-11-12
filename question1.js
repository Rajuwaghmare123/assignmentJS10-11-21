//function to generate an array between two integers of 1 step length.

function generateArray(x, y) {
    let arr = new Array();
    for (let i = x; i<=y; i++){
        arr.push(i);
    }
    return arr;
}

let arr = generateArray(2, 4);
console.log(arr);