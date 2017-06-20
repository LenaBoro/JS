;(function(){
	window.myUtils = {
		remove:function(arr, index){
			return arr.splice(index, 1);
		},
		repeat:function(str, count){
			return Array(count+1).join(str);
		},
		pluck:function(arr, name){
			var result = [];
			for(var i = 0; i < arr.length; i++){
				if(typeof arr[i] === "object" && 
					arr[i][name] !== undefined){
					result.push(arr[i][name]);
				}
			}
			return result;
		}
	}	
}());