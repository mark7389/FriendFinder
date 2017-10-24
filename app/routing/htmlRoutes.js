var path = require("path");


module.exports = function(app){

	app.get("/", function(req, res){

		res.sendFile(path.join(__dirname, "../public/home.html"));

	});

	app.get("/:placeHolder?", function(req, res){

		var chosen = req.params.placeHolder;
		
		console.log(chosen);

		switch(chosen){

			case "home": res.sendFile(path.join(__dirname, "../public/home.html"));
			break;

			case "survey": res.sendFile(path.join(__dirname, "../public/survey.html"));
			break;

			default: res.status(404).send("<h1>Page Not Found</h1>");
		}

	});

}