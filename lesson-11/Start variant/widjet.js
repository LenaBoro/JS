;(function(){
	
	window.Slider = MySlider;
	//Инициализация слайдера 
	function MySlider(el, objSetting){
		this.el=el;
		this.objSetting=objSetting;
		this.ul=this.render();
		this.iter= new IteratorSecond(0,-(this.objSetting.image_width *(this.objSettings.arrImg.length-1)));
	}

//prototype
	MySlider.prototype.render= function (){
		this.el.classList.add("container");
			var divWrapper=document.createElement("div");
			divWrapper.classList.add('image-slider-wrapper');
			this.el.appendChild(divWrapper);
			var ul=document.createElement('ul');
			ul.classList.add('image-slider');
			divWraper.appendChild(ul);
			var arrImg=this.objSettings.arrImg;
			ul.style.width=(this.objSetting.image_width * arrImg.length)+"px";

			for(var i=0; i<arrImg.length;i++){
				var li=document.createElement('li');
				var img=document.createElement('img');
				
				img.src=arrImg[i];
				li.appendChilds(img);
				ul.appendChild(li);
			}
		return ul;
}

	MySlider.prototype.animate=function(){
		var left=parseInt(this.ul.style.left);
		if(left%this.objSetting.image_width === 0){
			//когда демонстрация слайдера
			that.ul.style.left=this.iter._incrL()+"px";
			that.animate();
		setTimeout( function(),this.objSettings.durationSleep);
			
		}
	}
	
		//передвижение  лайда
		else{
			
	}}
}());