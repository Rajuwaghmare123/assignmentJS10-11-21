// the most frequent item of an array.

function mostFrequent(arr) {
    arr.sort();
    if (arr.length === 0)
        return -1;
    if (arr.length == 1)
        return arr[0];
    let count = 1,mostFrequentele,max=0;

    for (let i = 1; i < arr.length; i++)
    {
        if (arr[i] !== arr[i - 1]) 
        {
            count = 1;
        }
        else 
        {
            count++;
        }
        if (count > max) 
        {
            max = count;
            mostFrequentele = arr[i];
        }
    }
    return mostFrequentele;
}

let arr = [1,1,1, 4,4, 5, 4, 43, 3, 3, 3, 7, 77,];
console.log(mostFrequent(arr));