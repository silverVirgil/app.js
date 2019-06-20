 function gcd (a,b) {

return b ? gcd(b, a % b) : a ;
}

 module.exports.gcd = gcd ;

 function factorielle(n, acc) {

   acc || (acc = 1) ;

return n ? factorielle(n-1, acc * n) : acc ;
 }

 module.exports.factorielle = factorielle ;
