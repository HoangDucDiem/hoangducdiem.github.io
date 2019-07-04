function validateForm() {
//Tên phải được điền
var ten = document.forms[“myForm”][“ten”].value;
if (ten == “”) {
alert(“Tên không được để trống”);
return false;
}
//----------------------------------------------------------------------
//Ngày phải được điền
var nm = document.forms[“myForm”][“ngaymua”].value;
if (nm == “”) {
alert(“Ngày không được để trống”);
return false;
}
//----------------------------------------------------------------------
//Email phải được điền chính xác
var email=document.forms[“myForm”][“email”].value;
var aCong=email.indexOf(“@”);
var dauCham = email.lastIndexOf(“.”);
if (email == “”) {
alert(“Email không được để trống”);
return false;
}
else if ((aCong<1) || (dauCham<aCong+2) || (dauCham+2>email.length)) {
alert(“Email bạn điền không chính xác”);
return false;
}
//----------------------------------------------------------------------
//Nhập số điện thoại
var dienThoai = document.forms[“myForm”][“dienThoai”].value;
var kiemTraDT = isNaN(dienThoai);
if (dienThoai == “”) {
alert(“Điện thoại không được để trống”);
return false;
}
if (kiemTraDT == true) {
alert(“Điện thoại phải để ở định dạng số”);
return false;
}