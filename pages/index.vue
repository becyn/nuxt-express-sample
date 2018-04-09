<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Drink MENU
    </h1>
    <ul class="drinkList">
      <li v-for="(drink, index) in drinks" :key="index" class="drinkItem">
        <nuxt-link :to="{name:'drinks-id', params: { id: index }}">
          {{ drink.name }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData () {
    let { data } = await axios.get('/api/drinks')
    return { drinks: data }
  },
  head () {
    return {
      title: 'Drink MENU'
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.drinkList
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.drinkItem
{
  margin: 10px 0;
}
</style>
