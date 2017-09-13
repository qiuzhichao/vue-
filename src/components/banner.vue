<template>
	<div>
		<!-- swiper模块 -->
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide>首页</swiper-slide>
			<swiper-slide>腕表</swiper-slide>
			<swiper-slide>珠宝</swiper-slide>
			<swiper-slide>配饰</swiper-slide>
			<swiper-slide>箱包</swiper-slide>
			<swiper-slide>母婴</swiper-slide>
			<swiper-slide>美妆</swiper-slide>
			<swiper-slide>保健</swiper-slide>
			<swiper-slide>食品</swiper-slide>
			<!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		    <div class="swiper-button-prev" slot="button-prev"></div>
		    <div class="swiper-button-next" slot="button-next"></div>
		    <div class="swiper-scrollbar"   slot="scrollbar"></div>
		</swiper>
	</div>
</template>
<script>
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
export default {
data(){
	return {
		swiperOption: {
		  // 所有配置均为可选（同Swiper配置） 
		  notNextTick: true,
		  autoplay: 3000,
		  grabCursor : true,
		  setWrapperSize :true,
		  autoHeight: true,
		  pagination : '.swiper-pagination',
		  paginationClickable :true,
		  prevButton:'.swiper-button-prev',
		  nextButton:'.swiper-button-next',
		  scrollbar:'.swiper-scrollbar',
		  mousewheelControl : true,
		  observeParents:true
		}
	}
}

}
</script>