console.log("Flatten array / object");

const arr = [1, [2, [3, [4]], 5]]; // Expected output: [1, 2, 3, 4, 5]

function flattenArray(array) {
    let result = []

    for (let item of array) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item))
        } else {
            result.push(item)
        }
    }

    return result;
} 

flattenArray(arr)

