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
  let resul = 0
  
  for(let i = 0; i < 2; i++){
    resul += Math.min(...numbers)
    numbers.splice(numbers.indexOf(resul), 1)
  }
  
  return resul
  }

//Link of kata:https://www.codewars.com/kata/558fc85d8fd1938afb000014
