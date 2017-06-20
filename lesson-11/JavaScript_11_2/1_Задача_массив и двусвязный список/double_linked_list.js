;(function(){
	
	window.DoubleLinkedList = DoubleLinkedList;
	
	function DoubleLinkedList(){	
		this.length = 0;
		this.head = null;
		this.tail = null;
		
		this.push = function(value){
			var tmp = new Node(value);
			if(this.head){
				tmp.next = this.head;
				this.head.prev = tmp;
				this.head = tmp;
			} else {
				this.head = tmp;
				this.tail = tmp;
			}
			this.length++;
		}
		
		this.pop = function(){
			if (this.length === 1) {
				var tmp = this.head;
				this.head = null;
				this.tail = null;
				this.length--;
				return tmp.data;
			} else if (this.length !== 0){
				var tmp = this.head;
				this.head = tmp.next;
				this.head.prev = null;
				this.length--;
				return tmp.data;
			} else {
				return null;
			}
		}
		
		this.toString = function(){
			var str = "";
			var node = this.head;
			while(node){
				str += node.data + ",";
				node = node.next;
			}
			return str.slice(0, str.length-1);
		}
				
		this.unshift = function(value){
			var tmp = new Node(value);
			if(this.tail){
				tmp.prev = this.tail;
				this.tail.next = tmp;
				this.tail = tmp;
			} else {
				this.head = tmp;
				this.tail = tmp;
			}
			this.length++;
		}
		
		this.shift = function(){
			if (this.length === 1) {
				var tmp = this.tail;
				this.head = null;
				this.tail = null;
				this.length--;
				return tmp.data;
			} else if (this.length !== 0){
				var tmp = this.tail;
				this.tail = tmp.prev;
				this.tail.next = null;
				this.length--;
				return tmp.data;
			} else {
				return null;
			}
		}
	}	
	
	function Node(value){
		this.data = value;
		this.next = null;
		this.prev = null;
	}
}());