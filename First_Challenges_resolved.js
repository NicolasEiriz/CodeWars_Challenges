//Challenges resolved

//1. Perfect Square

function findNextSquare(sq) {
  
  if(Number.isInteger(Math.sqrt(sq))){ 
    sq++
    while(!Number.isInteger(Math.sqrt(sq))){
      sq ++
    }
  return sq  
  } else{return -1}
}

function findNextSquare(122)

//Link of kata: https://www.codewars.com/kata/56269eb78ad2e4ced1000013
_________________________________________

//2. Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
  
  //loop in the array and return the two lowest numbers
  let result = 0
  
  for(let i = 0; i < 2; i++){
    result += Math.min(...numbers)
    numbers.splice(numbers.indexOf(result), 1)
  }
  
     return result
  }

//Link of kata:https://www.codewars.com/kata/558fc85d8fd1938afb000014
_________________________________________

//3. add two numbers together and return their sum in binary

function addBinary(a,b) {

  let result = a + b
  
  return result.toString(2)
}

//Link of kata: https://www.codewars.com/kata/551f37452ff852b7bd000139

________________________________________

//4. Number of People in the Bus

let number = function(busStops){
  // Take an array of integer numbers
  // The first number in the array is the people who get into the bus
  // The second number in the array is the people who get off the bus
  // Return a number of people who still in the bus after the last bus station (after the las array)
  
  // Loop in the array and return the people in the bus less the people who leave
  
let peopleInBus = 0

busStops.forEach(stops =>{
    peopleInBus += stops[0] 
    peopleInBus -= stops[1]
   })
  
  return peopleInBus
  
}

//link of kata: https://www.codewars.com/kata/5648b12ce68d9daa6b000099
_________________________________________

//5. Find the divisors!

function divisors(integer) {
  
  //get into a number
  //returns an array with all of the numbers divisors, except for 1 and the numver itself
  
  let result = []
  
  //make a loop an return every number who is divisible by the input, return an array with all these numbers
  
  for(let i = 2; i < integer; i++){
    if(integer % i === 0){
      result.push(i)}
}
  
 //if any number was divilse return 'the (number) is prime'

 if(result.length === 0){
  return `${integer} is prime`}
  else{return result}
 
}

divisors(15)

//link of kata: https://www.codewars.com/kata/544aed4c4a30184e960010f4

_________________________________________

//6 Credit Card Mask

// return masked string

function maskify(cc) {
  //convert the number into and array
  if(cc.length < 4){
    return cc
  }
  else{
  let arr = cc.split('')
  
  //create a variable with the last four numbers
  
  let lastFour = arr.slice(arr.length - 4)
  
  //map into arr and return '#', without the las four numbers
  
  arr = arr.map(x=> '#').slice(0, arr.length -4)
  
  //push the last 4 numbers into the resul
  
  lastFour.forEach(num =>{
    arr.push(num)
  })
  
  return arr.join('')
}

}

function maskify(4556364607935616)

//link of kata: https://www.codewars.com/kata/5412509bd436bd33920011bc

_________________________________________

// 7 Shortest Word

function findShort(s){
  //convert the string into a array of words
 
  let arrayOfWords = s.split(' ')
  
  //compare the words with reduce and return de shortest
  
  let shortest = arrayOfWords.reduce((lowest,current)=>
   lowest.length < current.length ? lowest : current
  )
  
  return shortest.length
}

findShort('bitcoin take over the world maybe who knows perhaps')

//Link to kata: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
_________________________________________

//8 Mumbling  

function accum(s) {
  //convert the string into an array, map trough it and return the letter repeated x times, when x its their index number
  
  return s.split('').map((letter,index) => `${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`).join('-')
}

//Link to kata: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

_________________________________________

//9 Testing 1-2-3

let number = function(array){
  
  // Takes a list of string and return each line prepended by the correct number
  // Numbering starts at 1
  // Example ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
  
let number = 1

let result = []

if(array.length === 0){
  return []
} else{
array.forEach(element =>{
result.push(`${number}: ${element}`)
  number += 1 }) 
return result
  }
}

// Link to kata: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
______________________________________

//10 Find the stray number

function stray(numbers) {

  //given an odd-length array of integers, return the different number

  //loop in the array if the number is the same than the next one keep moving, otherwise return that number
 
  let result = 0
 
  
  numbers.forEach(num =>{
    if(num !== numbers[1]){
      result = num
    }
  })
  return result
}

//Link to kata: https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

_________________________________________

//11 Count the divisors of a number

function getDivisorsCnt(n){
    // count the number of divisor of a positive integer
  
    let result = 58
    
  //loop and use the % operator to find all the divisible numbers
    
    for(let i = 1; i <= n; i++){
      if(n % i === 0){
        result += 1
      }
    }
  return result
}

//Link to kata: https://www.codewars.com/kata/542c0f198e077084c0000c2e/solutions/javascript
_________________________________________

//12 Get the Middle Character

function getMiddle(s)
{
  let sLength = s.length
  if(sLength % 2 === 0){
    return s.slice(sLength / 2 - 1, sLength / 2 + 1)
  } else{
    return s.slice(Math.floor(sLength / 2), Math.floor(sLength / 2 + 1) )
  }
 
}

//Link to kata: https://www.codewars.com/kata/56747fd5cb988479af000028
_________________________________________

// 13 How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  
  let averageClassPoints = 0
  
  classPoints.forEach(point => {
    averageClassPoints += point
})
                      
if(yourPoints > averageClassPoints / classPoints.length){
  return true
} else return false
}

//Link to kata: https://www.codewars.com/kata/5601409514fc93442500010b

_________________________________________

// 14 Vowel Count

function getCount(str) {
  //convert the string into an array
  let arr = str.split('')
  let result = 0
  
  //loop and if we found a vowels add 1 to result
  
  arr.forEach(letter =>{
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
       result += 1
       }
  })
  return result;
}

//Link to kata: https://www.codewars.com/kata/54ff3102c1bad923760001f3

_________________________________________

// 15 Sort array by string length

function sortByLength (array) {
  /*Take an array of strings as an argument and return
  containing the same strings, ordered from shortest to longest*/
  
  //Use sort and length to calculate the shortest word
  
  return array.sort((a,b) => a.length - b.length)
  
};
________________________________________

// 16  Remove First and Last Character

function removeChar(str){
  //remove the first and last character of an string
   // if it has less than two character return the same string
 if(str.length < 2){
   return str
 } else{
   return str.slice(1, str.length - 1 )
 }
   
 };

 ________________________________________

 //17 Make a function that does arithmetic!

 function arithmetic(a, b, operator){
  //Given two numbers and an arithmetic operator, return the result of the two number having that operator used on them
  
  if(operator === 'add'){
    return a + b
  } else if(operator === 'subtract'){
    return a - b
  } else if(operator === 'multiply'){
    return a * b
  } else if (operator === 'divide'){
    return a / b
  }
}

________________________________________

//18 Round up to the next multiple of 5

function roundToNext5(n){
  // given an integer as input round it to the next multiple of 5
  while(n % 5 !== 0){
    n++
  }
  return n
}

________________________________________

//19 Sum without highest and lowest number

//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//Example: { 6, 2, 1, 8, 10 } => 16

function sumArray(array) {
  if(!array){
    return 0
  } else{
  array.sort((a,b) => a - b)
  array.pop()
  array.shift()
  let result = 0
  
  for(let i = 0; i < array.length; i++){
    result += array[i]
  }
    return result
}
}

________________________________________

//20 Friend or Foe?

//hat filters a list of strings and returns a list with only your friends name in it.
//Example: friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]


function friend(friends){
  let myFriends = []
  for(let i = 0; i < friends.length; i++){
    if(friends[i].length === 4){
      myFriends.push(friends[i])}
    }
  return myFriends}
________________________________________

  //21 Square(n) Sum

//squares each number passed into it and then sums the results together.
//Example: [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9


  function squareSum(numbers){
    let result = numbers.map(x => Math.pow(x,2))
    return result.reduce((sum,current) => sum + current,0)
  }

  ________________________________________

  //22 Mumbling

  function accum(s) {
    //convert the string into an array, map trough it and return the letter repeated x times, when x its their index number
    
    return s.split('').map((letter,index) => `${letter.toUpperCase()}${letter.toLowerCase().repeat(index)}`).join('-')
  }

  ________________________________________
  //23 Square Every Digit

  function squareDigits(num){
    //transform de number in an array, map trough it and return each number squared
    
    let resul = String(num).split('').map(x => x**2).join('')
    
      
    return Number(resul)
  }

  ________________________________________

  //23 Vowel Count

  function getCount(str) {
    //convert the string into an array
    let arr = str.split('')
    let resul = 0
    
    //loop and if we found a vowels add 1 to result
    
    arr.forEach(letter =>{
      if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
         resul += 1
         }
    })
    return resul;
  }

  ________________________________________

  //24 Sum of a sequence

  const sequenceSum = (begin, end, step) => {
    // returns the sum of a sequence of integers
    /*example 2,2,2 --> 2
              2,6,2 --> 12 (2 + 4 + 6)
              1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
              1,5,3  --> 5 (1 + 4)*/
    //If begin value is greater than the end, function should returns 0
    
    let result = 0
    if(begin > end){
      return 0
    } else{
      for(let i = begin; i <= end; i+= step){
        result += i
      }
      return result
    }
  }

  ________________________________________

  //25 Two Oldest Ages

  function removeUrlAnchor(url){
    //  returns the url with anything after the anchor (#) removed
    
    if(url.includes('#')){
      return url.slice(0,url.indexOf('#'))
    } else{
      return url
    }
  }

  ________________________________________


  //26 Remove anchor from URL

  function removeUrlAnchor(url){
    //  returns the url with anything after the anchor (#) removed
    
    if(url.includes('#')){
      return url.slice(0,url.indexOf('#'))
    } else{
      return url
    }
  }
  ________________________________________

  //27 Small enough? - Beginner

  /*//given an array and a limit value check all the values in the array, if one is below or equal to the limit value return true, else return false*/


function smallEnough(a, limit){
  let result = 0
    a.forEach(number =>{
        if(number < limit || number === limit){
            result++}})
              
        if(result === a.length){
        return true} 
          else{return false}
}

________________________________________

//28 Find the capitals

let capitals = function (word) {
  // take a string as argument and return an ordered list containing the index of all capital letter
 let result = [] 
  word.split('').forEach(capital =>{
    if(capital.match('[A-Z]')){
    result.push(word.indexOf(capital))}})
  return result
}

________________________________________

//29 Anagram Detection

// write the function isAnagram
/*return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"*/

let isAnagram = function(test, original) {
 
  
  let string1 = test.toLowerCase().split('').sort().join('')
     let string2 = original.toLowerCase().split('').sort().join('')
     if(string1 === string2){
         return true}else{return false}
   }

   ________________________________________

   // 30 Sort Numbers

   /*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []*/

function solution(nums){
  let result = []
if(nums === null || nums.length === 0){
  return result
} else{
  return nums.sort((a,b)=>a-b)
}
}

________________________________________
//31 Check the exam

/*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0*/


function checkExam(array1, array2) {
  let result = 0
  
  for(let i = 0; i < array1.length; i++){
    if(array2[i] === array1[i]){
      result += 4
    }
    else if(array2[i] === ""){
      result += 0
    }
    else{
      result -= 1
    }
  }
   if(result < 0){
     return 0
   } else{return result}
   }

   ________________________________________
   //32 Maximum Multiple


   /*Task
 Given a Divisor and a Bound , Find the largest integer N , Such That ,
 
 Conditions :
 N is divisible by divisor
 
 N is less than or equal to bound
 
 N is greater than 0.*/
   
   function maxMultiple(divisor, bound){
    let result = 0
    
    for(let i = 0; i <= bound; i++){
      if(i % divisor === 0){
        result = i
      }
    }  
  return result
   }

   ________________________________________

  //33 Simple Fun #176: Reverse Letter

  /*Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".*/

function reverseLetter(str) {
  
  let letters = /[a-z]/gi
  
  let result = str.split('')
  
  result = result.reverse().join('')
  
  result = result.match(letters)
  
  return result.join('')
  }

  ________________________________________

  //34 Largest 5 digit number in a series

  function solution(digits){
    let result = 0
    //loop into the string and extracts 5 consecutive digits, if it greater than the previus 5 numbers assign it to result
    for(let i = 0; i<digits.length; i++){
      if(Number(digits.substr(i,5)) > result){
        result = Number(digits.substr(i,5))
      }
    }
    return result
  }

<<<<<<< HEAD
________________________________________
=======
  ______________________________________

  //35 Form The Minimum

  function minValue(values){
    //create an array
    let result = []
    //loop in the array and include the number if it not in the result variable
    for(let i = 0; i < values.length;i++){
      if(!result.includes(values[i])){
        result.push(values[i])
      }
    }
    
    return Number(result.sort().join(''))
  }

  ______________________________________

  //36 Summing a number's digits

  /*Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5*/


function sumDigits(number) {
  
  //convert the number into an array
  let arr = String(Math.abs(number)).split('')
  
  arr = arr.map(num=>Number(num))
  
 
  return arr.reduce((current, previous) => previous + current)
  
  
}
______________________________________

//36 Fix string case

function solve(s){
   
  let lowerCase = 0
  let upperCase = 0
  
   //convert the string in an array an check individual letter
  s.split('').forEach(letter=>{
    if(letter === letter.toUpperCase()){
       upperCase += 1}
       else{
      lowerCase += 1
    }
  })
  if (upperCase > lowerCase){
    return s.toUpperCase()
  } else{return s.toLowerCase()}
  
}
______________________________________

//37 The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  
  //use Date.parse to compare the dates
  
  if(enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)){
    return true
  } else{
    return false
  }
  }

  ______________________________________

  //38 Disemvowel Trolls

  //write a function that takes a string and return a new string with all vowels removed.

  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '')

 }
__________________________________

// 39 Remove String Spaces

function noSpace(x){
  //Remove the spaces from string and return the resultant string
  //use trim method to remove the spaces
  
 return x.replaceAll(' ', '')
}

______________________________________

//40 Convert a Number to a String!

function numberToString(num) {
  // Transform a number into a string
  //the num will be an integer
  //examples: 123 -> "123", 999 -> "999", -100 --> "-100"
  
  //use toString method to convert the num
  
  return num.toString()
  
}

____________________________________

//41 Abbreviate a Two Word Name

function abbrevName(name){
  //take two words and return two capital letters with a dot separating them
  //convert the string in an array

let arr = name.split(' ')
let firstName = arr[0]
let secondName = arr[1]

return  `${firstName[0].toUpperCase()}.${secondName[0].toUpperCase()}`


}

______________________________________


//42 Returning Strings

function greet(name){
  //return a greeting statement using the 'name' parameter
  //example -> "Hello, <name> how are you doing today?"
  
  return `Hello, ${name} how are you doing today?`
}

______________________________________
//43 You only need one

function check(a, x) {
  // given an array a and value x, check if x is in that array
  //return true if the array contains de value, false if not
  let result
  a.forEach(value=>{
    if(value === x){result = true}
  })
  return result || false
}

______________________________________

// 44 Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  
  //take the name and look if starts with a R or r
  
  if(name[0] === 'R' || name[0] === 'r'){
    
    // if your name starts with the letter "R" or lower case "r" return 'plays banjo" 
    
    return `${name} plays banjo`
  } 
  else{
    
    //if not return 'does not play banjo'
    
    return `${name} does not play banjo`
  } 
  
}

______________________________________

//45 Reversed Words

function reverseWords(str){
  //reverse all of the words within the string passed in
  //words are separated by exactly one space
  //example: "The greatest victory" --> "victory greatest The"
  
  //convert the string in an array and separate with words
  let result = str.split(' ')
  
  //use an array method to reverse them, converted to a string and return it 
  
  return result.reverse().join(" "); 

}

______________________________________

//46 DNA to RNA Conversion

function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  // Replace any 'T' character in the string with a 'U'
  
  return dna.replaceAll(/T/gi, 'U')
}

______________________________________

//47 If you can't sleep, just count sheep!!

let countSheep = function (num){
  //Given a positive integer, return a string with a murmur
  // Example: 3 -> "1 sheep...2 sheep...3 sheep..."
  
  let result = '';
  
  for(let i = 1; i <= num; i++ ){
    result = `${result}${i} sheep...`
  };
  
  return result;
}
______________________________________

//48 Convert a string to an array

function stringToArray(string){

	// convert the string into an array of words
  // Example: "Robin Singh" ==> ["Robin", "Singh"]

  return string.split(' ')

}

______________________________________

//49 Total amount of points

function points(games) {
  //  There are an array with a collection of strings
  // Each match is represented by a string in the format 'x:y'
  // x is our team's score and y is our opponents score
  // Points are awarded for each match as follows:
  // if x > y: 3 points (win)
  // if x < y: 0 points (loss)
  // if x = y: 1 point (tie)
  //takes this collection and returns the number of points our team (x)
  //Example: ["3:1", "2:2", "0:1"] -> 4 points
  
  //Create a variable that will hold the total of points
  let totalPoints = 0
  
  // Look in one element of the array at a time a compare the first substring with the last one
  games.forEach(game=>{
    if(Number(game[0]) > Number(game[game.length-1])){
      totalPoints += 3
    } else if ((Number(game[0])) < Number(game[game.length-1])){
      totalPoints += 0
    } else {
      totalPoints += 1
    }
  })
  
  return totalPoints
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"], 30))
  ______________________________________

  //50 Do I get a bonus?

// takes in two arguments
//salary will be an integer => 5, 0, 1, 5
//if bonus us true, multiply the salary 10 times
//if bonus is false return the salary

function bonusTime(salary, bonus) {
  
  //use conditionals
  
  if(bonus){return `£${salary *= 10}`}; 
  
  return `£${salary}`
}

______________________________________

//51 Grasshopper - Personalized Message

function greet (name, owner) {
  // return a personalized greeting
  //take two parameters
  //if name equals owner -> 'Hello boss'
  //otherwise -> 'Hello guest'

return name === owner ? 'Hello boss' : 'Hello guest'

}

______________________________________

// 52 The Feast of Many Beasts

function feast(beast, dish) {
  //take in two parameters
  // if the dish start and end with the same letter as the animal's name return true
  
  return dish[0] === beast[0] && dish[dish.length - 1] === beast[beast.length - 1] ? true : false
    
}

______________________________________


//53 Remove duplicate words

function removeDuplicateWords (s) {
  // Remove duplicate words
  
  //Convert the input in an array
  let userInput = s.split(' ')
  
  //create a variable to hold the words that are not repeated
  let uniqueWords = []
  
  //Iterate in the array and if the words is not included in uniqueWords add them
  
  userInput.forEach(word=>{
    if(!uniqueWords.includes(word)){
      uniqueWords.push(word)
    }
  })
  
  return uniqueWords.join(' ')
  }
  
  ______________________________________

  //54 Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

  function countDevelopers(list) {
    // your awesome code here
    
    //given an array of objects return the number of JavaScript developers coming from Europe
    //If, there are no JavaScript developers from Europe then your function should return 0.
    
    let result = 0  
    
    //Look in each element of the array and search if the continent is Europe and the language is javascript
    
    list.forEach(developer=>{
      if(developer.continent === 'Europe' && developer.language === 'JavaScript'){
        result += 1
      }
    })
    
    return result
      
    }

    ______________________________________

//55 Alphabet war

//Accept a string that consist of only small letters amd return who wins
//Left side
//w - 4,  p - 3,  b - 2,  s - 1

//Right side
// m - 4,  q - 3,  d - 2, z - 1

function alphabetWar(fight)
{
  let stringSplited = fight.split('')
  let leftPoints = 0
  let rightPoints = 0
  
  stringSplited.forEach(letter=>{
    
    switch (letter) {
        
        case 'w':
        leftPoints += 4
        break;
        
        case 'p':
        leftPoints += 3
        break;
        
        case 'b':
        leftPoints += 2
        break;
        
        case 's':
        leftPoints += 1
        break;
        
        case 'm':
        rightPoints += 4
        break;
        
        case 'q':
        rightPoints += 3
        break;
        
        case 'd':
        rightPoints += 2
        break;
        
        case 'z':
        rightPoints += 1
        break;
               
    }
    
  })
    if(leftPoints > rightPoints){
      return 'Left side wins!'
    } else if(rightPoints > leftPoints){
      return 'Right side wins!'
    } else{
      return "Let's fight again!"
    }
  }

  alphabetWar('zsssad')

  ______________________________________
  // 56 Correct the mistakes of the character recognition software

//   Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
  const replaceWords ={
    5: 'S',
    0: 'O',
    1: 'I'
  }
  
 return string.replace( /[501]/g, character => replaceWords[character])
   
}

______________________________________
