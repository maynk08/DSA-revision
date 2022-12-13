/**
 Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false 
 */

let s = 'anagram' 
let t = 'nagaram'

const checkAnagram = (str1,str2) =>{
    let freq = {}
     
    if(t.length != s.length){
        return false
    }
   
    for(let i= 0;i<s.length;i++){
        if(freq.hasOwnProperty(s[i])){
           freq[s[i]] += 1
        }
                 else{
            freq[s[i]] = 1
        }
    }
 //  console.log(freq)
               
   for(let i = 0;i<t.length;i++){
      if(freq[t[i]] ==undefined || freq[t[i]] == 0) {
          return false
      }
       freq[t[i]] -=1
   }
   
   return true
}

console.log(checkAnagram(s,t))