<template>
	<div>
		<header>
			<span v-for='(item,index) in list'>
				<router-link :to='item.path'>{{item.text}}</router-link>
			</span>
		</header>
		<div class="mainlist">
			<ul>
				<li v-for='item in topics'>
					{{item.title}}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			list:[
					{
						text:'全部',
						path:'/?tab=all',
					},
					{
						text:'精华',
						path:'/?tab=good'
					},
					{
						text:'分享',
						path:'/?tab=share'
					},
					{
						text:'回答',
						path:'/?tab=ask'
					},
					{
						text:'招聘',
						path:'/?tab=job'
					}
				]

		}
	},
	computed:{
		topics(){
			return this.$store.state.topics
		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.getTopics()
		})
	},
	watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'getTopics'
  },
	methods:{
		getTopics(){
			let tab=this.$route.query.tab?this.$route.query.tab : '';
			this.axios.get('https://cnodejs.org/api/v1/topics?limit=20&tab='+tab)
				.then(res=>{
					this.$store.dispatch('loadTopics',res.data.data)
				})
				.catch(err=>{
					console.log(err)
				})
		}
	}
}
</script>

<style lang='less' scoped>
header{
	position:absolute;
	right: 0;
	left: 0;
	top: 0;
	z-index: 10;
	height: 49px;
	text-align: center;
	border-bottom: 1px solid #ddd;
	span{
		display: inline-block;
		width: 20%;
		line-height: 49px;
		a{	
			display: inline-block;
			width: 100%;
			text-decoration: none;
		}
	}
}
</style>