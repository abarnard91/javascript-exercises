const convertToCelsius = function(fahrenheit) {
	let tempC=0;
  //(32°F − 32) × 5/9 = 0°C
  tempC=((fahrenheit-32)*(5/9));
  //checks if the value of tempC is a whole number or decimal
  if ((tempC%1)!=0){
  //if decimal tempC is rounded to 1 decimal point
  	tempC=tempC.toFixed(1);
  }
  console.log(`${fahrenheit} degrees fahrenheit is ${tempC} degrees celsius`);
  return tempC;
};



const convertToFahrenheit = function(celsius) {
	let tempF=0;
  //(0°C × 9/5) + 32 = 32°F
  tempF=(celsius*(9/5)+32)
  //checks if the value of tempF is a whole number or decimal
 	if((tempF%1)!=0){
  //if decimal tempF is rounded to 1 decimal point
    tempF=tempF.toFixed(1);
  }
  console.log(`${celsius} degrees celsius is ${tempF} degrees fahrenheit`);
  return tempF;
  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
