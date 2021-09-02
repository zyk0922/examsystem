<template>
  <div>
    <div class="title">
      <div class="back" @click="back">
        <i class="iconfont icon-youjiantou-copy"></i>返回
      </div>
      <div class="title-txt">机构详情</div>
    </div>
    <div class="data-1">
      <div class="data-1-1">
        <div class="img">
          <img src="../assets/img/agency-2.png" alt="" />
          <div class="ico">
            <img src="../assets/img/agecny-ico.png" alt="" />
          </div>
        </div>
        <div class="suit-txt">
          <div class="suit-txt1">{{ chaindetailslist.chain_name }}</div>
          <div class="suit-txt2">
            <div class="txt2-1">120<span>人预约</span></div>
            <div class="txt2-2">约4.0km</div>
          </div>
        </div>
      </div>
      <div class="data-1-2">
        <div class="txt1">
          <i class="iconfont icon-shijian"></i>营业时间：周一至周六{{chaindetailslist.addtime | timeFormat}}
        </div>
        <div class="txt2">
          <i class="iconfont icon-dianhua"></i>{{ chaindetailslist.tel }}
        </div>
        <div class="txt3">
          <i class="iconfont icon-dingwei"></i>{{ chaindetailslist.address }}
        </div>
      </div>
    </div>
    <div class="data-2">
      <ul>
        <li v-for="(item, index) in chainshowlist" :key="index">
          <div class="img">
            <img src="../assets/img/package-img.png" alt="" />
          </div>
          <div class="txt">
            <div class="txt1">{{ item.chain_name }}</div>
            <div class="txt2">{{ item.address }}</div>
            <div class="txt3">￥338 <s>￥3338</s></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { chaindetails, chaindetailsshow } from "@/api/hothospital.api";
export default {
  data() {
    return {
      chainid: 1,
      chainshowlist: [],
      chaindetailslist: {},
    };
  },
  methods: {
    //   返回
    back() {
      this.$router.go(-1);
    },
    // 获取机构详情数据
    async chaindetails() {
      let res = await chaindetails({ id: this.chainid });
      this.chaindetailslist = res.data.data;
      console.log(res)
    },
    // 获取套餐数据
    async chainshowdata() {
      let res = await chaindetailsshow({
        chainid: this.chainid,
        page: 1,
        pageSize: 10,
      });
      this.chainshowlist = res.data.data;
    },
  },
  created() {
    this.chainid = this.$router.currentRoute.query.id;
    this.chainshowdata();
    this.chaindetails();
  },
  computed: {},
  filters:{
      timeFormat(value){
          let h = new Date(value).getHours();
          let m = new Date(value).getMinutes()
          return h+'：'+m
      }
  },
};
</script>

<style lang="less" scoped>
@import url("../font/iconfont.css");
@import url("../css/title.less");
.data-1 {
  width: 100%;
  height: 5.32rem;
  background-color: #fff;
  margin-top: 1.35rem;
  overflow: hidden;
  .data-1-1 {
    height: 1.9rem;
    display: flex;
    margin: 0.42rem 0 0 0.48rem;
    .img {
      position: relative;
      margin-right: 0.35rem;
      img {
        width: 2.47rem;
        height: 1.9rem;
      }
      .ico {
        width: 0.65rem;
        height: 0.65rem;
        border-radius: 0.65rem;
        position: absolute;
        background-color: #fff;
        top: 0.1rem;
        right: 0.1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 0.35rem;
          height: 0.35rem;
        }
      }
    }
    .suit-txt {
      width: 2.88rem;
      display: flex;
      flex-direction: column;
      .suit-txt1 {
        width: 100%;
        line-height: 0.6rem;
        font-size: 0.3rem;
        flex: 1;
      }
      .suit-txt2 {
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .txt2-1 {
          span {
            color: #899396;
            font-size: 0.23rem;
          }
        }
        .txt2-2 {
          color: #899396;
        }
      }
    }
  }
  .data-1-2 {
    width: 100%;
    height: 3rem;
    font-size: 0.28rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .txt1 {
      width: 6rem;
      display: flex;
      align-items: center;
      .icon-shijian {
        font-size: 0.47rem;
        color: #f4f7f7;
        margin: 0 0.24rem 0 0.35rem;
      }
    }
    .txt2 {
      width: 6rem;
      display: flex;
      align-items: center;
      .icon-dianhua {
        font-size: 0.44rem;
        color: #f4f7f7;
        margin: 0 0.24rem 0 0.35rem;
      }
    }
    .txt3 {
      width: 6rem;
      display: flex;
      align-items: center;
      .icon-dingwei {
        font-size: 0.45rem;
        color: #f4f7f7;
        margin: 0 0.24rem 0 0.35rem;
      }
    }
  }
}
.data-2 {
  width: 6.85rem;
  margin: 0 auto;
  ul {
    width: 6.85rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      width: 3.25rem;
      height: 4.05rem;
      background-color: #fff;
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
}
</style>
