$(".title1").on("click",function(){
    $(".caption-title1").slideToggle(500)
})
$(".title2").on("click",function(){
    $(".caption-title2").slideToggle(500)
})
$(".title3").on("click",function(){
    $(".caption-title3").slideToggle(500)
})
$(".title4").on("click",function(){
    $(".caption-title4").slideToggle(500)
})
$(".open").on("click",function(){
    $("nav").animate( {width:"toggle"},1000)
    $("header").animate({   marginLeft:"15.625rem"},1000)
    
})

$(".icon").on("click",function(){
    $("nav").animate( {width:"toggle"},1000)
    $("header").animate({   marginLeft:"0"},1000)
    
})
$("nav a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},400);
    
})

function makeTimer() {

		
		let endTime = new Date("23 october 2020 5:56:00");			
			endTime = (Date.parse(endTime) / 1000);

			let now = new Date();
			now = (Date.parse(now) / 1000);

			let timeLeft = endTime - now;

			let days = Math.floor(timeLeft / 86400); 
		let  hours = Math.floor((timeLeft - (days * 86400)) / 3600);
		let  minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
	let  seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "10") { seconds = "0" + seconds; }

			$(".days").html(days + "<span>Days</span>");
			$(".hours").html(hours + "<span>Hours</span>");
			$(".minutes").html(minutes + "<span>Minutes</span>");
			$(".seconds").html(seconds + "<span>Seconds</span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);

	var maxLength = 100;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#num").text("your available character finished");
                
            }
        else{
        
        $("#num").text(AmountLeft);
        }
});

