const shuffler = function(input) {
  let names =  input.slice();
  let randomElement = [];
  while(names.length){
    let randomIndex = Math.floor(Math.random()*names.length)
    randomElement.push(names[randomIndex]);
    names.splice(randomIndex,1);
  }
  return randomElement;
}

const main = function(){
  if(process.argv[2] == undefined){ console.log("invalid argument");return 1;}
  let input = process.argv[2].split(",");
  console.log(shuffler(input).toString());
}
main();
