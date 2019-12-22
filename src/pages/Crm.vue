<template>
  <div>
    <div class="container">
      <Table :users="usersSort" @sort="sort" />
      <Pagination v-if="users.length" :pages="pages" switchPage="switchPage" />
      <Loading v-if="!users.length" />
    </div>
  </div>
</template>
<script>
import Table from "@/components/Table.vue";
import Pagination from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";
import axios from "axios";
export default {
  name: "Crm",
  components: {
    Table,
    Pagination,
    Loading
  },
  data() {
    return {
      users: [],
      sortDirection: "asc",
      sortParam: "age",
      pages: {
        min: 1,
        max: 1,
        onPageMax: 3,
        currentPage: 1
      }
    };
  },
  computed: {
    usersSort() {
      return this.users
        .sort((a, b) => {
          let mod = this.sortDirection === "asc" ? 1 : -1;
          if (a[this.sortParam] < b[this.sortParam]) return -1 * mod;
          if (a[this.sortParam] > b[this.sortParam]) return 1 * mod;
        })
        .filter((user, index) => {
          if (
            index <= this.pages.onPageMax * this.pages.currentPage &&
            index >
              this.pages.onPageMax * this.pages.currentPage -
                this.pages.onPageMax
          ) {
            return true;
          }
        });
    }
  },
  methods: {
    switchPage(e) {
      this.pages.currentPage = e;
    },
    sort(e) {
      if (e === this.sortParam) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortParam = e;
        this.sortDirection = "asc";
      }
    }
  },
  created() {
    axios
      .get("https://api.myjson.com/bins/rzgya")
      .then(response => {
        setTimeout(() => {
          this.users = response.data;
          this.pages.max = Math.ceil(
            response.data.length / this.pages.onPageMax
          );
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>