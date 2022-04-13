$("#toUpperCase").on("click", ()=> {
    $("#result").text($("#input").val().toUpperCase());
}
    )
$("#backwards").on("click", ()=> {
    //$("#input").val().reverse();
    $("#result").text($("#input").val().split("").reverse().join(""));
})
$("#words").on("click", ()=> {
    $("#result").text($("input").val().split(" "));   
})

$("#length").on("click", ()=> {
    $("#result").text($("input").val().length);
})

$("#withoutSpace").on("click", ()=> {
    $("#result").text($("input").val().split(" ").join("").length);
})
