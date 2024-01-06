/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str) {
  let str1 = str.toUpperCase();
  str1 = str1.split("");
  let str2 = str.toUpperCase();
  str2 = str2.split("");
  let start = 0;
  let end = str.length;
  let s11=[]
  let s22=[]
  for(let i=0;i<str.length;i++){
    if(str1[i].toUpperCase()!==str1[i].toLowerCase()){
      s11.push(str1[i])
    }
    if(str2[i].toUpperCase()!==str2[i].toLowerCase()){
      s22.push(str2[i])
    }
  }
  while (start < end) {
    let temp = s11[start];
    s11[start] = s11[end];
    s11[end] = temp;
    start++;
    end--;
  }
  let s1=s11.join("");
  let s2=s22.join("");
  
  if (s1 != s2) {
    return false;
  } else {
    return true;
  }
}

module.exports = isPalindrome;
