$().ready(function() {
	vm = new Vue({
		el: 'body',
		data: {
			ball:{
				
				x:0,
				y:0,
				z:0,
				rx:0,
				ry:0,
				rz:0,
				clipwidthheight:40,
				hanasuR:0,
				clips:[]
				},
			number:0,
			url:"img/1.gif",
		},
		methods: {
			rotateYDeg:function($index,len){
				if ($index==0||$index>=(len-1)) {
					return (Math.floor($index/(len-1))-90);
				} else{
					
					
					return this.lines[$index].y;
				}
				
			}
			,
			rotateXDeg:function($index){

					return this.lines[$index].x;
//					return (Math.floor($index/(36-Math.floor($index/36)))*10);
			}			
		},
		computed: {
			ballR:{
				get: function() {
					
					return Math.sqrt(this.ball.clips.length*this.ball.clipwidthheight*this.ball.clipwidthheight/4/Math.PI)
					
					
					
				},
				set: function(newValue) {

				}
			},
			lines:{
				get: function() {
					
					var lineCount=Math.floor(0.5*Math.PI*this.ballR/this.ball.clipwidthheight);
					var lines=[]
					var inx=0;
					for (var i = 0; i <= lineCount; i++) {
						var count=Math.floor((2*Math.PI*i/lineCount)*Math.floor(this.ballR/this.ball.clipwidthheight))+Math.ceil(Math.sin(i/lineCount*Math.PI)*lineCount+1);
						
						for (var j = 0; j < count; j++) {
							lines[inx]={x:j*360/count,y:i/lineCount*90-90};
							inx+=1;
						}
						
					}
					for (var i = 0; i <= (lineCount-1); i++) {
						var count=Math.floor((2*Math.PI*i/lineCount)*Math.floor(this.ballR/this.ball.clipwidthheight))+Math.ceil(Math.sin(i/lineCount*Math.PI)*lineCount+1);
						
						for (var j = 0; j < count; j++) {
							lines[inx]={x:j*360/count,y:i/lineCount*90+90};
							inx+=1;
						}
						
					}
					console.log(lines);
					return lines;
					
					
				},
				set: function(newValue) {

				}
			}
			
			
			
			
			
		}
		
	});

	for(var i = 0; i < vm.number; i++) {
		vm.ball.clips.push({});
//		vm.ball.clips.push({url:'img/1.jpg'});
	}

	vm.$watch("number", function(val) {
		
		arr=[];
	for(var i = 0; i < vm.number; i++) {
		arr.push({});
//		vm.ball.clips.push({url:'img/1.jpg'});
	}
		vm.ball.clips=[];
		vm.ball.clips=arr;
		
	});
	
	vm.number=500;
});
var vm;
$().ready(function() {
	var  isDrag=false;
	var  obj=null;
	var  preX=null;
	var  preY=null;
	$(document).on('keydown',function(e){
		
		
		
		
	});
	$(document).on('keyup',function(e){
		
		
		
	});
	$(document).on('mousewheel',function (e) {
		
		if (e.altKey) {
			vm.ball.rz+=e.originalEvent.wheelDelta;
			
		}
		else
		{
			vm.ball.z+=e.originalEvent.wheelDelta;
		}
	});
	$(document).on('mousedown',  function(e) {
		isDrag=true;
		obj=$(this);
		preX=e.clientX;
		preY=e.clientY;
//		$(this).data('prepoint', {
//			x: e.clientX,
//			y: e.clientY
//		});
	});
	$(document).on('mouseup',function(e) {
		isDrag=false;
		preX=null;
		preY=null;
		obj=null;
//		$(this).data('prepoint', null);
		//			$(this).find('.data-move-img').css('pointer-events','');

	});
	$(document).on('mousemove', function(e) {

//		var point = $(this).data('prepoint');
		if(isDrag&&obj) {
			
			
			if (e.altKey) {
				vm.ball.ry+=(e.clientX-preX)/10;
				
				vm.ball.rx-=(e.clientY-preY)/10;
				
				preX=e.clientX;
				preY=e.clientY;
			} else{
				vm.ball.x+=(e.clientX-preX);
				
				vm.ball.y+=(e.clientY-preY);
				
				preX=e.clientX;
				preY=e.clientY;
			}
		}

	});
});