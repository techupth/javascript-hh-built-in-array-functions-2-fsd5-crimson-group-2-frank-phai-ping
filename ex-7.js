function isPalindrome(string) {
  // Start coding here
  let reverseCharacter;
  let character = string.split("")
  reverseCharacter = character.reverse(character)
  let reverseWords = reverseCharacter.join("")
  console.log(reverseWords)
  return string == reverseWords;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false