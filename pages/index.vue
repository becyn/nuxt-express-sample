<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <h1 class="title">
      Drink MENU
    </h1>
    <h2>
      new rink
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

<script lang="ts">
import axios from '~/plugins/axios'
import { Vue } from 'nuxt-property-decorator'

export default class index extends Vue {
  created () {
    console.log('created')
  }
  data () {
    console.log('data')
    return {
      drinks: []
    }
  }
  async getDrinks () {
    console.log('getDrinks')
    const { data } = await axios.get('/api/drinks')
    console.log('data', data)

    return data
  }
  asyncData () {
    const drinks = this.getDrinks()
    return { drinks: drinks }
  }
  head () {
    return {
      title: 'Drink MENU'
    }
  }
  formatter (row, column) {
    return `${row[column.property]}yen`
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
</style>
