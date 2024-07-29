
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

function triangles(number) {
//create for loop to loop over the number
  for (var i = 1; i <= number; i++) {
    var level = ''; // initialize an empty string for each level
    //create a for loop to access the '#'
    for (var j = 1; j <= i; j++) {
      level += '#'; // add a '#' for each column in the current row
    }
    console.log(level); // print level to the console
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
  // create for loop 
  for(var i = start; i <= end; i++){
    //  if the number is divisible by both 3 & 5
    if (i %  3 ===0 && i % 5 === 0){
      //log "fizzbuzz"
console.log("fizzbuzz")
  //if the number is divisible by 3,
    }else if(i % 3 === 0){
      //log "fizz"
      console.log("fizz");
      //if the number is divisible by 5
    }else if(i % 5 === 0){
      //log "buzz"
      console.log("buzz");
      //if the number is not divisible by 3 or 5
    }else{
      //log the number
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
  // initialize variable with empty array literal
  var chess = [];
//create for loop for each row index
    for (var i = 0; i < x; i++) {
      // initialize a variable with empty string for each row
        var row = '';
        //create for loop for second for loop for column
        for (var j = 0; j < x; j++) {
          //if i plus j  sum is equal the add a space, if not add '#'
            row += (i + j) % 2 === 0 ? ' ' : '#' ;
        }
        //push row string into chess array
        chess += row + '\n';
        
    }
// return chess array joined with a line break
    console.log(chess);

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