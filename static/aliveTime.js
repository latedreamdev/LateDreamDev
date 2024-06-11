const getAliveTime = () => {
	const lastUpdateDate = new Date('2024-03-22T15:25:15');
	let currentTime = new Date();
	let mins = (((currentTime - lastUpdateDate)/1000)/60);
	let hours = parseInt(mins/60);
	let min = parseInt(mins-(hours*60));
	let s = parseInt((mins-parseInt(mins))*60);
	let days = parseInt(hours/24);
	let hour = parseInt(hours-(days*24));
	let weeks = parseInt(days/7);
	let day = parseInt(days-(weeks*7));
	let aliveTime = (`${weeks}周 ${day}天 ${hour}小时 ${min}分钟 ${s}秒`);

	document.getElementById("aliveTime").innerHTML = aliveTime;
}
const at = setInterval(getAliveTime, 1000);