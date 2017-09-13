<template>
	<div class="person">
		<ul>
			<li style="margin-left:10px;">
				
			</li>
			<li>
				<h2>个人中心</h2>
			</li>
			<li>
				<router-link to="/" style="font-size:30px;">首页</router-link>
			</li>
		</ul>
		<div class="user-base">
			<div class="user-info">
				<img src="../../../static/img/user.jpg"/>
				<p class="name">{{$route.params.userid}}</p>
				<p class="introduce">打造真正的国际化名品电商平台，把唯美生活方式带进中国的家庭，向世界推广中国文化和名品</p>
			</div>
		</div>
		<button v-on:click="logOut">退出登录</button>
		<vfooter></vfooter>
	</div>
</template>

<script>
	import vfooter from '../../components/footer.vue'
	import {getCookie,setCookie,clearCookie} from '../../../static/js/cookie.js'

	export default {
		data(){
			return{

			}
		},
		components:{
			vfooter
		},
		methods:{
			logOut(){
				clearCookie("RmPassword");
				this.$router.push('/page/person/login');
			}
		}
	}
</script>

<style scoped>
	body,p,ul,h2{
		margin:0;
		padding:0;
	}
	.login-box{
		background-color:#fafafa;
	}
	ul{
		position:relative;
		list-style:none;
		overflow:hidden;
		height:1.586rem;
		border-bottom:1px solid #5a5a5a;
	}
	li{
		float:left;
		height:1.586rem;
		line-height:1.586rem;
	}
	li:nth-child(2){
		position:absolute;
		left:36%;
	}
	li:nth-child(3){
		position:absolute;
		right:10px;
	}
	a{
		text-decoration:none;
	}
	.user-base{
		position:relative;
		height:4.04rem;
		background:url(../../../static/img/ucenter-base.png);
		background-size:100% 100%;
	}
	img{
		display:block;
		width:1.5rem;
		height:1.5rem;
		border-radius:100%;
		margin:0 auto;
	}
	.name{
		color:#fff;
		padding:0.3rem;
		font-weight:bold;
		font-size:25px;
	}
	.introduce{
		text-indent:2em;
		color:#a24199;
	}
	button{
		display:block;
		width:6.46rem;
		height:1rem;
		margin:0 auto;
		color:#fff;
		background-color:#a24199;
		font-size: 0.4rem;
		margin-top:.5rem;
		border-radius:1rem;
	}
</style>