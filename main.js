var modon=confirm ("Amar 1st Design ta ki dekh te chan "
);

if(modon)alert("na akhono dekhini");
else {alert("kokhon dekhben")}

var count=0;

$("h2").text("Game")
$(".box").click(function(){
   count=count+1;
    $(this).text(count);
})