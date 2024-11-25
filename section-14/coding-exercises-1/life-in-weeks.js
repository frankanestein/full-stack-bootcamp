function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
    var maxAge = 90;
    var remainingYears = maxAge - age;    
    var remainingMonths = remainingYears * 12;
    var remainingWeeks = remainingYears * 52;
    var remainingDays = remainingYears * 365;
    
    alert("You have " + remainingDays + " days, " + remainingWeeks + " weeks, or " + remainingMonths + " months left.")
        
    /*************Don't change the code below**********/
    }
    
var age = prompt("What is your current age?");
lifeInWeeks(age);