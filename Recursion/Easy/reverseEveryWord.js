let sentence = "India is great"


function reverseStr(str){
    if(str.length==1) {return str}
    return reverseStr(str.slice(1)) + str[0]
}

function revWordsInSent(sentence){
  sentence = sentence.split(' ')
  for(let i = 0;i<sentence.length;i++){
    sentence[i] = reverseStr(sentence[i])
  }
 return sentence.join(' ')
}

console.log(revWordsInSent(sentence))
