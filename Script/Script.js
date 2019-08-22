
////////////// SlideDown ///////////////////////

/*Código para uso do JQuery*/

$(document).ready(function(){

	/*
		comandos que fazem os elemontos terem animação de subir e descer.
	*/
	$("#flip").click(function(){
		//$("#panel").slideDown("slow");
		//$("#panel").slideDown();
		//$("#panel").slideDown(10000);
		$("#panel").slideDown("fast");
	});

	$("#flip2").click(function(){

		$("#panel").slideUp(1000);

	});

	/*
		animação que faz a mesma coisa dos outrosdois anteriores.
	*/

	$("#flip3").click(function(){
		$("#panel").slideToggle("slow");
	});


});


////////////////////// FadeOut ////////////////////////


	$(document).ready(function(){
		$("#b1").click(function(){
			$("#div1").fadeOut();
			$("#div2").fadeOut("slow");
			$("#div3").fadeOut(3000);
	});
});

	$(document).ready(function(){
		$("#b2").click(function(){
			$("#div1").fadeIn();
			$("#div2").fadeIn("slow");
			$("#div3").fadeIn(3000);
	});
});


///////////// Append ////////////////////////////



	$(document).ready(function(){
		$("#btn1").click(function(){
		    $("p").append(" <b>Appended text</b>.");
	});

	 $("#btn2").click(function(){
		$("ol").append("<li>Appended item</li>");
		});
	});



////////////// Remove /////////////////////////


	$(document).ready(function(){
		 $("button").click(function(){
		    $("p").remove();
		});
	});





/////////////// Accordion //////////////////////


var acc = document.getElementsByClassName("accordion");
var i;

 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var panel = this.nextElementSibling;
     if (panel.style.display === "block") {
       panel.style.display = "none";
     } else {
        panel.style.display = "block";
      }
    });
  }
