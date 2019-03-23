module.exports = function check(str, bracketsConfig) {
  let stack = []; 

  for(let i = 0; i < str.length; ++i){
    let c = str[i]; 
      if(bracketsConfig[c]){
        
        return true;
      } else {
        return false;
        
      } 
    
    } 
    // finish
    
  }


