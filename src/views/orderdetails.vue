<template>
  <div>
    <div class="title">
      <div class="back" @click="back">
        <i class="iconfont icon-youjiantou-copy"></i>返回
      </div>
      <div class="title-txt">体检预约详情</div>
    </div>
    <div class="data-1">
      <div class="data-top">
        <div class="left">
          <span class="name">小二</span><span class="tel">12345678912</span>
        </div>
      </div>
      <div class="txt">
        <div class="txt1">
          <div class="txtname">体检机构：</div>
          <div class="txtdata">打发大水发生的法师打发斯蒂芬</div>
        </div>
        <div class="txt1">
          <div class="txtname">体检时间：</div>
          <div class="txtdata">2021-04-12</div>
        </div>
        <div class="txt1">
          <div class="txtname">预约单号：</div>
          <div class="txtdata">J79191555</div>
        </div>
      </div>
    </div>
    <div class="data-2">
      <div class="txt1"><div class="left">订单号：2343432</div></div>
      <div class="txt1">
        <div class="left">老年人体检套餐豪华版（女）</div>
        <div class="num">￥998 <i class="iconfont icon-mjiantou-copy"></i></div>
      </div>
      <div class="txt1">
        <div class="left">胸部CT</div>
        <div class="num">￥998 <i class="iconfont icon-mjiantou-copy"></i></div>
      </div>
      <div class="txt1">
        <div class="left">心电图</div>
        <div class="num">￥998 <i class="iconfont icon-mjiantou-copy"></i></div>
      </div>
      <div class="price">
        <div class="pricetxt">合计</div>
        <div class="pricenum">
          ￥998 <i class="iconfont icon-mjiantou-copy"></i>
        </div>
      </div>
    </div>
    <div class="data-3">
      <div class="top-list">
        <div class="txt1">
          <div class="left">老年人体检套餐豪华版（女）</div>
          <div class="num">订单已失效</div>
        </div>
        <div class="txt1">
          <div class="left">老年人体检套餐豪华版（女）</div>
          <div class="num">
            ￥998 <i class="iconfont icon-mjiantou-copy"></i>
          </div>
        </div>
        <div class="price">
          <div class="pricetxt">合计</div>
          <div class="pricenum">
            ￥998 <i class="iconfont icon-mjiantou-copy"></i>
          </div>
        </div>
      </div>
      <div class="btn"><div class="btnn">我要加项</div></div>
    </div>
    <div class="tab">
        <div class="cancel">取消预约</div>
        <div class="upd">修改时间</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    //   返回
    back() {
      this.$router.go(-1);
    },
  },
  created() {},
  computed: {},
};
</script>
<style lang="less" scoped>
@import url("../font/iconfont.css");
@import url("../css/title.less");
.data-1 {
  width: 7.07rem;
  background-color: #fff;
  margin: 1.5rem auto 0 auto;
  .data-top {
    width: 100%;
    height: 0.92rem;
    display: flex;
    position: relative;
    .left {
      flex: 1;
      display: flex;
      .name {
        font-size: 0.27rem;
        line-height: 0.92rem;
        margin: 0 0.25rem;
      }
      .tel {
        line-height: 0.92rem;
        font-size: 0.2rem;
        font-weight: bold;
      }
    }
    &::after {
      content: "";
      width: 100%;
      height: 0.01rem;
      background-color: #000;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleY(0.05);
    }
  }
  .txt {
    width: 100%;
    height: 1.92rem;
    display: flex;
    flex-direction: column;
    .txt1 {
      flex: 1;
      display: flex;
      align-items: center;
      margin-left: 0.25rem;
    }
  }
}
.data-2 {
  width: 7.07rem;
  height: 4.25rem;
  background-color: #fff;
  margin: 0.25rem auto;
  display: flex;
  flex-direction: column;
  .txt1 {
    height: 0.85rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &::after {
      content: "";
      width: 7.07rem;
      height: 0.01rem;
      background-color: #000;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: scaleY(0.05);
    }
    .left {
      margin-left: 0.25rem;
    }
    .icon-mjiantou-copy {
      font-size: 0.23rem;
      margin-right: 0.25rem;
    }
  }
  .price {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ff2c00;
    .pricetxt {
      margin-left: 0.25rem;
    }
    .icon-mjiantou-copy {
      font-size: 0.23rem;
      color: #000;
      margin-right: 0.25rem;
    }
  }
}
.data-3 {
  width: 7.07rem;
  height: 4.9rem;
  background-color: #fff;
  margin: 0 auto 1.2rem auto;
  font-size: 0.3rem;
  .top-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    .txt1 {
      height: 0.85rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      &::after {
        content: "";
        width: 7.07rem;
        height: 0.01rem;
        background-color: #000;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleY(0.05);
      }
      .left {
        margin-left: 0.25rem;
      }
      .num {
        margin-right: 0.25rem;
      }
      .icon-mjiantou-copy {
        font-size: 0.23rem;
      }
    }
    .price {
      height: 0.85rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #ff2c00;
      position: relative;
      &::after {
        content: "";
        width: 7.07rem;
        height: 0.01rem;
        background-color: #000;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleY(0.05);
      }
      .pricetxt {
        margin-left: 0.25rem;
      }
      .icon-mjiantou-copy {
        font-size: 0.23rem;
        color: #000;
        margin-right: 0.25rem;
      }
    }
  }
  .btn { 
    width: 100%;
    display: flex;
    justify-content: center;
    .btnn {
      width: 4.1rem;
      height: 0.9rem;
      border: 0.01rem solid #47ad81;
      border-radius: 0.15rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #47ad81;
      margin-top: 0.4rem;
    }
  }
}
.tab {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    border-top: 0.01rem solid #47ad81;
    display: flex;
    font-size: 0.39rem;
    position: fixed;
    bottom: 0;
    left: 0;
    .cancel {
        flex: 1;
        line-height: 1rem;
        text-align: center;
        color: #47ad81;
    }
    .upd {
        flex: 1;
        background-color: #47ad81;
        line-height: 1rem;
        text-align: center;
        color: #fff;
    }
}
</style>
