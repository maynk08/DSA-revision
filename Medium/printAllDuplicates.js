let str = "test string"

/**
 s, count = 2 
t, count = 3 
 */

const printDup = (str) =>{
    let map = new Map()
  for(let i = 0;i<str.length;i++){
    map.set(str[i],map.get(str[i])+1 || 1)
  }

  //console.log(map);

  for(let i = 0;i<str.length;i++){
    if(map.get(str[i])>1){
        console.log(str[i]," count: "+ map.get(str[i]))
    }
  }
}

printDup(str)