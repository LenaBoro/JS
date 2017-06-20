

	function exp(x,y){
		var e = 1 + Math.pow(Math.sin(x+y),2)/2+Math.abs((x-2*x)/(1-Math.pow(x,2)*Math.pow(y,2)))+x;
			return e;
	}
	describe("exp",function(){
	var x=5;
	var y=4;
	var result = 6.097452151259782;
	
	var msg = "Вывести e";
	
	it(msg,function(){
	var rez = exp(x,y);
	
		expect(rez).toBe(6.097452151259782);
});
});

/* function calc_sum_numbers(str){
	var sum=0;
	for(var i=0; i<str.length;i++){
		var x=parseInt(str[i])
		if(x!== NaN)
			sum+=x;
	}
	return sum;
}
describe("index_calc_sum_numbers_from_str",function(){
var input_str="1111";
var result=4;
var msg="Вывести сумму"	+input_str+"результат 4"

it(msg,function(){
	var rez =calc_sum_numbers(input_str);
	
		expect(rez).toBe(4);
});
}); */