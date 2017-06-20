;(function(){
	
	window.Iterator = MyIterator;
	
	function MyIterator(_from, _to){		
		this._from = _from;
		this._to = _to;
		var curr = _from;
		
		this._incr = function(){
			if(this._from < this._to) {
				curr++;
			} else if (this._from > this._to) {
				curr--;
			}
			return curr;	
		}		
	}
	
}());