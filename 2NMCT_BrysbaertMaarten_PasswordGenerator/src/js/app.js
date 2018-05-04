
(function() {
	"use strict";

	let output,

		copyToClipIcon,
		refreshIcon,

		lengthSlider,
		lengthRangeValue,

		popup,

		charCheckbox,
		specialCharCheckbox,
		numberCheckbox,
		capitalsCheckbox;


	(function init() {
		output = document.querySelectorAll(".generator-canvas__output--output")[0];

		copyToClipIcon = document.querySelectorAll(".copy-to-clip")[0];
		refreshIcon = document.querySelectorAll(".refresh-password")[0];

		lengthSlider = document.querySelectorAll(".length-slider")[0];
		lengthRangeValue = document.querySelectorAll(".length-range-value")[0];

		popup = document.querySelectorAll(".generator-canvas__popup")[0];

		charCheckbox = document.querySelector("#characters");
		specialCharCheckbox = document.querySelector("#specialChars");
		numberCheckbox = document.querySelector("#numbers");
		capitalsCheckbox = document.querySelector("#capitals");
		
		copyEventListeners();
		sliderEventListeners();
		refreshIconEventListeners();

		// changeOutput();
	})();

	function sliderEventListeners() {
		lengthSlider.addEventListener('change', () => {
			lengthRangeValue.innerHTML =  lengthSlider.value;
			changeOutput();
		})
	}

	function refreshIconEventListeners(params) {
		refreshIcon.addEventListener('click', () => {
			changeOutput();
		})
	}

	function copyEventListeners() {
		//eventlistener op icon
		copyToClipIcon.addEventListener("click", () => {
			copyToClipboard.copy(output);
			showPopup(2000);
		});
		//eventlistener op password
		output.addEventListener("click", () => {
			copyToClipboard.copy(output);
			showPopup(2000);
		});
	}

	function changeOutput() {
		output.value = passwordGenerator.newPassword(lengthSlider.value, charCheckbox.checked, numberCheckbox.checked, capitalsCheckbox.checked, specialCharCheckbox.checked);
	}

	function showPopup(timeout) {
		popup.style.opacity = ".8";
		setTimeout(() => {
			popup.style.opacity = ".0";
		}, timeout);
	}
	

})();