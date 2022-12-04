function separateKey(key){

  let output = []

  key = String(key)

  for (let i = 0, len = key.length; i < len; i += 1) {
    output.push(+key.charAt(i));
  }
  return output
}

function messageSubsWithKey(eMessage,arrayKey){
  let k = 0
  let output = []
  for(let m=0; m < eMessage.length; m+=1){
    output.push(eMessage[m]-arrayKey[k])
    if (k == arrayKey.length-1){
      k = 0
    } else {
      k += 1
    }
  }
  return output
}

function decipher(eMessage, key) {

  const alphabet = ["a", "b", "c", "d", "e",
   "f", "g", "h", "i", "j", "k", "l", "m", "n", 
   "o", "p", "q", "r", "s", "t", "u", "v", "w", 
   "x", "y", "z"];

  let arrayKey = separateKey(key)
  let outputNums = messageSubsWithKey(eMessage,arrayKey)
  let outputStr = []

  for(let i = 0; i < outputNums.length; i++){
    outputStr.push(alphabet[outputNums[i]-1])
}
  return outputStr
}


console.log(decipher([20, 12, 18, 30, 21], 1939).join(""));
console.log(decipher([14, 30, 11, 1, 20, 17, 18, 18], 1990).join(""));
console.log(decipher([6, 4, 1, 3, 9, 20], 100).join(""));

