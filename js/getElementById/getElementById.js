const FieldInput = document.getElementById('fieldinput');
const Btn = document.getElementById('btn')

Btn.addEventListener('click',function(){
	alert(FieldInput.value * FieldInput.value * FieldInput.value)
})