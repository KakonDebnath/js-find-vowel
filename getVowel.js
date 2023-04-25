
// function vowelCount(str) {
//     str = str.toLowerCase()
//     let count = []
//     for (let i = 0; i < str.length; i++) {
//         if (str.charAt(i) == 'u' || str.charAt(i) == 'o' || str.charAt(i) == 'i' || str.charAt(i) == 'e' || str.charAt(i) == 'a') {
//             count.push(str.charAt(i))//to store all the vowels in an array
//         }
//     }
//     console.log(count);
//     let eachcount = {}
//     count.forEach((x) => eachcount[x] ? eachcount[x]++ : eachcount[x] = 1) //to count each vowel from the count array
//     return eachcount
// }
// console.log(vowelCount("a quick fox ju"))

const text='The quick brown fox jumps over the lazy dog';
const vowels=['a','e','i','o','u'];

const vowelCount=(text, vowelsArr)=>{
  
  const count = {};
  
  for(let char of text){
    console.log(char);
    if(vowelsArr.includes(char))
      count[char] ? count [char]++ : count[char] = 1;
  } 
  return count;
}

console.log('Vowel count:', vowelCount(text,vowels));
