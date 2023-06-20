const leapYears = function(year) {
  //if year/4 has no remainder and year/100 has a remainder or year/400 has no remainder
	if(((year%4==0)&&(year%100!=0))||(year%400==0)){
    //then return true it is a leap year
  	console.log(`${year} is a leap year`)
		return true;
	}
  else{
    //otherwise it is not a leap year and false is returned
  	console.log(`${year} is not a leap year`)
  	return false;
  }

};

// Do not edit below this line
module.exports = leapYears;
