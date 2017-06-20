
;(function(){

	window.myUtils = {
		//1 шаг делаем поле
		createGamePlace:function (id,n){
		var container = document.getElementById(id);
		var tbody = document.createElement("tbody");
		container.append(tbody);
		// 3 шаг делаем массив, добавляем цифры на размерность поля
		var arrNum=[];
		for(var i=0; i<=n*n;i++){
			arrNum.push(i);
		}
		
		for(var i = 0; i< n;i++){
			var tr = document.createElement("tr");
			for(var j = 0; j<n;j++){
				var td = document.createElement("td");
					td.innerText = GetRandomNum(arrNum);
					td.style= getRandomStyle()
					tr.append(td);
			}
		tbody.append(tr);	
		
		}
		}
	    }
//2 шaг генератор чисел
		function rand(min,max){
			return Math.floor(Math.random()*(max-min)+min);
		}	
		//обработчик события 
			var a=1;
			container.addEventListener("click",function(e){
				if (e.target.tagName ="TD"){
					var content = e.target.innerText; 
					if(parseInt(content) === a )
					{e.target.style.backgroundColor="rgb(2,5,255)";
						a++;
					}
				}
			},false);	
		
		//  4 шаг запуск случайных чисел
		function GetRandomNum(arr){			
			return arr.splice(rand(0,arr.length-1),1);	
		}
			// стиль цифрам 
		function getRandomStyle(){
			return "font-size:"+ rand(10,34)+ "px;color:"+ getRandomColor();
		}
	
		function getRandomColor(){
			return 'rgb('+ rand(0,255) + ',' + rand(0,255)+',' + rand(0,255)+')';			
		}
			
			return 	
		
		}
		
());
