var all = document.getElementsByClassName('black')
function red(){
	document.getElementsByClassName('red')[0].style.backgroundColor = 'red'
}
function green(){
	document.getElementsByClassName('green')[0].style.backgroundColor = 'green'
}
function blue(){
	document.getElementsByClassName('blue')[0].style.backgroundColor = 'blue'
}
function reset(){
	for(i=0;i<all.length;i++){
		all[i].style.backgroundColor = 'black'
	}
}
