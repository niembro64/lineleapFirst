// return array without smallest ints
function getLargestIndex(arr) {
    var index = -1;
    var value = -1;
    for (let i = 0; i < arr.length; i++) {
        if (value < arr[i]) {
            index = i;
            value = arr[i];
        }
    }
    return index;
}
function getSmallestIndex(arr) {
    var index = -1;
    var value = 100;
    for (let i = 0; i < arr.length; i++) {
        if (value > arr[i]) {
            index = i;
            value = arr[i];
        }
    }
    return index;
}

function removeNSmallest(n, arr) {
    if (n < 1 || n > arr.length) {
        return arr;
    }

    for (let i = 0; i < n; i++) {
        arr.splice(getSmallestIndex(arr), 1);
    }

    return arr;
}

var a = [
    [1, 2, 3, 4, 5],
    [2, 4, 2, 3, 1],
    [1, 66, 4, 3],
    [5, 4, 2, 1],
    [3, 1, 3, 1],
    [4,1,4,1,1,4,1]
];

for (var i = 0; i < a.length; i++) {
    console.log(a[i]);
    console.log(removeNSmallest(2, a[i]));
    console.log("--------------------------");
}

// for (var i = 0; i < a.length; i++) {
//     console.log(a[i]);
//     console.log(getLargestIndex(a[i]));
//     console.log(getSmallestIndex(a[i]));
// }
