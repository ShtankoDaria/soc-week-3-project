console.log('-- load & test reverseWords --');
//debugger; // step through loading & testing

/* individually reverse each word in a sentence
  for this exercise, a word is any text separated by spaces
  reverse the characters in each word, but leave the sentence in order
*/
function reverseWords(str) {
 // return str.split('').reverse().join('');
 var words = str.split(' ');
 var backward = [];
 for(var i = 0; i < words.length; i ++){
  backward.push(words[i].split('').reverse().join(''));
 }  
 return backward.join(' ');
}

// declare and evaluate test cases for reverseWords
const reverseWordsTests = [
  { name: 'Test 1', args: ['abc def ghi'], expected: 'cba fed ihg' },
  { name: 'Test 2', args: ['What are these?'], expected: 'tahW era ?eseht' },
  { name: 'Test 3', args: [''], expected: '' },
  { name: 'Test 4', args: ['12345'], expected: '54321' },
  { name: 'Test 5', args: ['const x = null;'], expected: 'tsnoc x = ;llun' },
  { name: 'Test 6', args: ['<-  ->'], expected: '-<  >-' },
];
for (let test of reverseWordsTests) {
  const expected = test.expected;
  const actual = reverseWords(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
};
console.log(reverseWordsTests);


// declare handler
function reverseWordsHandler() {
 // debugger; // step through user actions

  // read & process user input
  const userPhrase = prompt("enter a text");

  // execute core logic
  const result = reverseWords(userPhrase);

  // display result to user

  alert(result);
  // log action for developer
  console.log('\n-- reverseWords --');
  // user inputs
  // result
}

// attach handler to reverseWords button with an event listener
document.getElementById('reverseWords-button').addEventListener('click', reverseWordsHandler);




/* looking for a hint?
  try solving the challenge in 3 steps:
    step 1, separate each word into a new string
    step 2, individually reverse each word
    step 3, re-connect the words to one string
*/
