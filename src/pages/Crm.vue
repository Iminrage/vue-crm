<template>
  <div>
    <div class="container">
      <Table :users="usersSort" @sort="sort"/>
      <Pagination :pages="pages" />
    </div>
  </div>
</template>
<script>
import Table from "@/components/Table.vue";
import Pagination from "@/components/Pagination.vue";
import axios from "axios";
export default {
  name: "Crm",
  components: {
    Table,
    Pagination
  },
  data() {
    return {
      users: [],
			sortDirection: 'asc',
			sortParam: 'age',
      pages: null
    };
  },
	computed: {
		usersSort(){
			return this.users.sort((a, b)=>{
				let mod = this.sortDirection === 'asc' ? 1 : -1;
				if (a[this.sortParam] < b[this.sortParam]) return -1 * mod;
				if (a[this.sortParam] > b[this.sortParam]) return 1 * mod;			
			})
		}
	},
  methods: {
		sort (e){
			if (e === this.sortParam){
				this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
			} else {
				this.sortParam = e;
				this.sortDirection = 'asc';
			}
		}
	},
  created() {
    axios
      .get("https://api.myjson.com/bins/rzgya")
      .then(response => {
        this.users = response.data;
        this.pages = Math.ceil(response.data.length / 6);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>