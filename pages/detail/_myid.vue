<template>
  <div>
    <h1>detail</h1>
    {{ $route.params.myid }} <br />
    <!-- {{ host1 }} -->
    <div>
      {{ datas }} <br />
      {{ datalist }} <br />
      <img :src="datalist.message" alt="" />
    </div>
    <div>
      <a-button type="primary">
        Primary
      </a-button>
      <a-button type="primary" disabled>
        Primary(disabled)
      </a-button>
      <br />
      <a-button>Default</a-button>
      <a-button disabled>
        Default(disabled)
      </a-button>
      <br />
      <a-button type="dashed">
        Dashed
      </a-button>
      <a-button type="dashed" disabled>
        Dashed(disabled)
      </a-button>
      <br />
      <a-button type="link">
        Link
      </a-button>
      <a-button type="link" disabled>
        Link(disabled)
      </a-button>
      <div
        :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }"
      >
        <a-button ghost>
          Ghost
        </a-button>
        <a-button ghost disabled>
          Ghost(disabled)
        </a-button>
      </div>
    </div>
    <div>
      <a-button type="primary" block>
        Primary
      </a-button>
      <a-button block>
        Default
      </a-button>
      <a-button type="dashed" block>
        Dashed
      </a-button>
      <a-button type="danger" block>
        Danger
      </a-button>
      <a-button type="link" block>
        Link
      </a-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  layout: "empty",
  data() {
    return {
      datas: [111, 222, 333]
    };
  },
  mounted() {
    this.datas = [333, 444, 55]; //소스보기는 111,222,333으로 되어있음
    console.log("client mounted", new Date().getUTCMilliseconds());
  },

  //以一下3个非常重要
  //在服务器端调用 asyncData时， 可以访问用户请求的req和res
  //在当页面刷新， 服务端执行函数
  //从其他页面跳转过来，客户端执行函数 *********
  asyncData({
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error
  }) {
    if (process.server) {
      console.log("query", query);
      console.log("params", params);
      console.log("server request", new Date().getUTCMilliseconds());
      return axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
        return { datalist: res.data };
      });
      //return { host1: req.headers.host };
    } else if (process.client) {
      //从连接跳转过来
      console.log("client request", new Date().getUTCMilliseconds());
      //return axios.get("/ajax/api/breeds/image/random").then(res => { //client 反响代理 跨越设置
      return axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
        return { datalist: res.data };
      });
    }
  }
};
</script>
