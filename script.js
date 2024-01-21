// Variables to select html elements

const heading = document.getElementById("heading");
const headingSize = document.getElementById("heading-size");

const subHeading = document.getElementById("sub-heading");
const subHeadingSize = document.getElementById("sub-heading-size");

const btnSize = document.getElementById("btn-size");

const iframe = document.getElementById("iframe");

// Write your code below this line -
iframe.onload = function () {
	// Selecting the document inside of iframe
	editableFrame = iframe.contentDocument.body;
	// Getting all the id's that start with ad_
	elements = editableFrame.querySelectorAll('[id^="ad_"]');

	// Looping the each of the editable element and extracting the required information
	elements.forEach(element => {

		let obj = {
			// this gives us name of the element - ad_heading -> heading
			element: element.id.split("_")[1],
			// access to the text
			value: element.innerHTML,
			// access to the fontsize
			size: window.getComputedStyle(element).fontSize
		}

		// Pusing the object into an array for later use.
		data.push(obj)
	});

};





// Functions to perform operations 
function setData() {}

function changeHeading() {}

function changeHeadingSize() {}

function changeSubHeading() {}

function changeSubHeadingSize() {}

function changeBtnText() {}

function changeBtnTextSize() {}


// Function to take input from heading and return its value
function getInput(){
    // check in console for values
    console.log(heading.value)
    return heading.value
}


// Do not change the below code

function getData(){
	return data
}