<template>
	<div class="pagination">
		<button class="pagination__button pagination__arrow" @click="prevPage"></button>
		<div class="pagination__dots">
			<button class="pagination__button pagination__dot" v-for="page in pages.max" :key="page"></button>
		</div>
		<button class="pagination__button pagination__arrow" @click="nextPage"></button>
	</div>
</template>
<script>
export default {
	name: "Pagination",
	props: {
		pages: {
			type: Object
		}
	},
	methods: {
		nextPage(){
			if (this.pages.currentPage < this.pages.max){
				this.$emit('switchPage', this.pages.currentPage+=1)
				console.log("asdf");
				
			}
		},
		prevPage(){
			if (this.pages.currentPage > this.pages.min){
				this.$emit('switchPage', this.pages.currentPage-=1)
			}
		}
	}
}
</script>