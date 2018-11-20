let divider ;
let modulous ;
let primeCandidateOfPrimeNumbers = process.argv[2];
let count = 1 ;
let initial = 2 ;
let initializeDivider = 2 ;
let primeCandidate =0;

if(primeCandidateOfPrimeNumbers == 1){
  primeCandidate = initial;
  console.log(primeCandidate) ;
}
if( primeCandidateOfPrimeNumbers > 1){
  for( initial = 2; count <= primeCandidateOfPrimeNumbers -1; initial++ ){
    primeCandidate = initial ;
    maxDivider = Math.floor(primeCandidate/2 +1) ;
    for( initialDivider = 2 ; initialDivider <= maxDivider ; initialDivider++ ){
      divider = initialDivider ;
      modulous = primeCandidate % divider ;
      if( modulous == 0 && divider <= maxDivider ){
        maxDivider=false;
      }
      if(modulous!=0 && divider >= maxDivider){
        // console.log(primeCandidate) ;
        count += 1 ;
      }
    }
  }
  console.log(primeCandidate);
}
if( primeCandidate == 0){
  console.log("invalid input");
}
