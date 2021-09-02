<template>
  <div>
    <div class="top">
      <div class="left" @click="back">
        <i class="iconfont icon-youjiantou-copy"></i><span>返回</span>
      </div>
      <div class="center">体检套餐</div>
      <div class="right">
        <i
          @click="islist1"
          :class="
            islist ? 'iconfont icon-liebiao1' : 'iconfont icon-default-card-btn'
          "
        ></i>
      </div>
    </div>
    <div :class="islist ? 'datalist' : 'data'">
      <ul>
        <li v-for="(item,index) in hotcomposedata" :key="index" @click="packageshow(item.compose_id)">
          <div class="img">
            <img src="../assets/img/package-img.png" alt="" />
          </div>
          <div class="txt">
            <div class="txt1">{{ item.compose_name }}</div>
            <div class="txt2">{{ item.desc }}</div>
            <div class="txt3">
              ￥{{ item.price }} <s>￥{{ item.oldprice }}</s>
            </div>
            <div v-show="islist != 1" class="btn">立即购买</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="loader" v-show="isshow"></div>
    <div class="isdata" v-show="istxt">没有更多数据了</div>
  </div>
</template>
<script>
import { hotcomposelist } from "@/api/hotcompose.api";
export default {
  data() {
    return {
      hotcomposedata: [],
      islist: true,
      isshow: false,
      istxt: false,
      page: 1,
      pageSize: 10,
    };
  },
  methods: {
    // 跳转套餐详情
    packageshow(id){
      console.log(id)
      this.$router.push({path:'/packageshow',query:{id:id}})
    },
    //   返回
    back() {
      this.$router.push("/index");
    },
    // 请求数据
    async hotcomposelist() {
      this.isshow = true
      let res = await hotcomposelist({
        page: this.page,
        pageSize: this.pageSize,
      });
      if (res.data.data.length == 0) {
        this.isshow = false;
        this.istxt = true;
      } else {
        this.isshow = false;
        this.hotcomposedata = this.hotcomposedata.concat(res.data.data);
      }
    },
    islist1() {
      this.islist = !this.islist;
      console.log(111)
    },
  },
  created() { 
    this.hotcomposelist();
  },
  mounted() {
    let _this = this;
    window.onscroll = () => {
      if (
        window.screen.height + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight ||
        window.screen.height + document.body.scrollTop + 1 >=
          document.body.scrollHeight
      ) {
        if (!_this.istxt) {
          this.page++;
          this.isshow = true;
          _this.hotcomposelist();
        }
      }
    };
  },
  computed: {},
};
</script>
<style lang="less" scoped>
@import "../font/iconfont.css";
.top {
  width: 100%;
  height: 1.1rem;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f1f5f8;
  .left {
    // flex: 1;
    line-height: 1.1rem;
    color: #38ad67;
    font-size: 0.3rem;
    position: relative;
    display: flex;
    align-items: center;
    i {
      margin-left: 0.2rem;
      color: #38ad67;
      font-size: 0.3rem;
    }
    span {
      margin-left: 0.05rem;
    }
  }
  .center {
    flex: 4;
    font-size: 0.37rem;
    line-height: 1.1rem;
    text-align: center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .iconfont {
      margin-right: 0.15rem;
      color: #38ad67;
      font-size: 0.44rem;
    }
  }
}
.datalist {
  width: 100%;
  margin-top: 1.1rem;
  ul {
    width: 6.88rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    li {
      width: 3.25rem;
      height: 4.05rem;
      background-color: white;
      margin: 0.2rem 0;
      .img {
        width: 2.5rem;
        height: 2.5rem;
        margin: 0.2rem auto;
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      .txt {
        display: flex;
        flex-direction: column;
        margin-left: 0.35rem;
        .txt1 {
          font-size: 0.19rem;
        }
        .txt2 {
          width: 2.77rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: 0.05rem;
          color: #9e9e9e;
        }
        .txt3 {
          s {
            margin-left: 0.35rem;
            color: #9e9e9e;
          }
        }
      }
    }
  }
  .isdata {
    width: 100%;
    height: 1.55rem;
    line-height: 1.55rem;
    text-align: center;
  }
}
.data {
  margin-top: 1.25rem
}
@import url("../css/data.less");
.isdata {
  width: 100%;
  height: 1.55rem;
  line-height: 1.55rem;
  text-align: center;
}
.loader {
  border: 0.16rem solid #f3f3f3;
  border-color: #a5e9c0 #79dba0 #44c477 #359b5d;
  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.5rem auto;
  animation: load 2s linear infinite;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
