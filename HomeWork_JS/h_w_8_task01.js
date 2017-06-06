
		setInterval(function createTodayDate(){
			
		var TodayDate = new Date();
		//часы
			var hours = TodayDate.getHours();
			if(hours < 10){hours="0"+hours};
		//минуты			
			var minutes = TodayDate.getMinutes();
			if(minutes < 10){minutes="0"+minutes};
		
	//секунды
			var second = TodayDate.getSeconds()
			if(second < 10){second ="0"+second};
	
		//вывод на экран
	
		var clock= hours + ":" + minutes + ":" +second ;
		
		document.getElementById('time').innerHTML = clock;
		
	
		},100);
		
	
	 

