
$(document).ready(function(){
	var canvas = $('canvas')[0],
	ctx = canvas.getContext('2d'),
	height = window.innerHeight - 20,
	width  = window.innerWidth,
	plane  = new Image(),
	people = [],
	//5 человеков
	peopleLeft = 100,
	level = 0,
	//попадение на остров
	hit = 0,
	//+свой-во уровней,сколько нужно попаст на след.уровень-missia(цель)
	tree = new Image(),
	//ускорение
	acceleration = 0.001,
	intervalTime = 30;
	run = true,
		//остров--------------------------
	ostrov = {
		radius:200,
		x:width /2 -70,
		y:height
	},
	//уровни------------------------------
	levels = [
				//0
		{
			missia:1,
			peopleLeft: 10
		},
				//1
		{
			missia:3,
			peopleLeft:9
		},
				//2
		{
			missia:6,
			peopleLeft:8
		}
	];
	//------------------------------------------
	canvas.height = height;
	canvas.width = width;
	//расположение самолета
	plane.horizontal = -100;
	plane.vertical = 30;
	//переменная для увеличения скорости
	plane.v0x = 0.1;
	
	plane.src = 'airplane.png';
	tree.src = 'trees.png';
	
	//отрисовка 
	plane.onload = function(){
		paintScreen()		
	}
	function paintScreen(){
		ctx.clearRect(0,0,height,width);
        drawPlane();
		drawPeople();
		drawOstrov();
		changePlane();
		setTimeout(paintScreen,30);
	}
	function drawPlane(){
		ctx.drawImage(plane,plane.horizontal,plane.vertical)
	}
	//полет ,если закончился экран, то гоу на страртовую позицию 
	function changePlane(){
		audioFon=$('#fon')[0];
		audioFon.play();
		
        plane.horizontal += plane.v0x * intervalTime;
		if(plane.horizontal > width){
			plane.horizontal = -100;
		}		
	};
	//canvas ---------------------------------------------
	function drawOstrov(){
		var xPos = ostrov.x;
		var ostrovWidth = 100;
			 ctx.fillStyle = '#ffd54f';
			 ctx.beginPath();
			 ctx.arc(xPos,ostrov.y,ostrov.radius, 1.6 * Math.PI, 1.3*Math.PI);
			 ctx.lineTo(xPos,ostrov.y - ostrov.radius);			 
			 ctx.arc(xPos + ostrovWidth, ostrov.y,ostrov.radius, 1.6* Math.PI, 2.2*Math.PI);
			 ctx.closePath();
			 ctx.fill();
			 
			 ctx.drawImage(tree,xPos + ostrovWidth-105,ostrov.y -480);
	};
	function Peoples(x,y,v0x,v0y){
		this.x = x;
		this.y = y;
		this.x0 = x;
		this.y0 = y;
		this.v0x = v0x;
		this.v0y = v0y;
		this.time = 0;
	};
    function drawPeople(){
	_.each(people,function(peoples){
			ctx.fillStyle = '#11240e';
			ctx.beginPath();
			//голова
			ctx.arc(peoples.x, peoples.y, 4, 0.5 * Math.PI, 2.5 * Math.PI);
			ctx.fill();
			ctx.lineWidth = 2;
			//тело
			ctx.lineTo(peoples.x, peoples.y + 15);
			//нога
			ctx.lineTo(peoples.x - 4, peoples.y + 25);
			ctx.moveTo(peoples.x, peoples.y + 13);
			//нога
			ctx.lineTo(peoples.x + 4, peoples.y + 25);
			//рука
		    ctx.moveTo(peoples.x,peoples.y + 8);
			ctx.lineTo(peoples.x + 8,peoples.y + 14);
			//рука
			ctx.moveTo(peoples.x,peoples.y + 8);
			ctx.lineTo(peoples.x - 8 ,peoples.y + 14);
			ctx.strokeStyle = '#11240e';
			ctx.stroke();
			ctx.closePath();
	
	});
	}	
	//счет -----------------------------------------------
	function countPeople(){
	_.each(people, function (peoples) {
		if (peoples.y > height + 20 ){
			people.splice(peoples,1);
		}
		if(peoples.y >= height - 20 && run){
				var xpos = ostrov.x;	
				var ostrovWidth = 100;
			if( peoples.x > xpos - 205 && peoples.x < xpos+ostrovWidth){
				hit += 1;
				people.splice(peoples,1);
		    }	
		}
	});
		//
	updateFooter();
		//
		if (hit >= levels[level].missia && run){
				peopleLeft = levels[level].peopleLeft;
				run = false;
			if (level == 2){
				winGame();
			}else{
				updateInfo();	
			}	
			$('#gameOver').show()
		}
		if(peopleLeft == 0 && people.length == 0 && run){
			run = false;
			level = 0;
			$('#gameOver').show();	
		}	
	}
	setInterval(countPeople,80)
//---------------------------------	
	
	//сообзение о выигрыше
	function winGame(){
		$('#start-game').show();
		$('start-game').text('<h1>You Win!</h1>');
		$('start-game').text('<h2>Try again?</h2>');
	}
	
//обновление инфы
    function updateInfo(){
		$('#gameOver').text('Good job!');
		
	}	

	function updateFooter(){
		$('#peopleLeft').text('Left people:' + peopleLeft);
		$('#hit').text('Hit: ' + hit);
		$('#missia').text('Missia: ' + levels[level].missia);	
	}

	//---------------------------------------------------
	//------полет людей-----------------------------------------
	setInterval(changePeople,80)
	 function changePeople(){
		_.each(people, function (peoples) {
			peoples.x = peoples.x0 + peoples.v0x * peoples.time;
			peoples.y = peoples.y0 + 0.5 * acceleration * Math.pow(peoples.time, 2);
			peoples.time += intervalTime;
		});
	};
		 
	//событие------------------------------------------
	$(document).on('keypress',function(e){
		if(e.charCode == 32 && peopleLeft!=0 && run){	
			peopleLeft--;
			audio = $('#audioP')[0];
			audio.play();
			people.push(new Peoples(plane.horizontal+100,plane.vertical+100,plane.v0x, 0));
		}
		
	});
	
	//-------------старт игры событие-----------------------------------------
	$('#start').on('click',function(){
		$('status-info').show();
		level++;
		peopleLeft = levels[level].peopleLeft;
		hit = 0;
	    run = true;
		$('#fieldGAme').show();
		$('#start-game').hide();
	});
	
	
});

