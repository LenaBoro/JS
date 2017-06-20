/*
Тестирование математической функции. 
*/

function calc_e(x,y){
	
	e = (1 + Math.pow(Math.sin(x + y), 2))/(2 + Math.abs(x-2*x/(1 - x*x*y*y))) + x;
	
	return e;	
}

describe("Тестирование математической функции", function(){
    var msg = "Позитивный тест: x=0, y=0, e=0.5";
    it(msg, function(){
        var rez = calc_e(0,0);
        expect(rez).toBe(0.5);
    });
	var msg2 = "Негативный тест: x=1, y=1 (деление на ноль), e=1";
    it(msg2, function(){
        var rez = calc_e(1,1);
        expect(rez).toBe(1);
    });
});