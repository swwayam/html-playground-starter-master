const heading = document.getElementById("heading")
const headingSize = document.getElementById("heading-size")

const subHeading = document.getElementById("sub-heading")
const subHeadingSize = document.getElementById("sub-heading-size")


const btn = document.getElementById("btn")
const btnSize = document.getElementById("btn-size")

const iframe = document.getElementById("iframe")
let editableFrame;

let elements = []
const data = []

iframe.onload = function (event) {
	editableFrame = iframe.contentDocument.body;
	elements = editableFrame.querySelectorAll('[id^="ad_"]');


	elements.forEach(element => {
		let obj = {
			element: element.id.split("_")[1],
			value: element.innerHTML,
			size: window.getComputedStyle(element).fontSize
		}

		data.push(obj)
	});

	console.log(data);
	setData()

};


function setData() {
	for (const el of data) {
		if (el.element == "heading") {
			heading.value = el.value
			headingSize.value = el.size
		} else if (el.element == "sub-heading") {
			subHeading.value = el.value
			subHeadingSize.value = el.size
		} else if (el.element == "btn") {
			btn.value = el.value
			btnSize.value = el.size    
		}
	}
}


function changeHeading() {
	editableFrame.querySelector("#ad_heading").innerHTML = heading.value
}

function headingSizeChange(){
	console.log(headingSize.value);
	editableFrame.querySelector("#ad_heading").style.fontSize = headingSize.value
}

function changeSubHeading() {
	editableFrame.querySelector("#ad_sub-heading").innerHTML = subHeading.value
}

function subHeadingSizeChange(){
	editableFrame.querySelector("#ad_sub-heading").style.fontSize = subHeadingSize.value
}

function changeButtonText() {
	editableFrame.querySelector("#ad_btn").innerHTML = btn.value
}

function btnSizeChange(){
	editableFrame.querySelector("#ad_btn").style.fontSize = btnSize.value
}
