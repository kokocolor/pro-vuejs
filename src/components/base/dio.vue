<template>
	<div>
		
	<transition name="drop">
		 <div class="dio" v-if="isShow" @click="closeMySelf">
	      	
		  		<div class="dio-con" v-if="isShow">

		      		<slot>empty</slot>
		      	</div>
	  		
	     </div>
     </transition>
	</div>
</template>
<script>
	
	export default{
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{

			}
		},
		methods:{
			closeMySelf(){
				this.$emit('on-close')
			}
		}
	}
</script>
<style>
.drop-enter-active {
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
}
.drop-leave-active {
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}
.drop-enter {
  transform: translateY(-1000px);
  -webkit-transform: translateY(-10);
}
.drop-leave-active {
  transform: translateY(-1000px);
  -webkit-transform: translateY(-1000px);
}

</style>