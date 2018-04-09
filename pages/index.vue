<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Drink MENU
    </h1>
    <h2>
      new drink
    </h2>
    <el-table :data="drinks">
      <el-table-column header-align="left" align="left" prop="name" label="name"></el-table-column>
      <el-table-column header-align="left" align="left" prop="price" label="price" :formatter="formatter"></el-table-column>
      <el-table-column header-align="left" align="left" prop="description" label="price"></el-table-column>
      <el-table-column header-align="left" align="left" prop="action" width="180">
        <template slot-scope="scope">
          <nuxt-link :to="{name:'drinks-id', params: { id: scope.$index }}">
            <el-button>edit</el-button>
          </nuxt-link>
        </template>
      </el-table-column>
    </el-table>
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
  },
  data () {
    return {
      drinks: []
    }
  },
  methods: {
    formatter (row, column) {
      return `${row[column.property]}yen`
    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
</style>
