let result = document.getElementById('result');

function hienThiLenManHinh(button){
	document.getElementById('result').value+= button.value;
}

function tinhKetQua(){
	
	result.value=eval(result.value);
}
function xoaKiTuCuoi(){
	
	result.value=result.value.substr(0,result.value.length-1);
}
function tichtich(){
	result.value+=result.value*result.value;
}