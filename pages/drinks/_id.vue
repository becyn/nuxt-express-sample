<template>
  <section class="container">
    <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" />
    <p>ID: {{ drink.id }}</p>
    <el-form ref="form" :model="drink" label-width="120px" :label-position="position">
      <el-form-item
        prop="name"
        label="name"
        :rules="{
          required: true, message: 'name can not be null', trigger: 'blur'
        }"
      >
        <el-input v-model="drink.name"></el-input>
      </el-form-item>
      <el-form-item
        prop="price"
        label="price"
        :rules="{
          required: true, message: 'price can not be null', trigger: 'blur'
        }"
      >
        <el-input v-model="drink.price"></el-input>
      </el-form-item>
      <el-form-item
        prop="description"
        label="description"
        :rules="{
          required: true, message: 'description can not be null', trigger: 'blur'
        }"
      >
        <el-input v-model="drink.description"></el-input>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="drink.resource">
          <el-radio label="Sponsor"></el-radio>
          <el-radio label="Venue"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="publish">
        <el-switch v-model="drink.publish"></el-switch>
      </el-form-item>
      <el-form-item label="update">
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
    <nuxt-link class="button" to="/">
      Drink MENU
    </nuxt-link>
  </section>
</template>

<script lang="ts">
import { Vue } from 'nuxt-property-decorator'
import axios from '~/plugins/axios'
// import Component from 'nuxt-class-component'

// @Component({
//   head () {
//     return {
//       title: `Drink: ${this.drink.name}`
//     }
//   }
// })

export default class index extends Vue {
  asyncData ({ params, error }) {
    return axios.get('/api/drinks/' + params.id)
      .then((res) => {
        return { drink: { id: params.id, ...res.data } }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Drink not found' })
      })
  }
  data () {
    return {
      drink: {
        name: '',
        domains: [{
          key: 1,
          value: ''
        }],
        date1: '',
        date2: '',
        publish: false,
        type: [],
        resource: '',
        desc: ''
      },
      position: 'left'
    }
  }
  onSubmit () {
    console.log('submit!')
  }
  onCancel () {
    console.log('Cancel!')
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
