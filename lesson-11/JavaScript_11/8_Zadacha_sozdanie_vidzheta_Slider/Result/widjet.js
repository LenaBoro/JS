;(function(){
	
	window.Slider = MySlider;
	//Инициализация слайдера 
	function MySlider(el, objSetting){
		//Вызываем функцию генерации необходимой разметки
		this.elUl = this.render(el, objSetting.arrImg); //элемент контейнер для картинок
		
		this.objSetting = objSetting; //Объект настроек
		this.current = 0; //Номер текущего отображаемого слайда
		//Подсчёт ширины слайдера
		var slider_width = this.objSetting.image_width * this.elUl.children.length;
		//Установка ширины слайдера
		this.elUl.style.width = parseInt(slider_width) + 'px';
		//Создаем целочисленный итератор
		this.iterator = 
			new IteratorSecond(0, -(this.objSetting.image_width * (this.elUl.children.length - 1)));
		//Устанавливаем левую позицию
		this.elUl.style.left="0px";
		//Запуск слайдера
		this.animate();
	}
	
	MySlider.prototype.render = function(mainDiv, arrPathsToFoto){
		//Функция генерирует необходимую слайдеру разметку
		mainDiv.classList.add("container");
		var elDiv = document.createElement('div');
		elDiv.classList.add('image-slider-wrapper');
		var elUl = document.createElement('ul');
		elUl.classList.add('image_slider');
		//Добавляем фотографии
		var elLi;
		var elImg;
		for(var i = 0; i < arrPathsToFoto.length; i++){
			elLi = document.createElement('li');
			elImage = document.createElement('img');
			elImage.src = arrPathsToFoto[i];
			elLi.appendChild(elImage);
			elUl.appendChild(elLi);
		}
		elDiv.appendChild(elUl);
		mainDiv.appendChild(elDiv);
		return elUl;		
	}	
	
	MySlider.prototype.animate = function(){
		var that = this;
		var left = this.elUl.style.left;
		if(!(left.slice(0,left.length-2)%this.objSetting.image_width)){
			setTimeout(function(){
				that.elUl.style.left = that.iterator._incrL() + "px";
				that.animate();
			}, this.objSetting.durationSleep);
		} else {
			setTimeout(function(){
				that.elUl.style.left = that.iterator._incrL() + "px";
				that.animate();
			}, this.objSetting.delayMove);
		}
	}	
}());