(() => {
		// set up the puzzle pieces and boards
		// navButtons => images at the bottom of the page
	const navButtons = document.querySelectorAll("#buttonHolder img"),
		puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone'),
		puzzleBoard = document.querySelector('.puzzle-board');


		// store the images here
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];







		//functions go here => we want to have happen when our triggers fire
	function changeImageSet() {
		// change the thumbnail image on the left to mamtch the buttom image
		pieces.forEach((piece, index) => {
			puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
			puzzlePiece[index].id=`${piece + this.dataset.puzzleindex}`;	
		});


		// and set a background image on the drop xone container
		// debugger;
		// change the thumbnail iamges on the left to match the button image
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg)`;
	}





	function dragStart(event) {
		console.log('started a drag');

	// capture the id of the element we're dragging
	// the dataTransfuser object is part of the drag event -> you can use this to temporarialy store data you can retrive an duse later like an audio track

	event.dataTransfer.setData("text/plain", this.id);
	}







	function allowDragOver(event) {
		event.preventDefault();
		console.log('you dragged something into me!');

		let currentPiece = event.dataTransfer.getData("text/plain");

		event.target.appendChild(docuemnt.querySelector(`#${currentPiece}`));
	}




	function allowDrop(event) {
		console.log('you dropped something into me!');
	}





	// add some event heading fr the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));


	// set up the drag event on our puzzle pieces
	puzzlePiece.forEach(piece => piece.addEventListener('dragstart', dragStart))


	// set up drag over event for drop zones
	dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));
	

	// set up drop zone event for drop zones
	dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));



	// call, apply and bind are differnt ways to invoke finctions
	// you should know what call does --> resarch in on MDN
	changeImageSet.call(navButtons[0]);
})();
