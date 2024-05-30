
const words = ["non" , "banan" , "moshina", "olma" , "kamola" , "Gul"];

const wordsWithN = [];
const wordsWithoutN = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].includes("n")) {
    wordsWithN.push(words[i]);
  } else {
    wordsWithoutN.push(words[i]);
  }
}

console.log("Words with the letter 'n':");
console.log(wordsWithN.join("\n"));

console.log("Words without the letter 'n':");
console.log(wordsWithoutN.join("\n"));

console.log("All words:");
console.log(words.join("\n"));