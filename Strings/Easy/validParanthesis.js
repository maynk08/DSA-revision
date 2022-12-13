let str = "()[]{}"


var isOpening = function(str){
    return str == '('|| str=='['||str == '{'
}

var isMatching = function(a,b){
    return (a=='('&& b==')') || (a=='{'&& b=='}') ||(a=='['&& b==']') 
}

var isValid = function(s) {
    let stack = []
    
   for(let i = 0;i<s.length;i++){
       
       let curr = s.charAt(i)
       if( isOpening(curr) ){
           stack.push(curr)
       }
       
       else if(stack.length==0){
           return false
       }
       
       else if(!isMatching(stack[stack.length-1],curr)) return false
       
       else 
       {  stack.pop()  }
   }

    return (stack.length == 0)
};


console.log(isValid(str))