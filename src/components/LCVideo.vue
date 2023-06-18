<template>
  <div >
    <video-player v-if="videoName!==undefined" class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playOptions">
    </video-player>
    <div class="box">
      <ul>
        <li v-for="vName in vList" v-bind:key="vName.id" >
          <router-link :to="{name:'LCVideo', query:{id: vName.name}}" :key="vName.id" @click.native="flushCom"> {{vName.name}} </router-link>
        </li>
      </ul>
    </div>
  <span><br> Line {{host}}................</span>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "LCVideo",
  data: function () {
    return {
      host: location.host.split(":")[0],
      vList: [],
      pId: null,
      videoName: this.$route.query.id,
      playOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,       // 消音
        loop: true,
        preload: "auto",
        language: "zh-CN",
        aspectRatio: "16:9",
        fluid: true,        // 适配
        sources: [{
          type: "video/mp4",
          src: "http://" + location.host.split(":")[0] + ":7001/v1/video" + "?id=" + this.$route.query.id
        }],
        poster: "", //封面地址
        notSupportedMessage: "not player...",
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true
        }
      }
    }
  },
  methods: {
    flushCom() {
      this.$router.go(0)
    }
  },
  mounted() {
    axios.get("http://" + this.host + ":7001/v1/video_list").then(response=>(this.vList=response.data))
  }
}
</script>

<style scoped>
  .input_video{
    width: 800px;
    height: 400px;
    margin: 0 auto;
  }
  .box{
    width: 800px;
  }
  .box ul{
    text-align: left;
    display: inline-block;
  }
  .box ul li{
    margin: 0;
  }
</style>