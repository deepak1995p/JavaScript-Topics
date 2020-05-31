//converting num1 & num2 to string in the beginning looks much cleaner!
function lastDigit(num1, num2) {
    var num1String = num1.toString();
    var num2String = num2.toString();
  
    if (num1String[num1String.length - 1] === num2String[num2String.length - 1]) {
      return 'true' ;
    } else {
      return 'false' ;
    }
  
    //console.log(parseInt(num1) - 1); // returns 22... num1 is a num now
    //console.log(num1 - 1); // Hmmm this returns 22, too!!
    //console.log(num1.length-1); // this returns NaN <-- first time seeing this!!!! length property doesn't work with numbers. convert a number to a string: x.toString().length;
  }
  
  lastDigit(25, 10);
  