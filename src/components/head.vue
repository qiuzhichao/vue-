<template>
	<header @touchmove.prevent>
		<router-link to="/page/person/login">
			<img src="../../static/img/person_center.png"/>
		</router-link>
		<a>
			<img src="../../static/img/search.png"/>
		</a>
	</header>
	
</template>
<style scoped>
	header{
		position: relative;
	    height: 1.1733rem;
	    line-height: 1.1733rem;
	    text-align: center;
	    color: #4d4d4d;
	    border-bottom: 1px solid #ebebeb;
	    background-color: #fafafa;
	}
	a{
		display: inline-block;
	    width: 1.1733rem;
	    height: 1.1733rem;
	    color: #4d4d4d;
	}
	a:nth-child(1){
		position:absolute;
		left:0;
	}
	a:nth-child(2){
		position:absolute;
		right:0;
	}
	img{
		display:block;
		width:0.5rem;
		height:0.5rem;
		margin:.35rem .35rem .35rem .35rem;
	}
</style>
<script>
</script>