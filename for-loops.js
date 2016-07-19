
// this makes a for loop that displays current value 
// is from 5 to 115 in increment of 10
for (var i = 5; i < 121; i += 10) {
  console.log("current value is ", i);
}


// this makes a for loop that divides itself in half starting at 4096
for (var count = 4096; count > 1; count /= 2) {
  console.log("current value is ", count)
}


// this for loop lists the president in order
var presidents = [
"George Washington", "John Adams", "Thomas Jefferson", "James Madison", "James Monroe", "John Q Adams", "Andrew Jackson"]

for (var i = 0; i < presidents.length; i = i + 1) {
  console.log("President # " + (i + 1) + " was ", presidents[i])
}


// this object has keys and values. the for loop lists the keys (ant species names)
var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

 for (var prop in antSpecies) {
  console.log(prop);
 }