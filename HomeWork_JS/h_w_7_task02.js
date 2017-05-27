	
	//Задача 2.Подключить стороннюю библиотеку для юнит тестирования.
	function schedule(x){
		var y = 1/x + Math.sqrt(x);
		return y; 
	}

//1 тест fatal 
describe("schedule",function(){
	var x=1;
	var res=1;
	var msg="Вывести y";
	
	it(msg, function(){
	var rez = schedule(x);
	expect(rez).toBe(1);
});
});
	
	 
	 
/* 	 2 тест true
 describe("schedule",function(){
	var x=1;
	var res=2;
	var msg="Вывести y";
	
	it(msg, function(){
	var rez = schedule(x);
	expect(rez).toBe(2);
});
}); */