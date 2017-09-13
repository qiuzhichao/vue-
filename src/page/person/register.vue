<template>
	<div class="register-box">
		<ul>
			<li style="margin-left:10px;">
				<a onclick="window.history.go(-1)" style="font-size:54px;">&lt</a>
			</li>
			<li>
				<h2>用户注册</h2>
			</li>
			<li>
				<router-link to="/page/person/login" style="font-size:30px;">登录</router-link>
			</li>
		</ul>
			<input type="text" placeholder="请输入手机号码" class="username" v-model="user[0].name" style="margin-top:1rem;">
			<input type="password" placeholder="6-20位字母、数字结合" class="password" v-model="user[0].password">
			<input type="text" placeholder="验证码" class="yzm">
			<button v-on:click="register">注册</button>
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
				user:[
					{
						name:"",
						password:""
					}
				]	
			}
		},
		components:{vfooter},
		methods:{
			register(){
				if(this.user[0].name==""&&this.user[0].password==""){
					alert("请输入用户名/密码");
					return
				}else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.user[0].name))){
					alert("请输入正确的号码");
					return
				}else{
					var pw=this.user[0].password;
					var s=/^[0-9A-Za-z]{6,20}$/;
					if(!(s.test(pw))){
						alert("请输入正确格式的密码");
						return
					}
					
				}
				var ifo=JSON.parse(getCookie("information"));
				console.log(ifo)
				var obj=this.user[0];
				if(ifo==null){
					ifo=this.user;
				}else{
					for(var i=0; i<ifo.length;i++){
					if(ifo[i].name==this.user[0].name){
						alert("该用户已被注册");
						return
						}
					}
					ifo.push(obj);
				}
				setCookie("information",ifo,30);
				alert("注册成功");
				this.$router.push('/page/person/login');
				console.log(JSON.parse(getCookie("information")))
			}
		}
	}
</script>

<style scoped>
	body,p,ul,h2{
		margin:0;
		padding:0;
	}
	.register-box{
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
	form{
		width:100%;
		padding-top:1rem;
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
	.password,.yzm{
		display:block;
		width:8.46rem;
		height:1rem;
		margin:0 auto;
		margin-top:.5rem;
		border:none;
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