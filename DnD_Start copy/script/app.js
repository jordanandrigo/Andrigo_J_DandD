(() => {
		// set up the puzzle pieces and boards
		// navButtons => images at the bottom of the page
	const navButtons = document.querySelectorAll("#buttonHolder img"),
		puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
		puzzleBoard = document.querySelector('.puzzle-board');


		// store the images here
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

		//functions go here => we want to have happen when our triggers fire
	function changeImageSet() {
		// change the thumbnail image on the left to mamtch the buttom image
		pieces.forEach((piece, index) => puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`);		
		// and set a background image on the drop xone container
		// debugger;
		// change the thumbnail iamges on the left to match the button image
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`
	}

	// addd some event heading fr the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));

})();
