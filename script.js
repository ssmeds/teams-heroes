// Fetching Teams
fetch("./json/teams.json")
	.then(response => response.json())
	.then(teamsData => {
		console.log("teamsData: ", teamsData);
		// For every team I create a ul with the teamname and giving it the id of teamid
		for (team in teamsData) {
			let div = document.createElement("div");
			document.body.appendChild(div);
			div.insertAdjacentHTML("afterbegin", `<ul id = "${teamsData[team].teamId}"><h2>${teamsData[team].teamName}</h2></ul>`);
		}
	});

	// Fetching Heroes
fetch("./json/heroes.json")
	.then(response => response.json())
	.then(heroesData => {
		console.log("heroesData: ", heroesData);
		// For every hero I find the corresponding ul with the right teamid and adding the heroes to that ul as a li
		for (hero in heroesData) {
			let ul = document.getElementById(heroesData[hero].teamId)
			if (heroesData[hero].teamId == "1") {
				if (ul.id == "1") {
					ul.insertAdjacentHTML("beforeend", `<li>${heroesData[hero].heroName}</li>`);
				}
			} else if (heroesData[hero].teamId == "2") {
				if (ul.id == "2") {
					ul.insertAdjacentHTML("beforeend", `<li>${heroesData[hero].heroName}</li>`);
				}
			} else if (heroesData[hero].teamId == "5") {
				if (ul.id == "5") {
					ul.insertAdjacentHTML("beforeend", `<li>${heroesData[hero].heroName}</li>`);
				}
			} else {
				if (ul.id == "8") {
					ul.insertAdjacentHTML("beforeend", `<li>${heroesData[hero].heroName}</li>`);
				}
			}
		};
	});
