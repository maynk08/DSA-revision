let arr = [1,2,[3,4],[5,6,7]]


const flattenArray = (arr) => {
    let result = []
    for(let i = 0;i<arr.length;i++){
        if(Array.isArray(arr[i])==false) result.push(arr[i])
        else result = result.concat(flattenArray(arr[i]))
    }
    return result
}


console.log(flattenArray(arr))