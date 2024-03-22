function getAliveTime () {
	const lastUpdateDate = new Date('2024-03-22T15:25:15');
	var currentTime = new Date();
	var mins = (((currentTime - lastUpdateDate)/1000)/60);
	var hours = parseInt(mins/60);
	var min = parseInt(mins-(hours*60));
	var s = parseInt((mins-parseInt(mins))*60);
	var days = parseInt(hours/24);
	var hour = parseInt(hours-(days*24));
	var weeks = parseInt(days/7);
	var day = parseInt(days-(weeks*7));
	var aliveTime = (weeks+'周 '+day+'天 '+hour+'小时 '+min+'分钟 '+s+'秒');

	document.getElementById("aliveTime").innerHTML = aliveTime;
}
setInterval(function(){getAliveTime();},1000);