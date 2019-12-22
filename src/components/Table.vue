<template>
  <table class="table">
    <thead class="table__head">
      <tr class="table__row table__row--head">
				<th></th>
        <th class="table__data table__data--head" @click="sort('name')">Name</th>
        <th class="table__data table__data--head" @click="sort('age')">Age</th>
        <th class="table__data table__data--head" @click="sort('gender')">Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table__row" v-for="user in users" :key="user.id">
				<td class="table__data table__data--img"><img class="table__img" :src="user.img" :alt="user.name"></td>
        <td class="table__data">{{user.name}}</td>
        <td class="table__data">{{user.age}}</td>
        <td class="table__data">{{user.gender}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
	name: "Table",
  props: {
    users: {
      type: Array,
      default() {
        return [
          {
            name: "Notes not found",
          }
        ];
      }
    }
	},
	methods: {
		sort (e){
			this.$emit('sort', e)
		}
	}
};
</script>