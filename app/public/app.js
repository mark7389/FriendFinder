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

		console.log(obj);
		var currentURL = window.location.origin;
		$.post(currentURL+"/api/friends", $.param(obj,true), function(data){
			var ctr = data.length-1;
			$("#results").append(" "+data.length);
			displayResults(obj, data, ctr);
			$("#next").on("click", function(){

				ctr--;
				displayResults(obj, data, ctr);

			});
			$("#myModal").modal("show");
			

		});
		
	}
	

});
function displayResults(obj, data, c){

	if(c < 0){

		$("#results").html("<p>Those were all of your matches</p>");
		
	}else{
		
		$("#friendImg").css({background: "url("+data[c].possible.photo+")","background-size": "cover", margin: "auto", "box-shadow": "10px"});
		$("#friendName").html(data[c].possible.name.toUpperCase());

	}
}

function findVal(){

	var x = $(this).find(":selected").text().charAt(0);

	if(arr[parseInt($(this).attr("id"))]){
		  arr[parseInt($(this).attr("id"))] = x;
	}
	else{

		arr.push(x);
	}

}

$("select").on("keyup", findVal);
$(document).on("click", "select", findVal);