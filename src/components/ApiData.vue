<template>
  <div class="api">
    <h1>{{ msg }}</h1>
    <h1>site : {{site}}</h1>
    <h1>url : {{url}}</h1>
    <h3> {{details()}} </h3>
    <h1 v-for="data in ydata" :key="data">{{data}}</h1>
    <h3 v-for="item in xdata" :key="item">{{item}}</h3>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "ApiData",
  data: function () {
    return {
      msg: 'hello xy bandy',
      site: "bgops",
      url: "https://xxbandy.github.io",
      xdata: null,
      ydata: null
    }
  },
  methods: {
    details : function () {
      return this.site
    }
  },
  mounted() {
    axios.get('http://localhost:7001/v1/line').then(response => (this.xdata = response.data.legend_data,
        this.ydata = response.data.xAxis_data))
  }
}
</script>

<style >
.api {
  font-weight: normal;
  text-align:center;
  font-size:8pt;
}
h3 {
  text-align:center;
  font-size:20pt;
  color:red;
}
</style>