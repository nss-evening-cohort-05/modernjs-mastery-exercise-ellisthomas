$(document).ready(function() {

    let myCharacters = [];


    const output = $("#container");

    const writeToDom = () => {
        let domString = "";
        for (let i = 0; i < myCharacters.length; i++) {
            domString += `<div class="col-md-6 col-md-4">`;
			domString += `<div class="thumbnail">`;
			domString += `<h1>${myCharacters[i].name}</h1>`;
			domString += `</div></div>`;
        }
        output.append(domString);
    };


    const loadChar = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/characters.json")
                .done((data) => resolve(data.characters))
                .fail((error) => reject(error));
        });
    };

    const loadGender = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/genders.json")
                .done((data) => resolve(data.genders))
                .fail((error) => reject(error));
        });
    };

    const loadTeams = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./db/teams.json")
                .done((data) => resolve(data.teams))
                .fail((error) => reject(error));
        });
    };


    $("button").click(function(dataGetter) {
        $("#background").hide();



    // $("button").click((event) => {
    //     console.log($(event.currentTarget));
    // });




	    Promise.all([loadChar(), loadGender(), loadTeams()])
	        .then((results) => {
	            // console.log("results", results);
	            results.forEach((ajaxCalls) => {
	                ajaxCalls.forEach((villan) => {
	                    myCharacters.push(villan);
	                });
	            });
	            writeToDom();
	            console.log("myCharacters", myCharacters);
	        });
    
    }); // end of button .hide()









}); //end of document.ready