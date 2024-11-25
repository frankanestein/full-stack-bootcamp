/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

// https://stanford.edu/~cpiech/karel/ide.html

function main(){
    putBeeper();    // added this after for diagonal line of beepers
    diagUp();
    diagUp();
    diagUp();
    diagUp();
}
 
function diagUp() {
    move();
    turnLeft();
    move();
    turnRight();
    putBeeper();    // added this after for diagonal line of beepers
}
 
function turnRight() {      // This function has been added - does not need to be created anymore
    turnLeft();
    turnLeft();
    turnLeft();
}
 