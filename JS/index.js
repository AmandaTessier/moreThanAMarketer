// changes to snow theme
function switchToSnow(){
	// change the background to snow
	$("body").addClass("winterBackground");

}

// changes to beach theme
function switchToBeach(){
	// change the background to beach
	$("body").removeClass("winterBackground");

}

// user clicks on grey button
$(".beachButton").click(switchToBeach);



// user clicks on white button
$(".snowButton").click(switchToSnow);
