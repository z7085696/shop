window.onload = function(){   //用来加载整个页面中的元素

	//设置当前时间-------------------------
	var dom = document.querySelector('.htime');
	dom.innerHTML = time()
	setInterval(function(){
		dom.innerHTML = time()
	},5000)

	function time(){
		var n = new Date();
		var y = n.getFullYear();
		var mo = n.getMonth() + 1;
		var d = n.getDate();
		var h = n.getHours();
		var m = n.getMinutes();
		var s = n.getSeconds();

		var str =add0(h)+':'+add0(m);
		return str
	}

	function add0(num){
		if (num>9) {
			return num
		}else{
			return '0'+num
		}
	}	
	//轮播图----------------------------------------------
	var picAll =document.querySelectorAll('.pic');
	var box = document.querySelector('article');
	var ps =document.querySelectorAll('.dian');
	var index = 0;
	var timer;
	//遍历所有div
	hideDiv(0);
	function hideDiv(a){
		for(var i=0; i<3; i++){
			picAll[i].style.display='none';   //隐藏所有的div
			ps[i].style.background = '#7c8185';	//让所有P改变颜色
		}
		picAll[a].style.display='block';    //只显示当前的div
		ps[a].style.background = 'red';     //让其中一个p变成红色
	}
	//控制div按时出现
	time1()
	function time1(){
		timer = setInterval(function(){
			index++
			if (index>=3) {
				index = 0
			}
			hideDiv(index)
		},2000)
	}
	//鼠标放在上面div停止计时
	box.onmouseover = function(){
		clearInterval(timer);
	}
	//鼠标离开时启动定时器
	box.onmouseout = function(){
		time1()
	}

	//点击小圆点,出现对应的图片.
	for(var j=0; j<3; j++){
		ps[j].index = j;
		ps[j].onclick = function(){
			hideDiv(this.index);
		}
	}





}