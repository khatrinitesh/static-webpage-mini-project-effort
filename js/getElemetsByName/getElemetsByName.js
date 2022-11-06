
var output = document.getElementById('output');
var Btn = document.getElementById('btn');

function calc(){
	var a = document.getElementsByName('ff');
	a.forEach((ff) => {
		if(ff.checked){
			output.innerText = `${"you clicked" + ff.value}`
		}
	})
}
document.getElementsByTagName('ff');
