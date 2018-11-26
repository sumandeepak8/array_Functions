const {equal,deepEqual} = require('assert');
const lib = require('../src/library.js');

const {
  slice,
  fill,
  filter,
  map,
  reduce,
  recursiveMap,
  recursiveReduce,
  recursiveFilter,
} = lib;

const isEven = function(element){
  if(element%2 == 0)
    return element;
}

const increment = function(element) {
  return element++;
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

const multiple = function(accumulator,element) {
  return accumulator*element;
}

describe("array functions",function(){

  let array ;
  beforeEach(function(){
    array = [1,2,3,4,5,6,7];
  });

  describe("slice",function(){

    it("if index values are not given, it should return same array",function(){ 
      deepEqual(slice(array),array);
    });

    it("it should give slice from 0th index to 5th index",function(){
      deepEqual(slice(array,0,5),[1,2,3,4,5]);
    });

    it("it should give slice from 3th to 5th index",function(){
      deepEqual(slice(array,3,5),[4,5,]);
    });

    it("it should give empty array",function(){
      deepEqual(slice(array,array.length),[]);
    });
  });

  describe("fill",function(){

    it("it should give one element in an array",function(){
      deepEqual(fill([1],"*"),["*"]);
    });

    it("it should give an empty array",function(){
      deepEqual(fill([],"*"),[]);
    });

    it("it should give an array of three space element",function(){
      deepEqual(fill([1,2,3]," "),[" "," "," "]);
    });

    it("it should give an array of three element",function(){
      deepEqual(fill([1,2,3],1),[1,1,1]);
    });
  });


  describe("filter",function(){

    it("it should give all even numbers",function(){
      deepEqual(filter(isEven,[1,2,3,4,4,2,5,6]),[2,4,4,2,6]);
    });

    it("it should give all even numbers",function(){
      deepEqual(filter(isOdd,[3,4,5,6]),[3,5]);
    });
  });

  describe("map",function(){

    it("it should give the squares of the respective numbers",function(){
      deepEqual(map(getSquare,[1]),[1]);
      deepEqual(map(getSquare,[1,2,3]),[1,4,9]);
    });
  });

  describe("reduce",function(){

    it("it should give the sum of all elements of an array",function(){
      deepEqual(reduce(sum,[1,2,3,4,5,6]),21);
    });

    it("it should give undefined as sum",function(){
      deepEqual(reduce(sum,[],0),0);
    });

    it("if the given array is empty than it should give the 0 or initial value of sum",function(){
      deepEqual(reduce(sum,[],2),2);
    });

    it("it should return sum of elements of array and initial value",function(){
      deepEqual(reduce(sum,[1,-1],-2),-2);
    });

    it("it should give the element if the array has single element",function(){
      deepEqual(reduce(multiple,[1]),1);
    });

    it("it should return the multiple of all elements of an array",function(){
      deepEqual(reduce(multiple,[1,2,3,4]),24);
    });

    it("it should return the multiple of all elements of array and initial value if we provide",function(){
      deepEqual(reduce(multiple,[1,4,5,0]),0);
    });

  });

  describe("test for recursiveMap,it should work same as map function",function(){

    it("it should give the sum increment numbers by one as map can",function(){
      deepEqual(recursiveMap(increment,[1,2,3,4,5,6]),map(increment,[1,2,3,4,5,6]));
    });
    it("it should give an empty array if input is empty array",function(){
      deepEqual(recursiveMap(increment,[]),map(increment,[]));
    });
  });

 describe("test for recursiveReduce",function(){

    it("it should return the sum of array as function reduce did",function(){
      deepEqual(recursiveReduce(sum,[1,2,3,4]),reduce(sum,[1,2,3,4]));
    });
  });

  describe("test for recursiveFilter",function(){

    it("it should filter all the even elements as filter did",function(){
      deepEqual(recursiveFilter(isEven,[1,2,3,4,5,8]),filter(isEven,[1,2,3,4,5,8]));
    });
  });

});
