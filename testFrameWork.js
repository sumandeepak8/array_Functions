const createColumn = function(text,width){
  let numberOfSpaces = width - text.toString.length;
  let spaces = new Array(numberOfSpaces);
  spaces = spaces.fill(" ").join("");
   return text + spaces;
}

let serialNumber = { number : 1};

const getSerialNumber = function(){
  return serialNumber.number;
}

const incrementSerialNumner = function(){
  serialNumber.number++;
  return;
}

const testLog = function(funname,num1,num2,expected,actual){
  let message = getSerialNumber() + " |";
  message = message + createColumn(funname,20) + "|";
  message = message + createColumn(num1,5) + "|";
  message = message + createColumn(num2,5) + "|";
  message = message + createColumn(expected,5) + "|";
  message = message + createColumn(actual,5) + "|";
  incrementSerialNumner();
  return message;

  
}

exports.testLog = testLog;
