const removeFromArray = function(theArray,...args) {
  //iterates through arguments
  for (let i=0;i<=args.length;i++){
  	console.log(`i is ${i} args is ${args[i]}`);
  	//for each argument iterate through the array to see if there's a match
		for(let j=0;j<theArray.length;j++){
    	console.log(`j is ${j} theArray is ${theArray[j]}`);
      //if theres a match remove argument value from the array
    	if(theArray[j]==args[i]){
      	console.log(`the array is spliced ${theArray[j]}`)
    		theArray.splice((theArray[j]-1),1)
                
        console.log(`spliced array is ${theArray}`)
        }
    	}
		}
    return(theArray);
    console.log(theArray);
	}

};

// Do not edit below this line
module.exports = removeFromArray;
