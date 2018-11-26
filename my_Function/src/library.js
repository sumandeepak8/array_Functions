const slice = function(elements,startingIndex = 0,endIndex = elements.length) {
  let array = [];
  for(let index in elements){
    if(startingIndex <= index && index < endIndex)
      array.push(elements[index]);
  }
  return array;
}

const fill = function(elements,character){
  for(let index in elements)
    elements[index] = character;
  return elements;
}

const filter = function(predicate,elements) {
  let array = [];
  for(let index in elements){
    let value = predicate(elements[index],index,elements);
    if(value != undefined)
      array.push(value);
  }
  return array;
}

const map = function(mapper,elements) {
  let array = [];
  for(let index in elements)
    array.push(mapper(elements[index],index,elements));
  return array;
}

const reduce = function(reducer,elements,accumulator = elements[0]) {
  let index = 0;
  if(accumulator == true)
    index = 1;
  for(index; index<elements.length; index++){
    accumulator = reducer(accumulator,elements[index],index,elements);
  }
  return accumulator;
}

const recursiveReduce = function(reducer,elements,accumulator) {
  let index = 0;
  if(accumulator == undefined){
    accumulator = elements[index];
    index = 1;
  }

  //function terminating condition
  if(elements[index] === undefined){
    return accumulator;
  }

  let remainingArray = elements.slice(index+1);
  let result  = reducer(accumulator,elements[index]) 
  return recursiveReduce( reducer, remainingArray, result);
}


const recursiveMap = function(mapper,elements){
  if(!elements.length)
    return [];
  let firstElement = [mapper(elements[0])];
  let remainning = recursiveMap(mapper,elements.slice(1));
  return firstElement.concat(remainning);
}

const recursiveFilter = function(predicate,elements) {
  let result = [];

  if(elements.length < 1)
    return result;

  if(predicate(elements[0]))
    result.push(elements[0]);

  let remaining = recursiveFilter(predicate,elements.slice(1));
  return result.concat(remaining);
}


module.exports = {slice,fill,filter,map,reduce,recursiveMap,recursiveReduce,recursiveFilter};
