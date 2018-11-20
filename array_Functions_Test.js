const {equal,deepEqual} = require('assert');
const lib = require('./array_Functions.js');

const {slice} = lib;
const {fill} = lib;
const {filter} = lib;
const {map} = lib;
const {reduce} = lib;

const isEven = function(element){
  if(element%2 == 0)
    return element;
}

const isOdd = function(element){
  if(element%2 != 0)
    return element;
}

const getSquare = function(element){
  return element*element;
}

const sum = function(accumulator,element){
  return accumulator+element;
}

const testSlice = function(){
  let array = [1,2,3,4,5,6,7];
  deepEqual(slice(array),array);
  deepEqual(slice(array,0,5),[1,2,3,4,5]);
  deepEqual(slice(array,3,5),[4,5,]);
  deepEqual(slice(array,array.length),[]);
}

const testFill = function() {
  deepEqual(fill([1],"*"),["*"]);
  deepEqual(fill([],"*"),[]);
  deepEqual(fill([1,2,3]," "),[" "," "," "]);
  deepEqual(fill([1,2,3],1),[1,1,1]);
}

const testFilter = function(){
  deepEqual(filter(isEven,[1,2,3,4,4,2,5,6]),[2,4,4,2,6]);
  deepEqual(filter(isOdd,[3,4,5,6]),[3,5]);

}

const testMap = function() {
  deepEqual(map(getSquare,[1]),[1]);
  deepEqual(map(getSquare,[1,2,3]),[1,4,9]);
}

const testReduce = function() {
  deepEqual(reduce(sum,[1,2,3,4,5,6]),21);
  deepEqual(reduce(sum,[]),undefined);
  deepEqual(reduce(sum,[],2),2);
  deepEqual(reduce(sum,[1,-1],-2),-2);
}

testSlice();
testFill();
testFilter();
testMap();
testReduce();
