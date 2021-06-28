<template>
  <div>
	  aaa
  <li v-for="item in datas" :key="item" @click="handleClick(item)">{{item}}</li>
  </div>
</template>

<script>
export default {
 layout:"nohead",
 data() {
	 return {
		 datas:[111,222,333]
	 }
 },
 methods:{
	 handleClick(id){
		 console.log(id)
		 this.$router.push(`/detail/${id}`)
	 }
 }
};
</script>


</script>
<style scoped lang='css'>
</style>