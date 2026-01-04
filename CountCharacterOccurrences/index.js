// 1. Using a for loop:

function CountCharacterOccurrences(str, chr) {
  let count = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === chr) {
      count++;
    }
  }
  return count;
}
let str = "im hamza rafique software engineer";
let chr = "a";

// console.log(CountCharacterOccurrences(str, chr));

// 2. Using the split() method:

function countOccurrencesSplit(str, char) {
    const splitString = str.split(char);
    console.log(splitString)
    return splitString.length - 1;
  }
  console.log(countOccurrencesSplit(str, chr))

  //3 menthod 

  function countOccurrences(str,char){
    let count = 0;

    for(const c of str){
      if(c === char) count++;
    }
    return count;
  }

  //4

 function countOccurrences(str, char) {
  return str.split("").reduce((count, c) => {
    return c === char ? count + 1 : count;
  }, 0);
}
