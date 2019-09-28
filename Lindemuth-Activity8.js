var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var highScore = -1;
var sum = 0;
var avg = 0;
var highScoreName = "";

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("name").select();
	$("add").onclick = function () { addScore($("name").value, $("score").value) };
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

function displayResults() {
	var h2 = document.createElement('h2');
	sum = 0;
	for (i = 0; i < scores.length; i++) {
		sum += scores[i];

		if (scores[i] > highScore) {
			highScore = scores[i];
			highScoreName = names[i];
		}
	}

	avg = sum / scores.length;

	h2.innerHTML = "<p>Average score = " + avg + "<br>" + "Highest Score is: " + highScoreName + " with " + highScore + "</p>";

	if ($("results").childElementCount != 0) {
		$("results").removeChild($("results").firstChild);
	}

	$("results").appendChild(h2);
}

function displayScores() {
	if ($("scores_table").childElementCount != 0) {
		for (i = 0; i < $("scores_table").childElementCount; i++) {
			$("scores_table").removeChild($("scores_table").firstChild);
		}

	}

	var row0 = $("scores_table").insertRow(0);

	var row0Cell0 = row0.insertCell(0);
	row0Cell0.innerHTML = "<tr><b> Name </b> </tr>";

	var row0Cell1 = row0.insertCell(1);
	row0Cell1.innerHTML = "<tr><b> Score </b></tr>";
	for (i = 0; i < names.length; i++) {
		var newRow = $("scores_table").insertRow(i + 1);
		var nameCell = newRow.insertCell(0);
		nameCell.innerHTML = "<tr>" + names[i] + "</tr>";

		var scoreCell = newRow.insertCell(1);
		scoreCell.innerHTML = "<tr>" + scores[i] + "</tr>";
	}


}

function addScore(name, score) {

	if (name.length == 0 || score.length == 0 || !isNaN(name) || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score.");
		$("name").value = null;
		$("score").value = null;
	}
	else {

		names.push(name);
		scores.push(parseInt(score));

		displayScores();
		displayResults();


		$("name").value = null;
		$("score").value = null;
	}
	$("name").select();
}
