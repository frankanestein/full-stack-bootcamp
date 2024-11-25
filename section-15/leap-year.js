function isLeap(year) {
    var isLeapYear = false;
    /**************Don't change the code above****************/    
    if (year % 4 === 0) {
        isLeapYear = true;
        if (year % 100 === 0) {
            isLeapYear = false;
        }
        if (year % 400 === 0) {
            isLeapYear = true;
        }
    } 

    if (isLeapYear) {
        console.log("Leap year.");
    } else {
        console.log("Not leap year.");
    }
    /**************Don't change the code below****************/    
    
    }