// multiples of 3 or 5 
function solution(number){
  if(number < 0) return 0;
  let sum = 0;
  for(let i =0; i < number;i++){
    if(i % 3 === 0 && i % 5 ===0 ){
      sum += i;
    }else if(i % 3 === 0){
      sum +=i;
    }else if (i % 5 ===0){
      sum +=i;
    }
  }
  return sum;
}

//Who likes it?
function likes(names) {
  if(names.length ===0){
    return "no one likes this"
  }else if(names.length ===1){
    return `${names[0]} likes this`
  }else if(names.length ===2){
    return `${names[0]} and ${names[1]} like this`
    }else if(names.length ===3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
  else{
    return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
  }
}

//Find the unique number
function findUniq(arr) {
 arr.sort((a,b) => a -b);
  
  
if(arr[0]!== arr[1]){
  return arr[0];
}
  
  return arr[arr.length-1];
  
}

//Find The Parity Outlier
function findOutlier(integers){
  let evenArr = [];
  let oddArr = [];
  
 for(let i = 0;i< integers.length;i++){
   if(integers[i] % 2 === 0){
     evenArr.push(integers[i])
   }
   else{
     oddArr.push(integers[i])
   }
 }
if(evenArr.length === 1){
  return evenArr[0]
}else if (oddArr.length === 1){
  return oddArr[0]
}
}
//Counting Duplicates
function duplicateCount(str){
   let charCount = {};
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let char in charCount) {
        if (charCount[char] > 1) {
            count++;
        }
    }
    return count;
}
//Moving Zeros To The End
function moveZeros(arr) {
   let nonZeros = arr.filter(element => element !== 0);
    let zeroes = arr.filter(element => element === 0);
    return nonZeros.concat(zeroes);
}
//Pig Latin 
function pigIt(str){
  
  const arr = str.split(' ')
  return arr
    .map((word) => {
      return word.match(/[A-z]/i)
        ? `${word.substr(1)}${word.substr(0, 1)}ay`
        : word
    })
    .join(' ')
}


