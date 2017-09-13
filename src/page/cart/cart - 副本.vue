<template>
	<div class="cart-box">
		<ul class="head">
			<li style="margin-left:10px;">
				<a onclick="window.history.go(-1)" style="font-size:54px;">&lt</a>
			</li>
			<li>
				<h2>购物车</h2>
			</li>
			<li>
				<router-link to="/" style="font-size:30px;">首页</router-link>
			</li>
		</ul>
		<ul class="cart-list">
			<li v-for="(cart,index) in cookieIfo" :key="cart.id">
				<div class="cart_left">
					<input type="checkbox" class="cart-check" :value="cart.id" @click="currClick(cart,index)" v-model="cart.checked"/>
					<img :src="cart.img"/>
				</div>
				<div class="cart_right">
					<h4>{{cart.title}}</h4>
					<span class="price">￥{{cart.price}}</span>
					<p class="cart-ifo">
						<a class="delete" @click="deletes(index)">-</a>
						<input type="text" v-model="cart.sum" class="cart-sum"/>
						<a class="add" @click="add(index)">+</a>
						<button class="remove"  @click="remove(index)">删除</button>
					</p>
				</div>
			</li>
		</ul>
		<div class="cart-footer">
			<input type="checkbox"  v-model="checkAll" id="allClick"/><i>全选</i>
			<p class="allMoney">总价￥{{totalMoney}}</p>
			<button>去结算</button>
		</div>
		<div v-show="!cookieIfo.length">
			<p>您的购物车快饿扁了</p>
			<router-link to="/">带我去购物吧</router-link>
		</div>
	</div>
</template>
<script>
import {getCookie,setCookie,clearCookie} from '../../../static/js/cookie.js'
	export default{
		data(){
			return{
				checkAllbtn:false,
				cookieIfo:[],
				checked:[],
				totalPrice:[]
			}
		},
		computed:{
			totalMoney:function(item,index){
				let sum=0;
				for(let i=0;i<this.totalPrice.length;i++){
					sum+=this.totalPrice[i];
				};
				return sum;
			},
			checkAll:{
				get:function(){
					return this.checkedCount==this.cookieIfo.length;
				},
				set:function(value){
					var that=this;
					if(value){
						this.totalPrice=[];
						this.checked=this.cookieIfo.map(function(item){
							item.checked=true;
							let total=item.price*item.sum;
							that.totalPrice.push(total);
							return item.id;
						})
					}else{
						this.checked=[];
						this.totalPrice=[];
						this.cookieIfo.forEach(function(item,index){
							item.checked=false;
						})
					}
				}
			},
			checkedCount:{
				get:function(){
					var i=0;
					this.cookieIfo.forEach(function(item){
						if(item.checked==true) i++;
					})
					return i;
				}
			}
		},
		mounted(){
			this.getCart();
			document.getElementById("allClick").click();
			document.getElementById("allClick").click();
		},
		methods:{
			getCart(){
				var _this=this;
				var cookieIfo=JSON.parse(getCookie("cartIfo"));
				this.cookieIfo=cookieIfo;
			},
			currClick(item,index){
				var that=this;
				if(typeof item.checked=='undefined'){
					this.$set(item,'checked',true);
					let total=item.price*item.sum;
					this.totalPrice.push(total);
				}else{
					item.checked=!item.checked;
					if(item.checked){
						this.totalPrice=[];
						this.cookieIfo.forEach(function(item,index){
							if(item.checked){
								let total=item.price*item.sum;
								that.totalPrice.push(total);
							}
						});
					}else{
						this.totalPrice=[];
						this.cookieIfo.forEach(function(item,index){
							if(item.checked){
								let total=item.price*item.sum;
								that.totalPrice.push(total);
							}
						});
					}
				}
			},
			remove(index){
				this.cookieIfo.splice(index,1);
				setCookie("cartIfo",this.cookieIfo,30);
				document.getElementById("allClick").click();
				document.getElementById("allClick").click();
			},
			deletes(index){
				if(this.cookieIfo[index].sum<=1){
					this.cookieIfo[index].sum=1;
				}else{
					this.cookieIfo[index].sum--;
				}
				setCookie("cartIfo",this.cookieIfo,30);
				this.cookieIfo=JSON.parse(getCookie("cartIfo"));
			},
			add(index){
				if(this.cookieIfo[index].sum>=5){
					this.cookieIfo[index].sum=5;
				}else{
					this.cookieIfo[index].sum++;
				}
				setCookie("cartIfo",this.cookieIfo,30);
				this.cookieIfo=JSON.parse(getCookie("cartIfo"));
			}
		}
	}
</script>
<style scoped>
	body,p,ul,h2,h5{
		margin:0;
		padding:0;
	}
	.login-box{
		background-color:#fafafa;
	}
	.head{
		position:relative;
		list-style:none;
		overflow:hidden;
		height:1.586rem;
		border-bottom:1px solid #5a5a5a;
	}
	.head>li{
		float:left;
		height:1.586rem;
		line-height:1.586rem;
	}
	.head>li:nth-child(2){
		position:absolute;
		left:44.5%;
	}
	.head>li:nth-child(3){
		position:absolute;
		right:10px;
	}
	a{
		text-decoration:none;
		width:100%;
	}
	.cart-list>li{
		position:relative;
		padding:.186rem 0;
		height:3.04rem;
		border-bottom:1px solid #ebebeb;
	}
	.cart-list{
		padding-bottom:1.33rem;
	}
	li{
		list-style:none;
		overflow:hidden;
	}
	img{
		display:inline-block;
		width:2.4266rem;
		height:3.04rem;
	}
	.cart_left{
		float:left;
	}
	.cart_right{
		position:relative;
		margin-left:3rem;
		height:3.04rem;
		padding-right:.61333rem;
	}
	.cart-check{
		position:relative;
		left:.2rem;
		top:-1.3rem;;
		display:inline-block;
		width:35px;
		height:35px;
	}
	.cart-ifo{
		display:inline-block;
		position:absolute;
		right:.2666rem;
		color:#4c4c4c;
		bottom:.3rem;
	}
	.price{
		position:absolute;
		left:0;
		bottom:.2933rem;
		line-height:1;
		color:#a24199;
	}
	.delete,.add{
		display:inline-block;
		width:.6rem;
		height:.6rem;
		line-height:.64rem;
		color:#8c8c8c;
		font-size:.7rem;
		border:1px solid #8c8c8c;
	}
	.cart-sum{
		display:inline-block;
		width:.6rem;
		height:.6rem;
		line-height:.64rem;
		color:#8c8c8c;
		font-size:.5rem;
		border:none;
	}
	.cart-footer{
		position:fixed;
		bottom:0;
		height: 1.333rem;
	    width: 100%;
	    z-index: 1000;
	    line-height:1.333rem;
	    background-color:#fff;
	}
	#allClick{
		margin-top:30px;
		display: inline-block;
	    width: 35px;
	    height: 35px;
	    position:absolute;
	    left:0;
	}
	.cart-footer>i{
		font-style:normal;
		position:absolute;
		left:35px;
	}
	.cart-footer>p{
		display:inline-block;
	}
	.cart-footer>button{
		display:inline-block;
		position:absolute;
	    right:0;
	    width:2.5rem;
	    height:1.33rem;
	    font-size:.5rem;
	    background-color:#a24199;
	    color:#fff;
	}
</style>