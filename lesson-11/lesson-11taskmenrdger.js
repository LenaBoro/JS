//to do list
;function(){
		window.TaskManager = function(domEl){
			this.id=0;
			this.task=[];
			
			domEl.addEventListener('click',function(e){
				if(e.target.tagName==='INPUT'){
					
					var e.target.getAttribute("data-count-id");
					var div = e.target.parentNode;
					div.classList.toogly("complete")
				
				}	
			});
	TaskManager.prototype.addTask=function(name){
		var task=new Task(name,this.id++);
		domEl.appendChild(task.render());
		
	}
		}
	function Task(name){	
		this.name=name;
		//this.complete=false;
		
		Task.prototype.render= fuction(){
		var mainDiv= document.createElement('div'); 	
		mainDiv.classList.add("task");
		mainDiv.setAttribute("data-id",id);
		
		var span=document.createElement('span');
		span.innerHTML=	this.name;	
		mainDiv.appendChild(span);
		
		var input=document.createElement('input');
			input.type="checkbox";
			input.setAttribute("data-count-id",id);
			mainDiv.appendChild(input);
		}
	}
	
}());