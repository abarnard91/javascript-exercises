const sumAll = function(firstNum,secondNum) {
  sum=" ";
  if (((firstNum<=0)||(secondNum<=0))||((Number.isInteger(firstNum)==false)||(Number.isInteger(secondNum)==false))){
    console.log("ERROR")
    return "ERROR";
    }
 
  	else if (firstNum>secondNum){
    counterFunction(firstNum,secondNum);
    return sum
    console.log(sum)
    }
    else if (secondNum>firstNum){
    counterFunction(secondNum,firstNum);
    return sum
    console.log(sum)
    }
    
    console.log(sum)
	}

function counterFunction(higherNum,lowerNum){
let thirdNum=0;
for (let i=0;i<higherNum;i++){
      	thirdNum=lowerNum+thirdNum;
        lowerNum++;
  		}
      
      sum= thirdNum;
      console.log(sum)
}


// sumAll(1,4);
// sumAll(1,4000);
// sumAll(123,1);
// sumAll(-10,4);
// sumAll(10,"90");
// sumAll(10,[90,1]);
// Do not edit below this line
module.exports = sumAll;
