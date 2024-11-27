// $("h1").css("color","red");

// $(document).ready(function() {       //This would be used if the library was being obtained in the `head` section
//     $("h1").css("color","red");      //rather than at the bottom of body. It safeguards against not applying
// })                                   //formatting because the library has not yet been loaded.

$("h1").addClass("big-title margin-50");

$("h1").hasClass("margin-50");

$("button").text("don't click me");
$("h1").html("<em>Italisised</em>")

$("h1").click(function() {
    $("h1").css("color","red")
})

for (var i = 0; i<5; i++) {                                                         //this code can be 
    document.querySelectorAll("button")[i].addEventListener("click",function(){     //simplified to the 
        document.querySelector("h1").style.color = "purple";                        //below with jQuery
    })
}

$("button").click(function() {
    $("h1").css("color","purple");
})

// Challenge, update the h1 with whatever the keypress is

$(document).keypress(function(event){
    $("h1").text(event.key)
})

// More widespread use

$("h1").on("mouseover",function() {
    $("h1").css("color","blue")
})

$("h1").on("keypress",function(event) {
    $("h1").text(event.key)
})