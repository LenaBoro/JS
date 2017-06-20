;(function(){
	window.TaskManager = function(el){
		this.el = el;
		this.id = 0;		
	}
	
	TaskManager.prototype.addTask = function(title) {
		var taskId = this.id++;
		var task = new Task(title, taskId);
		var html = task.template();
		this.el.appendChild(html);
	};
	
	function Task(title, id) {
		this.title = title;
		this.id = id;
		this.completed = false;
	}
	
	Task.prototype.template = function() {
		var htmlTemplate = document.createElement('div');
		htmlTemplate.setAttribute('data-id', this.id);

		htmlTemplate.classList.add('task');

		var span = document.createElement('span');
		span.innerText = this.title;

		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.setAttribute('cont-id', this.id);
			
		htmlTemplate.appendChild(span);
		htmlTemplate.appendChild(checkbox);		
		
		checkbox.addEventListener('click', this.complete);
		
		return htmlTemplate;
	};
	
	Task.prototype.complete = function(event) {
		var isChecked = event.target.checked;
		var dataId = event.target.getAttribute('cont-id');
		var el = document.querySelector('[data-id="' + dataId + '"]');

		if (isChecked) {
			el.classList.add('complete');
		} else {
			el.classList.remove('complete');
		}
	};	
}())