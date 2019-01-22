<template>
    <div>
      <button @click="callApi">call api</button>
      <div>{{res}}</div>
    </div>
</template>

<script>
export default {
  name: 'CallApi',
  data: function () {
    return {
      res: ''
    }
  },
  methods: {
    callApi: async function () {
      const response = await fetch('/api/hello')
      const body = await response.json()
      if (response.status !== 200) throw Error(body.message)

      this.res = body.express
    }
  }
}
</script>

<style scoped>

</style>
