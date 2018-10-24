/* 
	Copyright © 2018 by Kyle Eades 
	This is a random story generator
	I'm terrible at stories so buckle 
	your seatbelts for this generic nonsense
*/
//Make arrays with some story options
var character = [
"farmer", 
"rogue", 
"warrior",
];
var origin = [
"was raised in the bustling city of Andorhal.", 
"was raised on a farm in the northwestern territory.", 
"grew up around the small village of Bree.",
];
var destination = [
"Eye of the World", 
"Well of Ascension", 
"Dark Tower",
];
var villain = [
"Shai'tan",
"the Assassin in White",
"the Man in Black",
"Morgoth",
"Yogg-Saron"
];
//Make a story
function story(){
	//Set up the random factor for the story arrays
	var persona = Math.floor(Math.random()*character.length);
	var roots = Math.floor(Math.random()*origin.length);
	var destiny = Math.floor(Math.random()*destination.length);
	var enemy = Math.floor(Math.random()*villain.length);
	document.getElementById("story").innerHTML = "You are a " + character[persona] + " that " + origin[roots] + 
	" One day you realized you are the one that must travel to the " + destination[destiny] + 
	" and defeat " + villain[enemy] + " to save the world.";
	document.images["destinypic"].src = destiny + ".png";
	document.getElementById("button1").value = "Another story please!";
}