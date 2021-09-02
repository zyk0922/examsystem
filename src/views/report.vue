<template>
  <div>
    <div class="title">
      <div class="back" @click="back">
        <i class="iconfont icon-youjiantou-copy"></i>返回
      </div>
      <div class="title-txt">体检报告</div>
    </div>
    <div class="data">
      <ul>
        <li>
          <div class="chainname">【慈铭】广州体育中心体检中心</div>
          <div class="data-btn">
            <div class="data-txt">
              <div class="left">
                <div class="name">小二</div>
                <div class="tel">12345678912</div>
              </div>
              <div class="right">体检时间：2021-04-12</div>
            </div>
            <div class="btn">
              <div class="btn1">发送到邮箱</div>
              <div class="btn2">下载</div>
            </div>
          </div>
        </li>
        <li>
          <div class="chainname">【慈铭】广州体育中心体检中心</div>
          <div class="data-btn">
            <div class="data-txt">
              <div class="left">
                <div class="name">小二</div>
                <div class="tel">12345678912</div>
              </div>
              <div class="right">体检时间：2021-04-12</div>
            </div>
            <div class="btn">
              <div class="btn2">下载</div>
            </div>
          </div>
        </li>
         <li>
          <div class="chainname">【慈铭】广州体育中心体检中心</div>
          <div class="data-btn">
            <div class="data-txt">
              <div class="left">
                <div class="name">小二</div>
                <div class="tel">12345678912</div>
              </div>
              <div class="right">体检时间：2021-04-12</div>
            </div>
            <div class="btn">
              <div class="btn2">下载</div>
            </div>
          </div>
        </li>
         <li>
          <div class="chainname">【慈铭】广州体育中心体检中心</div>
          <div class="data-btn">
            <div class="data-txt">
              <div class="left">
                <div class="name">小二</div>
                <div class="tel">12345678912</div>
              </div>
              <div class="right">体检时间：2021-04-12</div>
            </div>
            <div class="btn">
              <div class="btn2">下载</div>
            </div>
          </div>
        </li>
      </ul>
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
.data {
  width: 7.22rem;
  margin: 1.5rem auto;
  ul {
    display: flex;
    flex-direction: column;
    li {
      width: 7.22rem;
      height: 2.7rem;
      background-color: #fff;
      margin-bottom: 0.25rem;
      .chainname {
        height: 0.95rem;
        padding-left: 0.4rem;
        line-height: 0.95rem;
        font-size: 0.27rem;
        border-bottom: 0.01rem solid #f4f4f4;
      }
      .data-btn {
        width: 100%;
        height: 1.75rem;
        display: flex;
        flex-direction: column;
        .data-txt {
          width: 100%;
          height: 1rem;
          display: flex;
          justify-content: space-between;
          .left {
            display: flex;
            line-height: 1rem;
            .name {
              margin: 0 0.2rem 0 0.25rem;
            }
          }
          .right {
            display: flex;
            line-height: 1rem;
            margin-right: 0.33rem;
          }
        }
        .btn {
          display: flex;
          justify-content: flex-end;
          color: #40aa7c;
          .btn1 {
            width: 1.95rem;
            height: 0.6rem;
            border: 0.01rem solid #40aa7c;
            line-height: 0.6rem;
            text-align: center;
            border-radius: 0.15rem;
          }
          .btn2 {
            width: 0.96rem;
            height: 0.6rem;
            border: 0.01rem solid #40aa7c;
            line-height: 0.6rem;
            text-align: center;
            border-radius: 0.15rem;
            margin: 0 0.32rem 0 0.2rem;
          }
        }
      }
    }
  }
}
</style>
