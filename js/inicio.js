

// $("#btnTerminos").on("click", function(){
//     $("#tyc").hide();
// });

// $("#btnTerminos").on("click", function(){
//     $("#btnTerminos").hide();
// });

// $("#btnTerminos").on("click", function(){
//     $("#btnTerminos2").show();
// });

// $("#btnTerminos2").on("click", function(){
//     $("#btnTerminos2").hide();
// });

// $("#btnTerminos2").on("click", function(){
//     $("#tyc").show();
// });

// $("#btnTerminos2").on("click", function(){
//     $("#btnTerminos").show();


// })

$("#btnTerminos").on("click", function(){
    $("#tyc").hide()
    $("#btnTerminos").hide()
    $("#btnTerminos2").show();
});

$("#btnTerminos2").on("click", function(){
    $("#btnTerminos2").hide();
    $("#tyc").show();
    $("#btnTerminos").show();
})

