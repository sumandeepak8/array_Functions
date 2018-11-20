const slice = function(elements,startingIndex = 0, endIndex = elements.length) {
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

const filter = function(callBackfunction,elements) {
  let array = [];
  for(let index in elements){
    let value = callBackfunction(elements[index],index,elements);
    if(value != undefined)
      array.push(value);
  }
  return array;
}

const map = function(functionRef,elements) {
  let array = [];
  for(let index in elements)
    array.push(functionRef(elements[index],index,elements));
  return array;
}

const reduce = function(functionRef,elements,accumulator = elements[0]) {
  let index = 0;
  if(accumulator == true)
    index = 1;
  for(index; index<elements.length; index++){
    accumulator = functionRef(accumulator,elements[index],index,elements);
  }
  return accumulator;
}

exports.slice = slice;
exports.fill = fill;
exports.filter = filter;
exports.map = map;
exports.reduce = reduce;
