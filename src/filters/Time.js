const time={
	renTimeStr:function(t){
		if(!str)return ''
		var date=new Date(t)
		var time=(new Date().getTime()-date.getTime())/1000
		if(time<0){
			return ''
		}else if(time<30){
			return '刚刚'
		}else if(time<60){
			return parseInt(time)+'秒前'
		}else if((time/60)<60){
			return parseInt(time/60)+'分钟前'
		}else if((time/3600)<24){
			return parseInt(time/3600)+'小时前'
		}else if((time/86400)<31){
			return parseInt(time/86400)+'天前'
		}else if((time/2592000)<12){
			return parseInt(time/2592000)+'月前'
		}else{
			return parseInt(time/31536000)+'年前'
		}
	}
}