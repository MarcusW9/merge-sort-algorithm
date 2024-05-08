// My solution

function mergeSort(array) {
    let mid = Math.floor(array.length / 2)
    let low = array.slice(0, mid)
    let high = array.slice(mid)

    if (array.length === 1) {
        return array
    }

    if (array.length > 1) {
        return merge(mergeSort(low), mergeSort(high), array)
    }
}
function merge(leftArray, rightArray, array) {
    
    let i = 0

    while (leftArray.length && rightArray.length) {
        if (leftArray[0] <= rightArray[0]) {
            array[i] = leftArray[0]
            leftArray.shift()
            i++
        } else {  
            array[i] = rightArray[0]
            rightArray.shift()
            i++
        }
    }
    
    while (leftArray.length) {
            array[i] = leftArray[0]
            leftArray.shift()
            i++
    }
    
    while (rightArray.length) {
            array[i] = rightArray[0]
            rightArray.shift()
            i++
    }
    return array
}


console.log(mergeSort([1,4,3,2,5,6,9,2,1]))