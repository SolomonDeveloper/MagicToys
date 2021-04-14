
const navbtn = () =>{
$(".btnbaby").click( () =>{
    $(".baby").show();
    $(".decor").hide();
});


$(".btndecor").click( () =>{
    $(".decor").show();
    $(".baby").hide();
})


$(".btngift").click( () =>{
    $(".decor").hide();
    $(".baby").hide();
    $(".gift").show();

})
}

navbtn();