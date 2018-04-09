<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      {{ drink.name }}
    </h1>
    <p class="price">{{ drink.price }} yen</p>
    <p class="info">{{ drink.description }}</p>
    <nuxt-link class="button" to="/">
      Drink MENU
    </nuxt-link>
  </section>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    return axios.get('/api/drinks/' + params.id)
      .then((res) => {
        return { drink: res.data }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Drink not found' })
      })
  },
  head () {
    return {
      title: `Drink: ${this.drink.name}`
    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.price {
  font-style: italic;
}
.button
{
  margin-top: 30px;
}
</style>
