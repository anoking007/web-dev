/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Get lengths of both strings
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  let n1 = str1.length;
  let n2 = str2.length;
  str1 = str1.split("");
  str2 = str2.split("");
  // If length of both strings is not
  // same, then they cannot be anagram
  if (n1 != n2) return false;

  // Sort both strings
  str1.sort();
  str2.sort();

  // Compare sorted strings
  for (let i = 0; i < n1; i++) {
    if (str1[i] != str2[i]) return false;
  }
  return true;
}

module.exports = isAnagram;
