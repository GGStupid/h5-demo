<template>
	<footer>
		<span v-for='(item,index) in list'>
			<router-link :to='item.path'>{{item.text}}</router-link>
		</span>
	</footer>
</template>

<script>
	export default {
		data(){
			return {
				list:[
					{
						text:'首页',
						path:'/',
					},
					{
						text:'发表',
						path:'/topic/create'
					},
					{
						text:'消息',
						path:'/my/messages'
					},
					{
						text:'我的',
						path:'/my/home'
					}
				]
			}
		}
	}
</script>

<style lang='less' scoped>
footer{
	position:absolute;
	right: 0;
	left: 0;
	bottom: 0;
	z-index: 10;
	height: 49px;
	text-align: center;
	border-top: 1px solid #ddd;
	span{
		display: inline-block;
		width: 25%;
		line-height: 49px;
		a{	
			display: inline-block;
			width: 100%;
			text-decoration: none;
		}
	}
}
</style>