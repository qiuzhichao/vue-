<template>
	<div class="footermenu" @touchmove.prevent>
		<ul>
			<li>
				<router-link to="/">
					<span><img src="../../static/img/index.png"/></span>
					<span>首页</span>
				</router-link>
			</li>
			<li>
				<a href="">
					<span><img src="../../static/img/search2.png"/></span>
					<span>搜索</span>
				</a>
			</li>
			<li>
				<router-link to="/page/cart/cart">
					<span><img src="../../static/img/car.png"/></span>
					<span>购物车</span>
				</router-link>
			</li>
			<li>
				<router-link to="/page/person/login">
					<span class="icon"><img src="../../static/img/person.png"/></span>
					<span>会员中心</span>
				</router-link>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.footermenu{
		background:#fff;
		position:fixed;
		bottom:0;
		left:0;
		height:1.333rem;
		width:100%;
		z-index:1000;
	}
	ul{
		overflow:hidden;
		list-style:none;
		margin:0;
		padding:0;
	}
	a{
		display: block;
	    width: 100%;
	    height: 1.3333rem;
	    padding-top: 0.16rem;
	    color: #4c4c4c;
	}
	img{
		display:block;
		width:0.5789rem;
		height:0.5789rem;
		margin:0 auto;
	}
	li{
		float:left;
		width:25%;
		height:1.333rem;
	}
	a{
		text-decoration:none;
	}
</style>