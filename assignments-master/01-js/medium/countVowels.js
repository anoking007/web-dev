/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count=0;
    let obj={
      a:0,
      e:0,
      i:0,
      o:0,
      u:0,
    }
    str=str.split("")
    for(let i=0;i<str.length;i++){
      if(obj.hasOwnProperty(str[i].toLowerCase())){
          count++;
      }
    }
    return count;
}

module.exports = countVowels;