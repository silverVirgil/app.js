var math = require('./math');
var util = require('util');
process.stdin.setEncoding('utf8');
console.log('entrez 2 valeurs entières: X,Y <return>');
process.stdin.on('data', function(d) {
  console.log('received data:', util.inspect(d));
  var gcd = math.gcd(d.toString().split(',')[0],
    d.toString().split(',')[1]);
  console.log('Pour ' + d.toString().split(',')[0] +
    ' et ' + d.toString().split(',')[1] +
    ' gcd : ' + gcd);
  console.log('vous avez saisie : [' + d.toString().trim() + ']');
  console.log('entrez 2 valeurs entières: X,Y <return>');
  if (d === 'quit\n') {
    done();
  }
});

function done() {
  console.log('programme terminé !');
  process.exit();
}
