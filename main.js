// Write your code below
function getAverageOfElements(obj, key) {
    if (obj === undefined || obj === null) return 0;
    if (!Object.hasOwn(obj,key)) return 0;
    if (!Array.isArray(obj[key])) return 0;

    let average = 0;
    let size = obj[key].length;
    for( let i = 0; i < size; i++) {
        average += obj[key][i];
    }
    return average / size;
}


// - If the array at the given key is empty, it should return 0.
// - If the value at the given key is not an array, it should return 0.
// - If there is no property at the given key, it should return 0.

var obj = {
  key: [1, 2, 3]
};

var output = getAverageOfElements(obj, 'key');

console.log(output); // should print 2

