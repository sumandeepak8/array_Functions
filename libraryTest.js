const assert = require("assert");
const lib = require("./library.js");
const testFrame = require("./testFrameWork");

let {testLog} = testFrame;
let {sum,sub} = lib;

const testLib = function(funRef,num1,num2,expected){
  let actual = funRef(num1,num2);
  assert.deepEqual(actual,expected);
  console.log(testLog("Test for sum",num1,num2,expected,actual));
}

testLib(sum,3,4,7);
testLib(sum,4,5,9);
testLib(sub,7,5,2);
