var arr= [];

$("#search").on("click", function(e){
					
	e.preventDefault();
	if(arr.length < 10 || $("#name").val() === "" || $("#imgUrl").val() === ""){

		alert("Please answer all fields before searching")

	}else{

		var obj = {

			name: $("#name").val().trim(),
			photo: $("#imgUrl").val().trim(),
			scores: arr,
		}

		console.log(obj);//
		var currentURL = window.location.origin;
		//post
		
	}
	$("#myModal").modal("show");

});

function findVal(){

	var x = $(this).find(":selected").text().charAt(0);

	if(arr[parseInt($(this).attr("id"))]){
		  arr[parseInt($(this).attr("id"))] = x;
	}
	else{

		arr.push(x);
	}

}

$(document).on("click", "select", findVal);