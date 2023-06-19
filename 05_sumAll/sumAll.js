const sumAll = function(firstNum,secondNum) {
  if (((firstNum<=0)||(secondNum<=0))||((Number.isInteger(firstNum)==false)||(Number.isInteger(secondNum)==false))){
    console.log("ERROR")
    return "ERROR";
    }
 
  	else if (firstNum>secondNum){
    counterFunction(firstNum,secondNum);
    }
    else if (secondNum>firstNum){
    counterFunction(secondNum,firstNum);
    }
    
    	
	}

function counterFunction(higherNum,lowerNum){
let thirdNum=0;
for (let i=0;i<higherNum;i++){
      	thirdNum=lowerNum+thirdNum;
        lowerNum++;
  		}
      console.log(thirdNum);
      return thirdNum;
}
// Do not edit below this line
module.exports = sumAll;
