<template>
	<div class="login-box">
		<ul>
			<li style="margin-left:10px;">
				<a onclick="window.history.go(-1)" style="font-size:54px;">&lt</a>
			</li>
			<li>
				<h2>账号密码登录</h2>
			</li>
			<li>
				<router-link to="/page/person/register" style="font-size:30px;">注册</router-link>
			</li>
		</ul>
			<input type="text" placeholder="请输入邮箱/手机号码" class="username" v-model="user.name" style="margin-top:1rem;">
			<input type="password" placeholder="请输入密码" class="password" v-model="user.password">
			<button v-on:click="login">登录</button>
			<router-link to="" class="forget">忘记密码</router-link>
		<vfooter></vfooter>
	</div>
</template>

<script>
	import vfooter from '../../components/footer.vue'
	import {getCookie,setCookie} from '../../../static/js/cookie.js'

	export default {
		data(){
			return{
				user:{
					name:"",
					password:""
				}
			}
		},
		components:{vfooter},
		mounted (){
			this.autoLogin();
		},
		methods:{
			login(){
				var that=this;
				var Gifo=JSON.parse(getCookie("information"));
				for(var i=0;i<Gifo.length;i++){
					if(Gifo[i].name==this.user.name&&Gifo[i].password==this.user.password){
						alert("登录成功");
						setCookie("RmPassword",this.user,30);
						this.$router.push({name:"person",params:{userid:that.user.name}})
						return
					}else{
						this.$router.push("/page/person/register");
					}
				}
			},
			autoLogin(){
				var rm=JSON.parse(getCookie("RmPassword"));
				if(rm==null){
					return
				}else if(rm.password!=""){
						this.$router.push({name:"person",params:{userid:rm.name}})
				}else{
					this.$router.push("/page/person/login");
				}
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
		display:block;
		width:100%;
	}
	::-webkit-input-placeholder{
	    color: #5a5a5a;
	    font-size: 0.4rem;
	    line-height: 1rem;
 	}
 	input{
 		text-indent:1em;
 		font-size: 0.4rem;
	    line-height: 1rem;
 	}
	.username{
		display:block;
		width:8.46rem;
		height:1rem;
		margin:0 auto;
		border:none;
	}
	.password{
		display:block;
		width:8.46rem;
		height:1rem;
		margin:0 auto;
		border:none;
		margin-top:.5rem;
	}
	button{
		display:block;
		width:8.46rem;
		height:1rem;
		margin:0 auto;
		color:#fff;
		background-color:#a24199;
		font-size: 0.4rem;
		margin-top:.5rem;
	}
	.forget{
		width:2rem;
		position:absolute;
		right:10px;
		font-size:.4rem;
		margin-top:0.3rem;
	}
</style>