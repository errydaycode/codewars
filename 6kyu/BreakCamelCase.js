//Complete the solution so that the function will break up camel casing, using a space between words.

//Example
//"camelCasing"  =>  "camel Casing"
//"identifier"   =>  "identifier"
//""             =>  ""

function solution(str) {
    // Check if the string is empty
    if (str.length === 0) {
      return "";
    }
  
    // Use a regular expression to insert a space before each capital letter
    var regex = /([A-Z])/g;
    var result = str.replace(regex, " $1");
  
    return result;
  }