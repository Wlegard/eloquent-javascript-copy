
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/
//function has one parameter
function triangles(size) {
  //create loop to iterate from 1 to size(number of rows)
  for (var i = 1; i <= size; i++){
    // log '#'(create string of '#') and the number of each character using .repeat method
    console.log('#'.repeat(i));
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  // create for loop to iterate from start to end 
  for( var i = start; i <= end; i++){
    // if numbers are divisible by 3 & 5 
    if (i % 3 === 0 && i % 5 === 0 ){
      //lof 'fizzbuzz'
      console.log('fizzbuzz');
      // if numbers are divible by 5 only
    } else if(i % 5 === 0){
      // log 'buzz'
      console.log('buzz');
      //if numbers are divisible by 3 only
    }else if( i % 3 === 0){
      // log 'fizz
      console.log('fizz');
      // if numbers are not divisble by 3 or 5 
    }else{
      // log the number
      console.log(i);
    }

  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/

function drawChessboard(x) {
  // create varaible assigned to empty string
  var chessboard = ''
  // create for loop to iterate through row
  for (var i = 0; i < x; i++){
    //create for loop to iterate over each column
    for (var j = 0; j < x; j++) {
      // i + j are even 
    if ((i + j) % 2 === 0) {
      //add space
      chessboard += ' ';
      // if odd
  } else {
    // add '#'
      chessboard += '#';
  }
  }
  //add linebreak character
  chessboard += '\n'
}
//log chessboard
console.log(chessboard);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}