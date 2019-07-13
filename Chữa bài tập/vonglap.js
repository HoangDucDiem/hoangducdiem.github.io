//Bai1-C1
function repeatString(string){
	let str = '';
	for (let i = 0; i < 10; i++) {
		str +=string +'-';
	}
	return str.slice(0, str.length - 1);
}

//Bài 1 -C2
function repeatString2(string){
	let str = [];
	for (let i = 0; i < 10; i++) {
		str.push(string);
	}
	return str.join('-');
}

function string(str, number, separator){
	let str = [];
	let number = 3;
	let separator = ','
	for (let i = 0; i < number; i++) {
		str.push(string);	
	}
	return str.join();
}
