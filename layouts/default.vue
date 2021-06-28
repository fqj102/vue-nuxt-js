<template>
  <div>
    <ul>
      <nuxt-link to="/film" tag="li" activeClass="active">film</nuxt-link>
      <nuxt-link to="/cinema" tag="li" activeClass="active">cinema</nuxt-link>
      <nuxt-link to="/center" tag="li" activeClass="active">center</nuxt-link>
    </ul>
    <nuxt />
  </div>
</template>
<style scoped>
.active {
  color: red;
}
</style>
