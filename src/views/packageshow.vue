<template>
  <div>
    <div class="title">
      <div class="back" @click="back">
        <i class="iconfont icon-youjiantou-copy"></i>返回
      </div>
      <div class="title-txt">套餐详情</div>
    </div>
    <div class="data1">
      <div class="img">
        <img src="../assets/img/agency-2.png" alt="" />
      </div>
      <div class="txt">
        <div class="txt1">{{ backageshowlist.compose_name }}</div>
        <div class="txt2">{{ backageshowlist.address }}</div>
        <div class="txt3">
          <div class="txt3-left">
            ￥{{ backageshowlist.price }} ￥{{ backageshowlist.oldprice }}
          </div>
          <div class="txt3-right">销量 23</div>
        </div>
      </div>
    </div>
    <div class="swiper">
      <div class="swiper-item">
        <div @click="swipera(1)" :class="swinum == 1 ? 'on' : 'txt'">
          图文详情
        </div>
        <div @click="swipera(2)" :class="swinum == 1 ? 'txt' : 'on'">
          体检项目
        </div>
      </div>
      <div class="swiper-data">
        <div class="swiper-data-1" v-show="swinum == 1">
          <div class="data-txt">
            <div class="txt1">套餐介绍</div>
            <div class="txt2">{{ backageshowlist.desc }}</div>
          </div>
          <div class="img">
            <img src="../assets/img/agency-2.png" alt="" />
          </div>
          <div class="data-txt2">
            <div class="txt2-title">使用规则</div>
            <ul>
              <li>1、请至少提前一天预定；</li>
              <li>
                2、线上预约完后，体检日拿省份证到医院前台登记即可开始体检；
              </li>
              <li>3、医院提供营养早餐一份；</li>
              <li>4、体检者可获免费停车票；</li>
            </ul>
          </div>
        </div>
        <div clsss="swiper-data-2" v-show="swinum == 2">体检项目</div>
      </div>
    </div>
    <div class="suit">
      <div class="suit-title">适用机构</div>
      <div class="suit-data">
        <ul>
          <li v-for="(item, index) in packageshowchainlist" :key="index">
            <div class="img">
              <img src="../assets/img/agency-2.png" alt="" />
              <div class="ico">
                <img src="../assets/img/agecny-ico.png" alt="" />
              </div>
            </div>
            <div class="suit-txt">
              <div class="suit-txt1">111</div>
              <div class="suit-txt2">
                <div class="txt2-1">120<span>人预约</span></div>
                <div class="txt2-2">约4.0km</div>
              </div>
            </div>
          </li>
        </ul>
        <div class="loader" v-show="isshow"></div>
        <div class="isdata" v-show="istxt">没有更多数据了</div>
      </div>
    </div>
    <div class="tab">
      <div class="price">￥998</div>
      <div class="btn">预约购买</div>
    </div>
  </div>
</template>
<script>
import { packageshow, packageshowchain } from "@/api/hotcompose.api";
export default {
  data() {
    return {
      swinum: 1,
      id: 0,
      backageshowlist: {},
      packageshowchainlist: [],
      isshow: false,
      istxt: false,
      page: 1,
      pageSize: 10,
    };
  },
  methods: {
    //   swiper切换
    swipera(e) {
      this.swinum = e;
    },
    //   返回
    back() {
      this.$router.go(-1);
    },
    //   获取数据
    async backageshowdata() {
      let res = await packageshow({ id: this.id });
      this.backageshowlist = res.data.data;
    },
    // 适用机构数据
    async packageshowchaindata() {
      this.isshow = true
      let res = await packageshowchain({ composeid: this.id });
    //   if (res.data.data.length == 0) {
    //     this.isshow = false;
    //     this.istxt = true;
    //   } else {
        // console.log(res)
        this.isshow = false;
        this.packageshowchainlist = this.packageshowchainlist.concat(
          res.data.data
        );
    //   }
    },
  },
  created() {
    this.id = this.$router.currentRoute.query.id;
    this.backageshowdata();
    this.packageshowchaindata();
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
          _this.page++;
          _this.isshow = true;
          _this.packageshowchaindata();
        }
      }
    };
  },
  computed: {},
};
</script>
<style lang="less" scoped>
@import url("../font/iconfont.css");
@import url("../css/title.less");
.data1 {
  width: 6.95rem;
  height: 5.82rem;
  background-color: #fff;
  margin: 1.55rem auto 0 auto;
  overflow: hidden;
  .img {
    width: 6.65rem;
    height: 3.75rem;
    margin: 0.15rem auto 0 auto;
    img {
      width: 6.65rem;
      height: 3.75rem;
    }
  }
  .txt {
    width: 100%;
    height: 1.9rem;
    display: flex;
    flex-direction: column;
    .txt1 {
      flex: 1;
      font-size: 0.29rem;
      display: flex;
      align-items: center;
      margin-left: 0.3rem;
    }
    .txt2 {
      flex: 1;
      margin-left: 0.3rem;
      display: flex;
      align-items: center;
    }
    .txt3 {
      flex: 1;
      display: flex;
      justify-content: space-between;
      margin-left: 0.3rem;
      align-items: center;
      .txt3-right {
        margin-right: 0.2rem;
      }
    }
  }
}
.swiper {
  width: 6.95rem;
  margin: 0.35rem auto 0 auto;
  background-color: #fff;
  .swiper-item {
    width: 6.5rem;
    height: 1.05rem;
    position: relative;
    margin: 0 auto;
    display: flex;
    &::after {
      content: "";
      width: 100%;
      height: 0.01rem;
      transform: scaleY(0.5);
      background-color: #eceeef;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    .txt {
      width: 50%;
      height: 1.05rem;
      line-height: 1.05rem;
      text-align: center;
    }
    .on {
      width: 50%;
      height: 1.05rem;
      line-height: 1.05rem;
      text-align: center;
      position: relative;
      color: #38ad67;
      &::after {
        content: "";
        width: 100%;
        height: 0.01rem;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 2;
        transform: scaleY(0.5);
        background-color: #5cbd82;
      }
    }
  }
  .swiper-data {
    width: 100%;
    .data-txt {
      height: 1.5rem;
      display: flex;
      flex-direction: column;
      margin-left: 0.55rem;
      .txt1 {
        flex: 1;
        display: flex;
        align-items: flex-end;
        font-size: 0.27rem;
      }
      .txt2 {
        flex: 1;
        display: flex;
        align-items: center;
      }
    }
    .img {
      width: 5.65rem;
      height: 3.53rem;
      margin: 0 auto;
      img {
        width: 5.65rem;
        height: 3.53rem;
      }
    }
    .data-txt2 {
      width: 100%;
      display: flex;
      flex-direction: column;
      .txt2-title {
        font-size: 0.27rem;
        padding: 0.7rem 0 0.3rem 0;
        margin-left: 0.67rem;
      }
      ul {
        display: flex;
        flex-direction: column;
        margin-left: 0.67rem;
        padding-bottom: 0.9rem;
        li {
          width: 5.65rem;
        }
      }
    }
  }
}
.suit {
  width: 6.95rem;
  margin: 0.35rem auto 1.3rem auto;
  background-color: #fff;
  .suit-title {
    width: 100%;
    height: 1.3rem;
    line-height: 1.3rem;
    margin-left: 0.28rem;
    box-sizing: border-box;
    font-size: 0.31rem;
  }
  .suit-data {
    width: 6.4rem;
    margin: 0 auto;
    padding-bottom: 0.65rem;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 3.07rem;
        height: 4.1rem;
        background-color: #f4f6f6;
        .img {
          width: 2.88rem;
          margin: 0.07rem auto;
          position: relative;
          img {
            width: 2.88rem;
            height: 2.48rem;
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
          margin: 0 auto;
          .suit-txt1 {
            width: 100%;
            height: 0.6rem;
            font-size: 0.23rem;
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
    }
  }
}
.tab {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  border-top: 0.01rem solid #59b58d;
  display: flex;
  font-size: 0.36rem;
  .price {
    flex: 1;
    height: 1rem;
    background-color: #fff;
    color: #5cbd82;
    line-height: 1rem;
    text-align: center;
  }
  .btn {
    flex: 1;
    height: 1rem;
    background-color: #59b58d;
    color: #fff;
    line-height: 1rem;
    text-align: center;
  }
}
@import url("../css/loding.less");
</style>
