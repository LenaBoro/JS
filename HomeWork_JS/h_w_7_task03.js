	//наибольшее число в массиве
;(function(){
	window.mylib = {
		findMax:function(arr){
			var max = arr[0];
			for(var i=0; i<arr.length;i++){
				if(max<arr[i]){
					max=arr[i];
				}
			}
			return max;
			}
		}
}());
 
	//наименьшее число в массиве
/*
	;(function(){
	window.mylib = {
		findMin:function(arr){
			var min = arr[0];
			for(var i=0; i<arr.length;i++){
				if(min>arr[i]){
					min=arr[i];
				}
			}
			return min;
			}
		}
}());
*/
		// расчет среднего арифметического
/*;(function(){		
		window.mylib = {
		Calc_arith_mean:function(arr){ 
			var res=0;
			var len=arr.length;
			for(var i=0;i<len;i++){ 
			res+=a[i];
			}
			return res/len;
		}
}()); 

		// клонирование переданного массива
	;(function(){		
		window.mylib = {
		get_clone_arr:function(arr){
			var arr1=[];
			var len=arr.length;
				for(var i=0;i<len;i++){
					arr1.push(arr[i]);
				}
				return arr1;
			}
	}()); 
*/
