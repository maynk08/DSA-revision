let str = 'pwwkew'

var lengthOfLongestSubstring = function(s) {
    let i = 0
    let j = 0
    
    let max = -Infinity
    let map = new Map()
    
    while(j<s.length){
        if(map.get(s[j])==undefined){
            map.set(s[j],1)
        }
        else map.set(s[j],map.get(s[j])+1)
        
       // console.log(i,j,j-i+1)
        if(j-i+1 == map.size){
            max = Math.max(max,j-i+1)
        }
        
        else if(map.size<j-i+1){
            while(map.size<j-i+1){
                map.set(s[i],map.get(s[i])-1)
                if(map.get(s[i])==0) map.delete(s[i])
                i++
            }
        }
        j++
    }
       return max
   };

console.log(lengthOfLongestSubstring(str))