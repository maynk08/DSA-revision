let strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
    let commonSubstrs = strs[0]
    
    //console.log(commonSubstrs.slice(0,3))
    
    for(let i= 1;i<strs.length;i++){
        let val = strs[i]
        for(let j= 0;j<commonSubstrs.length;j++){
      //      console.log(val[j],commonSubstrs[j])
            if(commonSubstrs[j]==val[j])  continue
            
            else{
               commonSubstrs = commonSubstrs.slice(0,j)
                break
            }
        }
    }
    // console.log(commonSubstrs)
    return commonSubstrs
}

console.log(longestCommonPrefix(strs))