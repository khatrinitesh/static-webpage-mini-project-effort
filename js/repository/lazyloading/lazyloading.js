// Lazy Loading of Scripts in JavaScript
 => https://www.youtube.com/watch?v=v_sMvx-CMxs&ab_channel=RethinkingUI

function loadScript(url){
	let isLoaded = document.querySelectorAll('dynamic-script')
	if(isLoaded.length > 0 ){
		console.log('not loading the script');
		return;
	}
	let myScript = document.createElement('script');
	myScript.src = url;
	myScript.className = 'dynamic-script';
	document.body.appendChild(myScript);
	console.log('loading the script')
}

var searchinput = document.getElementById('search_input');
searchinput.addEventListener('focus',function(e){
		('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js')
})