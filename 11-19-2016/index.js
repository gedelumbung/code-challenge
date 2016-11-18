//1st answer
var full_name="GedeLumbung";

//2nd answer
function orderize(){
  var tmp = full_name.split("").join('-').toLowerCase()
  return tmp.split('-').sort();
}

//3rd answer
function distinguish(){
  var arr = orderize();
  return arr.filter(function(elem, pos) {
    return arr.indexOf(elem) == pos;
  });
}

//4th answer
var reversed = distinguish().reverse();

//5th answer
function group() {
  var characters = {
    'vocals' : [],
    'consonants' : []
  }
  var arr = reversed;
  arr.forEach(function(value) {
    if((/^[aeiou]$/i).test(value)) {
      characters.vocals.push(value);
    } else {
      characters.consonants.push(value);
    }
  });
  return characters;
}

console.log(full_name);
console.log(orderize());
console.log(distinguish());
console.log(reversed);
console.log(group());
