<template>
  <div id="app">
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link class="navigation__link" to="/crm">CRM</router-link>
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" to="/">Home</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

