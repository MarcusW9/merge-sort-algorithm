
// Example solution (optimal)

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    let mid = Math.floor(arr.length/2);
    let leftarr = arr.slice(0, mid)
    let rightarr = arr.slice(mid)

    return merge(mergeSort(leftarr), mergeSort(rightarr), arr)

}

function merge(leftarr, rightarr, array) {
    let i = 0
    let l = 0
    let r = 0

    while (l < leftarr.length && r < rightarr.length) {
        if (leftarr[l] <= rightarr[r]) {
            array[i] = leftarr[l]
            i++
            l++
        } else {
            array[i] = rightarr[r]
            i++
            r++
        }
    }

    while (leftarr.length) {
        array[i] = leftarr[l]
        i++
        l++
    }

    while (rightarr.length) {
        array[i] = rightarr[r]
        i++
        r++
    }
    return array
}


console.log(mergeSort([1,4,3,2,5,6,9,2,1]))