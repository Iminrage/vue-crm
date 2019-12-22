<template>
	<div class="pagination">
		<button class="pagination__arrow">&lt;</button>
		<div class="pagination__dots">
			<button class="pagination__dot" v-for="page in pages" :key="page">o</button>
		</div>
		<button class="pagination__arrow">&gt;</button>
	</div>
</template>
<script>
export default {
	name: "Pagination",
	props: {
		pages: {
			type: Number
		}
	}
}
</script>