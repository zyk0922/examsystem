<template>
  <div>
    <div class="title">
      <div class="back" @click="back">
        <i class="iconfont icon-youjiantou-copy"></i>返回
      </div>
      <div class="title-txt">我的预约</div>
    </div>
    <div class="data">
      <ul>
        <li v-for="(item, index) in orderlist" :key="index" @click="orderdetails()">
          <div class="data-top">
            <div class="left">
              <span class="name">{{ item.username }}</span
              ><span class="tel">{{ item.mobile }}</span>
            </div>
            <div class="state" v-colorel >{{ item.order_status }}</div>
          </div>
          <div class="txt">
            <div class="txt1">
              <div class="txtname">体检机构：</div>
              <div class="txtdata">{{ item.hospital_name }}</div>
            </div>
            <div class="txt1">
              <div class="txtname">体检时间：</div>
              <div class="txtdata">{{ item.addtime | timeFormat }}</div>
            </div>
            <div class="txt1">
              <div class="txtname">预约单号：</div>
              <div class="txtdata">{{ item.order_no }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="loader" v-show="isshow"></div>
    <div class="isdata" v-show="istxt">没有更多数据了</div>
  </div>
</template>
<script>
import { myorder } from "@/api/order.api";
export default {
  data() {
    return {
      orderlist: [],
      isshow: false,
      istxt: false,
      page: 1,
      pageSize: 10,
      user_id: 0,
    };
  },
  methods: {
    //   预约详情
      orderdetails(){
          this.$router.push({path:'/orderdetails'})
      },
    async orderdata() {
      this.isshow = true
      let res = await myorder({
        page: this.page,
        pageSize: this.pageSize,
        user_id: this.user_id,
      });
      if (res.data.data.data.length == 0) {
        this.isshow = false;
        this.istxt = true;
      } else {
        this.isshow = false;
        this.orderlist = this.orderlist.concat(res.data.data.data);
      }
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.user_id = this.$router.currentRoute.query.user_id;
    this.orderdata();
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
          _this.orderdata();
        }
      }
    };
  },
  filters:{
      timeFormat(value){
          let y = new Date(value).getFullYear();
          let m = new Date(value).getMonth()+1>10?'0'+(new Date(value).getMonth()+1) : (new Date(value).getMonth()+1);
          let d = new Date(value).getDate();
          return y+'-'+m+'-'+d
      }
  },
  computed: {},
  directives: {
    colorel:{
        inserted:(el)=>{
           if(el.innerHTML=='待支付'){
               el.style.color='#ff9900'
           }
           if(el.innerHTML=='待体检'){
               el.style.color='#38ad67'
           }
           if(el.innerHTML=='已取消'){
               el.style.color='#333333'
           }
           if(el.innerHTML=='已支付'){
               el.style.color='#1296db'
           }
           if(el.innerHTML=='已完成'){
               el.style.color='1afa29'
           }
        }
    }
  },
};
</script>
<style lang="less" scoped>
@import url("../font/iconfont.css");
@import url("../css/title.less");
.data {
  width: 100%;
  margin-top: 1.25rem;
  ul {
    display: flex;
    flex-direction: column;
    li {
      width: 7.1rem;
      height: 2.85rem;
      margin: 0.25rem auto 0 auto;
      background-color: #fff;
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
        .state {
          line-height: 0.92rem;
          margin-right: 0.45rem;
          color: #5cbd82;
        }
        &::after {
          content: "";
          width: 100%;
          height: 0.01rem;
          background-color: #f2f2f2;
          position: absolute;
          bottom: 0;
          left: 0;
          transform: scaleY(0.5);
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
  }
}
@import url("../css/loding.css");
</style>
