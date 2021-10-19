function onload() {
	randomcolor();
}
var rgbToHex = function(rgb) {
	var hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex;
	}
	return hex;
}

function set_body_background(color) {
	if (color.length == 3 || color.length == 6) {
		document.getElementById("body").style.backgroundColor = "#" + color;
	}
}

function hex_set(code) {
	document.getElementById("hex").value = "#" + code;
	set_body_background(code);
}

function rgb_set(redcolor, greencolor, bluecolor) {
	document.getElementById("rgb").value = "rgb(" + redcolor + "," + greencolor + "," + bluecolor + ")";
}

function copyclipboard(input_name) {
	if (input_name == 'hex' || input_name == 'rgb') {
		var textBox = document.getElementById(input_name);
		textBox.select();
		document.execCommand("copy");
	}
}

function randomcolor() {
	var newcolor = [];
	newcolor[1] = getRandomArbitrary(0, 255);
	newcolor[2] = getRandomArbitrary(0, 255);
	newcolor[3] = getRandomArbitrary(0, 255);
	hex_set(componentToHex(newcolor[1]) + componentToHex(newcolor[2]) + componentToHex(newcolor[3]));
	rgb_set(newcolor[1], newcolor[2], newcolor[3]);
}

function getRandomArbitrary(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function componentToHex(color) {
	color = parseInt(color);
	var hex = color.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function changecolor(types) {
	hexcolor = document.getElementById("hex").value;
	hexcolor = hexcolor.replace("#", "");
	hexcolor = hexcolor.trim();
	rgbcolor = document.getElementById("rgb").value;
	rgbcolor = rgbcolor.trim();
	rgbcolor = rgbcolor.replace("rgb", "");
	rgbcolor = rgbcolor.replace("(", "");
	rgbcolor = rgbcolor.replace(")", "");
	rgbcolor = rgbcolor.split(",");
	if (types == 'hex' && (hexcolor.length == 3 || hexcolor.length == 6)) {
		if (hexcolor.length == 3) {
			rgb_set(parseInt(hexcolor.slice(0, 1) + "" + hexcolor.slice(0, 1), 16), parseInt(hexcolor.slice(1, 2) + "" + hexcolor.slice(1, 2), 16), parseInt(hexcolor.slice(2, 3) + "" + hexcolor.slice(2, 3), 16));
		} else if (hexcolor.length == 6) {
			rgb_set(parseInt(hexcolor.slice(0, 2), 16), parseInt(hexcolor.slice(2, 4), 16), parseInt(hexcolor.slice(4, 6), 16));
		}
		hex_set(hexcolor);
	} else if (types == 'rgb') {
		var redcolor = parseInt(rgbcolor[0]);
		var greencolor = parseInt(rgbcolor[1]);
		var bluecolor = parseInt(rgbcolor[2]);
		if (!((redcolor < 0 || redcolor > 255) || (greencolor < 0 || greencolor > 255) || (bluecolor < 0 || bluecolor > 255))) {
			if (!isNaN(redcolor) && !isNaN(greencolor) && !isNaN(bluecolor)) {
				hex_set(componentToHex(redcolor) + componentToHex(greencolor) + componentToHex(bluecolor));
				rgb_set(redcolor, greencolor, bluecolor);
			}
		}
	}
}