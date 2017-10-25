var friendsData = require("../data/friends.js");

//console.log(friendsData);



function findFriend(obj, func){
	
	var myFriend =[];
	var previousScores = [];
	
	for(var i = 0; i<friendsData.length ; i++){

		var currentScore = 0;
	
		for(var j = 0; j<obj.scores.length; j++){

			currentScore += Math.abs(parseInt(obj.scores[j])-parseInt(friendsData[i].scores[j]));

		}
		
		console.log(friendsData[i].name+": "+currentScore+"\n")
		previousScores.push(currentScore);
		
		if(previousScores[0] >= previousScores[i]){

			previousScores[0] = previousScores[i];
			myFriend.push({possible: friendsData[i], difference: previousScores[i]});
			console.log(myFriend);
		}

	}

	func(myFriend);
}

module.exports = function(app){


	app.get("/api/friends", function(req, res){

		res.json(friendsData);

	});

	app.post("/api/friends", function(req, res){

		console.log(req.body);
		
		findFriend(req.body, function(myFriend){

			res.json(myFriend);
			if(myFriend[myFriend.length-1].photo !== req.body.photo){

				friendsData.push(req.body);

			}

		});

	});



}