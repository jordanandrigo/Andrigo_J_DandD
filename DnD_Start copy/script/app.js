(() => {
	// set up the puzzle pieces and boards
	// navButtons => images at the bottom of the page
	let navButtons = document.querySelectorAll("#buttonHolder img");

	//functions go here => we want to have happen when our triggers fire
	function changeImageSet() {
		// change the thumbnail image on the left to mamtch the buttom image
		// and set a background image on the drop xone container
		debugger;
	}

// addd some event heading fr the nav navButtons
navButtons.forEach(button => button.addEventListener('click', changeImageSet));

})();
