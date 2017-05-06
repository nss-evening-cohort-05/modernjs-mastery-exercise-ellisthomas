$(document).ready(function() {

    let myCharacters = [];
    let printChar = "";


    const output = $("#container");


    $(".btn").click((event) => {
        $("#background").hide();
        printChar = ($(event.currentTarget).attr("id"));
        console.log($(event.currentTarget));
        // loadChar(team_id).then((results) => {
        //     // writeToDom(data.characters);
        // }).catch((error) => {
        //     console.log(myCharacters);
        // });
        writeToDom(myCharacters);
        // dataGetter();
    });

    const writeToDom = (results) => {
        let domString = "";
        for (let i = 0; i < myCharacters.length; i++) {
            domString += `<div class="col-md-3">`;
			domString += `<p class="name">${myCharacters[i].name}</p>`;
            if (myCharacters[i].gender_id === 0) {
                domString += `<img class="male" src="${myCharacters[i].image}">`;
            } else if (myCharacters[i].gender_id === 1) {
                domString += `<img class="female" src="${myCharacters[i].image}">`;
            }
            if (myCharacters[i].gender_id === 0 && myCharacters[i].description === "") {
                domString += `<p class="description">abcde fghij klmno pqrst uvwxy z</p>`;
            } else if (myCharacters[i].gender_id === 1 && myCharacters[i].description === "") {
                domString += `<p class="f-description">1234567890</p>`;
            }
			domString += `<p>${myCharacters[i].description}</p>`;
			domString += `</div>`;
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

    const teamChecker = (characters, teams, printChar) => {
        for (let i = 0; i < characters.length; i++) {
            for (let j = 0; j < teams.length; j++) {
                if (characters[i].team_id === teams[j].id && teams[j].name === printChar) {
                    let teamName = teams[j].name;
                    characters[i].teamName = teamName;
                    myCharacters.push(teamN);
                }
            }
        }
    };


    Promise.all([loadChar(), loadGender(), loadTeams()])
            .then((results) => {
                // console.log("results", results);
                results.forEach((ajaxCalls) => {
                    ajaxCalls.forEach((villan) => {
                        myCharacters.push(villan);
                    });
                });
                 // writeToDom();
                console.log("myCharacters", myCharacters);
            });

    // const dataGetter = () => {
	   //  Promise.all([loadChar(), loadGender(), loadTeams()])
	   //      .then((results) => {
	   //          teamChecker(results[0], results[2], printChar);
    //             // writeToDom(myCharacters);
    //             console.log("myCharacters",myCharacters);
	   //     })
    //         .catch((error) => {
    //             console.log("error in Promise All", error);
    //         });
    // };
    










}); //end of document.ready