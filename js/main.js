(function(){
	"use strict";	
	console.log("fired");	

	//defining variables and array

	let navButton = document.querySelector('#navButton'),
		navMenu = document.querySelector('.navMenu'),
		qualities = document.querySelectorAll('.qlImage'),
		print = document.querySelector('#static'),
		video = document.querySelector('#dynamic'),
		printCampaign = document.querySelector('#print'),
		videoCampaign = document.querySelector('#infomercial'),
		socialmediaIcon = document.querySelectorAll('.smImage');

	const qlData = [['Exceptional',`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex lorem,
						porttitor sit amet vehicula ut, scelerisque vitae lacus. Fusce eu rhoncus`],
					['Premium',`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex lorem,
						porttitor sit amet vehicula ut, scelerisque vitae lacus. Fusce eu rhoncus`],
					['Classic',`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex lorem,
						porttitor sit amet vehicula ut, scelerisque vitae lacus. Fusce eu rhoncus`],
					['Original',`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex lorem,
						porttitor sit amet vehicula ut, scelerisque vitae lacus. Fusce eu rhoncus`]];

	//defining functions

	function hamburgerMenu() {
		navMenu.classList.toggle("slideToggle");
		navButton.classList.toggle("expanded");
	}


	function expandQuality(){
		let pId = this.parentNode.id;
		let hId = document.querySelector(`#${pId} h3`);
		let paraId = document.querySelector(`#${pId} p`);
		let childId = this.classList[1];
		hId.textContent = `${qlData[childId][0]}`;
		hId.style.transition = "all 2s";
		paraId.textContent = `${qlData[childId][1]}`;
		console.log(`${pId}`);
		console.log(`${qlData[childId][0]}`);
		console.log(this.parentNode.childElementCount);
		// debugger;
	}

	function closeQuality(){
		let pId = this.parentNode.id;
		let hId = document.querySelector(`#${pId} h3`);
		let paraId = document.querySelector(`#${pId} p`);
		hId.textContent = ``;
		paraId.textContent = ``;

		// debugger;
	}


	function loadPrint(){
		
			videoCampaign.style.display = `none`;
			printCampaign.style.display = `inline`;
		
	}

	function loadVideo(){

		printCampaign.style.display = `none`;
		videoCampaign.style.display = `inline`;
	}


	function changeIcon(){
		// debugger;
		let imgClass = this.classList[1];
		this.src = `images/${imgClass}-blue.png`;
	}

	function resetIcon(){
		// debugger;
		let imgClass = this.classList[1];
		this.src = `images/${imgClass}.png`;	
	}

	//firing event handlers

	navButton.addEventListener("click", hamburgerMenu);
	qualities.forEach(qlImage => qlImage.addEventListener("mouseenter", expandQuality));
	qualities.forEach(qlImage => qlImage.addEventListener("mouseleave", closeQuality));
	socialmediaIcon.forEach(smImage => smImage.addEventListener("mouseenter", changeIcon));
	socialmediaIcon.forEach(smImage => smImage.addEventListener("mouseleave", resetIcon));

	print.addEventListener("click", loadPrint);
	video.addEventListener("click", loadVideo);
	

})();