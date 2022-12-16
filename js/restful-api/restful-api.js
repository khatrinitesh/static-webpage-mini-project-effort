async function fetchData(){
	const res = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0c1907a9ee37b190dcccec9cf3d9142c')
	const finalData = await res.json();
	console.log(finalData)
	console.log(finalData.coord.lon)
	console.log(finalData.coord.lat)
}