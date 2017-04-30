$(document).ready(function() {

    let myCharacters = [];


    const output = $("#container");


    $("button").click((event) => {
        let team_id = event.target.id;
        console.log($(event.currentTarget));
        loadChar(team_id).then((results) => {
            // writeToDom(data.characters);
        }).catch((error) => {
            console.log(myCharacters);
        });
    });

    // const getXmen = () => {
    //     for (let i = 0; i < myCharacters.length; i++) {
    //         if(myCharacters[i].team_id === 0) {
    //             xmen.push(myCharacters[i]);
    //         }
    //     }
    //     writeToDom(xmen);
    // };

    const writeToDom = (results) => {
        let domString = "";
        for (let i = 0; i < results.myCharacters.length; i++) {
            domString += `<div class="col-md-6 col-md-4">`;
			domString += `<div class="thumbnail">`;
			domString += `<h1>${results.myCharacters[i].image}</h1>`;
            domString += `<p>Hello</p>`;
			domString += `</div></div>`;
        }
        $("#container").append(domString);
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
	            console.log("myCharacters", myCharacters);
	        });
    
    }); // end of button .hide()









}); //end of document.ready