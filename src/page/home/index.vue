<template>
	<div class="box">
		<vhead></vhead>
		 <!-- swiper nav模块 -->
		<div class="swiper-container swiper-nav">
			<swiper :options="swiperOption">
				<swiper-slide v-for="item in nav" id="slide_swiper" :key="item.id">{{item}}</swiper-slide>
			    <div class="swiper-button-prev" slot="button-prev"></div>
			    <div class="swiper-button-next" slot="button-next"></div>
			</swiper>
		</div>
		<vScroll :on-refresh="onRefresh" :on-infinite="onInfinite">
		 <!-- swiper banner模块 -->
		 <div class="swiper-container swiper-banner">
		 	<swiper :options="swiperWrapper">
		 		<swiper-slide v-for="slide in imgSlide" class="slide-img" :key="slide.id">
		 		<a href="" class="slide-a"><img :src="slide.img"/></a></swiper-slide>
		 	</swiper>
		 </div>
		 <!-- 模块 -->
		 <div class="mid-img">
		 	<a class="hand-left" href="" v-for="Y in imgY" :key="Y.id"><img :src="Y.imgs"/></a>
		 	<a class="hand-down" href="" v-for="mid in imgMid" :key="mid.id"><img :src="mid.img"/></a>
		 </div>
		 <!-- Barnd -->
		 <div class="brand">
		 	<h3 class="brand-title">名牌值购</h3>
		 	<a class="barnd-img" href="" v-for="brand in imgBrand" :key="brand.id"><img :src="brand.img"/></a>
		 </div>
		 <!-- 轻奢精品 -->
		 <div class="Boutique">
		 	<h3 class="Boutique-title">轻奢精品</h3>
		 	<div class="Boutique-box" v-for="B in Boutique" :key="B.id">
		 		<router-link class="Boutique-img" :to="{name:'goods',query:{id:B.id}}"><img v-lazy="B.img"/></router-link>
		 		<div class="Boutique-info">
		 			<h4>{{B.name}}</h4>
		 			<p>{{B.introduce}}</p>
		 			<span>
		 				<em>{{B.price}}</em>
		 				{{B.discountPrice}}
		 			</span>
		 		</div>
		 	</div>
		 </div>
		 </vScroll>
		 <vfooter></vfooter>
	</div>
</template>
<style scoped>
	body,html,h3,ul{
		margin:0;
		padding:0;
	}
	img{
		display:block;
		width:100%;
	}
	.swiper-container{
		background-color: #fafafa;
	}
	#slide_swiper{
		width:1.68rem !important;
		margin:0 !important;
		height:.8rem;
		text-align:center;
		line-height:.8rem;
	}
	.swiper-slide{
		display:inline-block;
	}
	.swiper-nav{
		
	}
	.swiper-button-prev{
		position:absolute !important;
		z-index: 99;
	    width: .8rem;
	    height: .8rem;
	    background-color: #fafafa;
	    background-size: 30%;
	    top: .3rem !important;
	    left: -.2rem!important;
	    background-image: url("../../../static/img/back.png");
	    background-repeat:no-repeat;
		background-size: cover;
		background-position: center;
	}
	.swiper-button-next{
		position:absolute !important;
		z-index: 99;
	    width: .8rem;
	    height: .8rem;
	    background-color: #fafafa;
	    top: .3rem !important;
	    right:0 !important;
	    background-image: url("../../../static/img/more.png");
	    background-repeat:no-repeat;
		background-size: cover;
		background-position: center;
	}
	.slide-a{
		display:block;
		width:100%;
	}
	
	.mid-img{
		padding-top: .1333rem;
		overflow:hidden;
		position:relative;
		padding-bottom: .1333rem;
	}
	.hand-left{
		float:left;
	}
	
	.hand-left:nth-child(1){
		width: 3.8666rem;
    	margin-right: .1333rem;
    	padding-bottom: .1333rem;
	}
	.hand-left:nth-child(2){
		width: 6rem;
    	height: 2.52rem;
    	padding-bottom: .1333rem;
	}
	
	.hand-down:nth-child(3){
		display:block;
		width:3.8666rem;
		height:5.2rem;
		position:absolute;
		top:2.65rem;
		padding-top:.1333rem;
	}
	.hand-down:nth-child(4){
		display:block;
		float:right;
		width: 6rem;
    	height: 2.52rem;
    	padding-bottom: .1333rem;
	}
	.hand-down:nth-child(5){
		display:block;
		float:right;
		width: 6rem;
    	height: 2.52rem;
	}
	.brand-title{
		position: relative;
	    display: block;
	    width: 100%;
	    height: 0.8rem;
	    line-height: 0.8rem;
	    font-weight: normal;
	    text-align: center;
	}
	.brand-title:before{
		position: absolute;
		left:0;
	    top: 50%;
	    content: "";
	    width: 37%;
	    height: 1px;
	    line-height: 1px;
	    background: #ebebeb;
	}
	.brand-title:after{
		position: absolute;
		right:0;
	    top: 50%;
	    content: "";
	    width: 37%;
	    height: 1px;
	    line-height: 1px;
	    background: #ebebeb;
	}
	.Boutique-title{
		position: relative;
	    display: block;
	    width: 100%;
	    height: 0.8rem;
	    line-height: 0.8rem;
	    font-weight: normal;
	    text-align: center;
	    border-bottom: 1px solid #ebebeb;
	}
	.Boutique-title:before{
		position: absolute;
		left:0;
	    top: 50%;
	    content: "";
	    width: 37%;
	    height: 1px;
	    line-height: 1px;
	    background: #ebebeb;
	}
	.Boutique{
		overflow:hidden;
		padding-bottom: 1.3333rem;
	}
	.Boutique-title:after{
		position: absolute;
		right:0;
	    top: 50%;
	    content: "";
	    width: 37%;
	    height: 1px;
	    line-height: 1px;
	    background: #ebebeb;
	}
	.Boutique-box{
		float:left;
		position:relative;
		width:50%;
		height:8.9rem;
		border-right:1px solid #ebebeb;
		border-bottom:1px solid #ebebeb;
		box-sizing:border-box;
	}
	em{
		font-style:normal;
		text-decoration:line-through;
		color:#a6a6a6
	}
</style>
<script>
	import vhead from '@/components/head.vue'
	import vfooter from '@/components/footer.vue'
	import vScroll from '@/components/pulleFresh.vue'
	import Vue from 'vue'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import VueLazyload from 'vue-lazyload'
	Vue.use(VueAwesomeSwiper)
	Vue.use(VueLazyload,{
		error:'../../../static/img/loading_goods_small.png',
		loading:'../../../static/img/loading_goods_small.png'
	})
	export default {
		components:{
		    vhead,
		    vfooter,
		    vScroll
		  },
		  data () {
		    return {
		    	counter:1,
		    	num:6,
		    	pageStart:0,
		    	pageEnd:0,
		    	imgSlide:[],
		    	imgY:[],
		    	imgMid:[],
		    	imgBrand:[],
		    	Boutique:[],
		      swiperOption: {
		        nextButton: '.swiper-button-next',
		        prevButton: '.swiper-button-prev',
		        slidesPerView: 5,
		        spaceBetween: 30,
		        freeMode:true,
		        slidesOffsetBefore: 50,
		        slidesOffsetAfter : -180
	        },
	         swiperWrapper:{
	         	pagination: '.swiper-pagination',
	         	paginationClickable: true,
		        spaceBetween: 0,
		        centeredSlides: true,
		        autoplay: 3000,
		        autoplayDisableOnInteraction: false,
		        loop:true
	         },
		    nav:["首页","腕表","珠宝",'配饰',"箱包","母婴","美妆","保健","食品"]
		}
	},
	mounted(){
		this.fetchData();
	},
	methods:{
		fetchData(){
			var _this=this;
			this.$http.get('../../../static/data/index.data').then(function(res){
				_this.imgSlide=res.data[0].imgSlider;
				_this.imgY=res.data[0].imgY;
				_this.imgMid=res.data[0].imgMid;
				_this.imgBrand=res.data[0].imgBrand;
				_this.Boutique=res.data[0].Boutique.slice(0,6);
			}).catch(function(err){
				console.log(err)
			})
		},
		onRefresh(done){
			var _this=this;
			this.$http.get('../../../static/data/index.data').then(function(res){
				_this.imgSlide=res.data[0].imgSlider;
				_this.imgY=res.data[0].imgY;
				_this.imgMid=res.data[0].imgMid;
				_this.imgBrand=res.data[0].imgBrand;
			}).catch(function(err){
				console.log(err)
			})
			done()
		},
		onInfinite(done){
			var _this=this;
			this.$http.get('../../../static/data/index.data').then(function(res){
				_this.counter++;
				console.log(_this.counter)
				_this.pageEnd=_this.num*_this.counter;
				_this.pageStart=_this.pageEnd - _this.num;
				let arr=res.data[0].Boutique;
				let i=_this.pageStart;
				let end=_this.pageEnd;
				for(; i<arr.length;i++){
					let obj={};
					obj=arr[i];
					_this.Boutique.push(obj);
					if((i+1)>=_this.Boutique.length){
						this.$el.querySelector('.load-more').style.display = 'none';
					}
				}
			}).catch(function(err){
				console.log(err)
			})
			done()
		}
	}
	
}
</script>