function LongestWord(sen) { 

  // https://regex101.com/
  const re = "[a-zA-Z]+";
  let strsArr = [...sen.matchAll(re)];
  //console.log(strsArr)
  let maxString = '';
  for (let i = 0 ; i< strsArr.length; i++){
    if ( strsArr[i][0].length > maxString.length){
      maxString = strsArr[i][0]
    }
  }
  sen = maxString
  return sen; 
}
   
// keep this function call here 
console.log(LongestWord(readline()));
