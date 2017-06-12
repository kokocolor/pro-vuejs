<template>
	 <div class="dio-conn">
        <p>
          <span>用户名:</span>
        <input type="text" name="name" id="">
        <span class="warn">不合格</span>
        </p>

        <p>
          <span>密&nbsp;&nbsp;&nbsp;码:</span>
        <input type="text" name="name" id="">
         <span class="warn">密码不合格</span> 
        </p>
        <input type="submit" value="登录" class="sub"> 
        <p class="p-warn">格式不正确</p>
        <span class="close">x</span>
       </div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style>
	
</style>