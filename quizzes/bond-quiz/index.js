$(".card").on("click", function(event) {
    var title = console.log(event.attr("title"))
    console.log(title)
    
    cards = $(`select[title="${title}"]`)
    console.log(cards)

})

//         if (child.attr("display") === "block") {
//             child.attr("display", "none")
//         } else if (child.attr("display") === "none") {
//             child.attr("display", "block")
//         }
