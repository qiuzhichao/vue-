<template>
	<div class="goods-box">
		<ul>
			<li style="margin-left:10px;">
				<a onclick="window.history.go(-1)" style="font-size:54px;">&lt</a>
			</li>
			<li>
				<a class="goods">商品</a>
				<a class="details">详情</a>
				<a class="appraise">评价</a>
			</li>
			<li>
				<router-link to="/" style="font-size:30px;">首页</router-link>
			</li>
		</ul>
		<div class="img">
			<img :src="goodsLis.img"/>
		</div>
		<h3>{{goodsLis.title}}</h3>
		<p class="tag">
			<span v-for="tag in goodsLis.antistop" class="goods-tag">{{tag}}</span>
		</p>
		<p class="price">￥{{goodsLis.price}}</p>
		<p class="pledge">
			<span>正品保证</span>
			<span>满78包邮</span>
			<span>7天退换</span>
			<span>假一赔十</span>
		</p>
		<div class="footer">
			<div class="footer-left">
				<a>客服</a>
				<a>收藏</a>
				<router-link to="/page/cart/cart">购物车</router-link>
				<i>{{num}}</i>
			</div>
			<div class="footer-right">
				<a style="background:#a6419b" v-on:click="addCart">加入购物车</a>
				<a>立即购买</a>
			</div>
		</div>
	</div>
</template>

<script>
import {getCookie,setCookie} from '../../../static/js/cookie.js'

	export default{
		data(){
			return{
				goodsLis:{},
				num:0,
				nan:0,
				cart:[{
						id:"",
						sum:0,
						img:"",
						title:"",
						price:"",
						checked:true
					}
				]
			}
		},
		mounted(){
			this.goodsData()
		},
		methods:{
			goodsData(){
				var that=this;
				var goodsId=this.$route.query.id;
				this.$http.get('../../../static/data/goods.data').then(function(res){
					for(var i in res.data.goodsList){
						if(res.data.goodsList[i].id==goodsId){
							that.goodsLis=res.data.goodsList[i];
						}
					}
				}).catch(function(err){
					console.log(err)
				})
				var ifo=JSON.parse(getCookie("cartIfo"));
				var Sum=[];
				for(var k in ifo){
					Sum.push(ifo[k].sum)
				}
				for(var a in Sum){
					this.nan+=parseInt(Sum[a]);
				}
				return this.num=this.nan;
			},
			addCart(){
				this.num+=1;
				this.cart[0].sum+=1;
				this.cart[0].id=this.goodsLis.id;
				this.cart[0].img=this.goodsLis.img;
				this.cart[0].title=this.goodsLis.title;
				this.cart[0].price=this.goodsLis.price;
				var ifo=JSON.parse(getCookie("cartIfo"));
				if(ifo==null){
					ifo=this.cart;
				}else{
					for(var i in ifo){
						if(ifo[i].id==this.goodsLis.id){
							ifo[i].sum+=1;
							setCookie("cartIfo",ifo,30);
							return;
						}
					}
					ifo.push(this.cart[0]);
				}
				setCookie("cartIfo",ifo,30);
			}
		}
	}
</script>
<style scoped>
	ul,h3,p{
		margin:0;
		padding:0;
	}
	ul{
		position:relative;
		list-style:none;
		overflow:hidden;
		height:1.3rem;
		border-bottom:1px solid #5a5a5a;
	}
	li{
		float:left;
		height:1.586rem;
		line-height:1.3rem;
	}
	li:nth-child(2){
		position:absolute;
		left:34%;
	}
	li:nth-child(3){
		position:absolute;
		right:10px;
	}
	a{
		text-decoration:none;
		width:100%;
	}
	.goods,.details,.appraise{
		font-size:.4rem;
		margin-right:.4rem;
	}
	.tag{
		margin-top:.15rem;
	}
	.goods-tag{
		display: inline-block;
	    padding: 0 .1066rem;
	    height: .4533rem;
	    line-height: .4533rem;
	    min-width: 1.3866rem;
	    text-align: center;
	    border: 1px solid #a24199;
	    margin-right: .2666rem;
	    border-radius: .48rem;
	}
	.price{
		margin-top:.266rem;
		text-align:left;
		text-indent:2em;
		font-size:.53rem;
		color:#a24199;
	}
	.pledge{
		margin-top:.266rem;
	}
	.pledge>span{
		display:inline-block;
		width:20%;
		background-color:#a24199;
		color:#fff;
	}
	.footer{
		width:100%;
		position:fixed;
		bottom:0;
		ovflower:hidden;
		z-index:99;
		height:1.3066rem;
		line-height:1.3066rem;
		box-shadow:0 10px 3px #000
	}
	.footer-left{
		float:left;
		width:50%;
		position:relative;
	}
	.footer-left>a{
		width:30%;
		display:inline-block;
	}
	.footer-right{
		width:50%;
		float:left;
		display:flex;
	}
	.footer-right>a{
		color:#fff;
		display:block;
		flex:1;
		background:#81007f;
	}
	i{  
		font-style:normal;
		position:absolute;
		top:0.1rem;
		right:.7rem;
		display:block;
		width:.5rem;
		height:.3rem;
		line-height:.3rem;
		border-radius:.3rem;
		color:#fff;
		background-color:red;
	}
</style>