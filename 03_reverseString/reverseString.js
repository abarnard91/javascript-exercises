const reverseString = function(string) {
    let newString="";
    let num=string.length;
    for (i=0;i<=string.length;i++){
        newString+=string.charAt(num);
        num-=1;
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
