 let arr = ['apple','ball','cat']

 const capWords = (arr) => {
    let resArr = []
    if(arr.length == 0) return []

    let s = arr[0][0].toUpperCase().concat(arr[0].slice(1))
    resArr.push(s)
    return resArr.concat(capWords(arr.slice(1)))
 }

 console.log(capWords(arr))