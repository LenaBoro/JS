; function (){
	window.SpaceInviders=function(el){
		el.style.height=700px";
		el.style.width="700px";
		el.style.backgroundColor="black";	
		el.style.position="relative";	
		//������ ��������� �����, ����������� ���-��
		this.arrEnemy=[];
		this.gun=new Enemy(1,128 +128*i,128,"���� � ��������"
		for(var i=0; i<5;i++){
			this.arrEnemy.push(new Enemy(5,128 +128*i,128,"���� � ��������"));
			el.appendChild(this.arrEnemy[i].elimg);
		}
		var self=this;
		document.addEventListener("keydown",function(e){
			if(e.keyCode==37){
				//�����
			self.gun.moove(-5,0);
			}
			else if(e.keyCode==39){
				//������
				
			}
			else if(e.keyCode==38){
				//�������� ������� �����
			}
		
		
		
		
		
		});
	SpaceInviders.prototype.render=function(){
			self.gun.render();
		setInterval(this.render,20);
		
		}
		
		
	
	}
	//��������� ������� ����� = ������
	
	function Anime(speed,top,left,pathimg){//x-top,y-left
		this.isAliev= true;
		this.speed = speed;//����� ����������
		this.top=top;
		this.left=left;
		this.pathimg=pathimg;
		//������� ������
		
		this.elImg=document.createElement("img");
		this.elImg.src=this.pathimg;
		this.elImg.style.position = absolute;
		this.elImg.style.left=this.left+"px";
		this.elImg.style.top=this.top+"px";
		
//�������� ������� �������
		Enemy.prototype.killed=function(){
		
		
		Anime.prototype.move=function(dx,dy){
//����� �� �����, � ����������, ���������		
			this.left += dx*this.speed;
			this.top += dy*this.speed;

		}
		Anime.prototype.render=function(){
		this.elImg.style.left=this.left+"px";
		this.elImg.style.top=this.top+"px";
		}
		} 
	}		
}