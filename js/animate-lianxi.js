function getStyle(obj,style){  
	if(obj.currentStyle) 
	{  
		return obj.currentStyle[style];  
	} 
	else 
	{  
		return getComputedStyle(obj)[style];  
	}  
}
function animate(obj,json,callback){//传参：obj标明哪个对象要发生轮播，json标明属性,callback回调函数，执行成功。（可有可无）
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
		console.log(1);
		var flag=true;//设置标志位
 		// 遍历对象中的属性，使用forin
 		for(var attr in json){
 			if(attr=="opacity"){
				var now = parseInt(getStyle(obj,attr)*100);//attr属性名，每次循环中代表一个属性名
		    }
		    else{
				var now = parseInt(getStyle(obj,attr));
				var speed = (json[attr]-now)/10;//json[attr]属性值，访问相应的属性值
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				var current=now +speed;
				if(attr=="opacity"){
					obj.style[attr]=current/100;
				}
				else{
					obj.style[attr]=current +"px";
				}
				if(json[attr]!==current){
					flag=false;
		    	}
		}
		if(flag==true){
		    clearInterval(obj.timer);
		    if(callback){
		    	callback();
		    }
		}
	}
	},300)

}