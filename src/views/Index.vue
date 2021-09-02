<template>
  <div>
    <div class="top">
      <div class="title">体检预约</div>
      <div class="nav">
        <div class="nav-top">
          <div class="top-left">
            <div class="ico">
              <img src="../assets/img/nav-1.png" alt="" />
            </div>
            <div class="txt" @click="cat">
              <div class="txt-top">我的体检</div>
              <div class="txt-bottom">机构套餐 随心选择</div>
            </div>
          </div>
          <div class="top-right" @click="myorder(2)">
            <div class="ico">
              <img src="../assets/img/nav-2.png" alt="" />
            </div>
            <div class="txt">
              <div class="txt-top">我的预约</div>
              <div class="txt-bottom">按需加项 更改日期</div>
            </div>
          </div>
        </div>
        <div class="nav-bottom">
          <div class="bottom-left" @click="report">
            <div class="ico">
              <img src="../assets/img/nav-3.png" alt="" />
            </div>
            <div class="txt">
              <div class="txt-top">我的报告</div>
              <div class="txt-bottom">报告管理 趋势分析</div>
            </div>
          </div>
          <div class="bottom-right">
            <div class="ico">
              <img src="../assets/img/nav-4.png" alt="" />
            </div>
            <div class="txt">
              <div class="txt-top">报告解读</div>
              <div class="txt-bottom">在线医生 答疑解惑</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="agency">
      <div class="title2">
        <div class="left">推荐机构</div>
        <div class="right">
          <div class="right-ico" @click="chainlist">
            <i class="iconfont icon-list01"></i><span>更多</span>
          </div>
        </div>
      </div>
      <div class="img-txt">
        <ul>
          <li
            v-for="(item, index) in hothospitaldata"
            :key="index"
            @click="chainemails(item.chain_id)"
          >
            <div class="img">
              <img src="../assets/img/agency-2.png" alt="" />
              <div class="ico">
                <img src="../assets/img/agecny-ico.png" alt="" />
              </div>
            </div>
            <div class="txt">
              <div class="txt-top">
                {{ item.chain_name }}
              </div>
              <div class="txt-bottom">{{ item.countcompose }}个体检套餐</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="Package">
      <div class="title3">
        <div class="left">推荐套餐</div>
        <div class="right">
          <div class="right-ico" @click="chainofhospital">
            <i class="iconfont icon-list01"></i><span>更多</span>
          </div>
        </div>
      </div>
      <div class="data">
        <ul>
          <li
            v-for="(item, index) in hotcomposedata"
            :key="index"
            @click="packageshow(item.compose_id)"
          >
            <div class="img">
              <img src="../assets/img/package-img.png" alt="" />
            </div>
            <div class="txt">
              <div class="txt1">{{ item.compose_name }}</div>
              <div class="txt2">南方医科大学附属第一医院体检科</div>
              <div class="txt3">
                ￥{{ item.price }} <s>￥{{ item.oldprice }}</s>
              </div>
              <div class="btn">立即购买</div>
            </div>
          </li>
        </ul>
        <div class="loader" v-show="isshow"></div>
        <div class="isdata" v-show="istxt">没有更多数据了</div>
      </div>
    </div>
  </div>
</template>
<script>
// 机构
import { hothospital } from "@/api/hothospital.api";
import { hotcompose } from "@/api/hotcompose.api";
export default {
  data() {
    return {
      hothospitaldata: [], //推荐机构
      hotcomposedata: [], //推荐套餐
      isshow: false,
      istxt: false,
      page: 1,
      pageSize: 10,
    };
  },
  methods: {
    // 跳转机构详情页
    chainemails(id, chain_id) {
      this.$router.push({ path: "/chaindetails", query: { id: id } });
    },
    // 跳转套餐详情
    packageshow(id) {
      this.$router.push({ path: "/packageshow", query: { id: id } });
    },
    // 我要体检
    cat() {
      this.$router.push({ path: "/cat" });
    },
    // 套餐
    chainofhospital() {
      this.$router.push({ path: "/chainofhospital" });
    },
    // 我的预约
    myorder(e) {
      this.$router.push({ path: "/myOrder", query: { user_id: e } });
    },
    // 我的报告
    report() {
      this.$router.push({ path: "/report" });
    },
    // 跳转机构列表
    chainlist() {
      this.$router.push({ path: "/chainlist" });
    },
    // 推荐机构
    async hothospital() {
      let res = await hothospital();
      this.hothospitaldata = res.data.data;
    },
    // 推荐套餐
    async hotcompose() {
      this.isshow = true
      let res = await hotcompose({ page: this.page, pageSize: this.pageSize });
      if (res.data.data.data.length == 0) {
        this.isshow = false;
        this.istxt = true;
      } else {
        this.isshow = false;
        this.hotcomposedata = this.hotcomposedata.concat(res.data.data.data);
      }
    },
  },
  created() {
    this.hothospital(); //推荐机构
    this.hotcompose(); //推荐套餐
    // this.imgUrl();
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
          _this.hotcompose();
        }
      }
    };
  },
  computed: {},
};
</script>
<style lang="less" scoped>
@import "../font/iconfont";
body {
  background-color: #f4f6f6;
}
// 头部导航
.top {
  width: 100%;
  height: 5.23rem;
  background: url(../assets/img/top-bg.png) no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  .title {
    width: 100%;
    height: 0.9rem;
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.37rem;
    color: #fff;
    margin: 0.88rem 0 0.15rem 0;
  }
  .nav {
    width: 6.95rem;
    height: 3.33rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .nav-top {
      width: 100%;
      height: 1.55rem;
      display: flex;
      justify-content: space-between;
      .top-left {
        width: 3.3rem;
        height: 1.55rem;
        background-color: #fff;
        border-radius: 0.05rem;
        display: flex;
        .ico {
          width: 1.43rem;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 0.68rem;
            height: 0.71rem;
          }
        }
        .txt {
          width: 1.88rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;

          .txt-top {
            font-size: 0.25rem;
          }
          .txt-bottom {
            font-size: 0.18rem;
            color: #9e9e9e;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
      .top-right {
        .top-left;
      }
    }
    .nav-bottom {
      width: 100%;
      height: 1.55rem;
      display: flex;
      justify-content: space-between;
      .bottom-left {
        .nav-top .top-left;
      }
      .bottom-right {
        .nav-top .top-left;
      }
    }
  }
}
.agency {
  width: 7.3rem;
  height: 3.82rem;
  margin: 0.2rem auto;
  .title2 {
    width: 100%;
    height: 0.6rem;
    display: flex;

    .left {
      flex: 1;
      line-height: 0.6rem;
      font-size: 0.37rem;
    }
    .right {
      flex: 1;
      .right-ico {
        display: flex;
        color: #38ad67;
        justify-content: flex-end;
        align-items: center;
        margin-top: 0.2rem;
        .icon-list01 {
          color: #38ad67;
          font-size: 0.36rem;
        }
      }
    }
  }
  .img-txt {
    width: 100%;
    height: 3.22rem;
    margin-top: 0.15rem;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: 2.34rem;
        height: 3.22rem;
        display: flex;
        flex-direction: column;
        .img {
          width: 2.34rem;
          height: 2.34rem;
          position: relative;
          img {
            width: 2.34rem;
            height: 2.34rem;
          }
          .ico {
            position: absolute;
            top: 0.1rem;
            right: 0.15rem;
            width: 0.52rem;
            height: 0.52rem;
            border-radius: 0.52rem;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 0.29rem;
              height: 0.29rem;
            }
          }
        }
        .txt {
          display: flex;
          flex-direction: column;
          .txt-top {
            width: 2.34rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 0.1rem;
          }
          .txt-bottom {
            color: #38ad67;
            margin-top: 0.1rem;
          }
        }
      }
    }
  }
}
.Package {
  width: 7.3rem;
  margin: 0 auto;
  .title3 {
    width: 100%;
    height: 0.6rem;
    display: flex;

    .left {
      flex: 1;
      line-height: 0.6rem;
      font-size: 0.37rem;
    }
    .right {
      flex: 1;
      .right-ico {
        display: flex;
        color: #38ad67;
        justify-content: flex-end;
        align-items: center;
        margin-top: 0.2rem;
        .icon-list01 {
          color: #38ad67;
          font-size: 0.36rem;
        }
      }
    }
  }
@import url("../css/data.less");
}
@import url("../css/loding.less");
</style>
