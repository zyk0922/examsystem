<template>
  <div>
    <div class="title">
      <div class="back" @click="back">
        <i class="iconfont icon-youjiantou-copy"></i>返回
      </div>
      <div class="title-txt">机构列表</div>
    </div>
    <div class="inp">
      <div class="sort">
        <span>{{ sorttxt }}</span
        ><i
          @click="sort"
          v-show="sortlist==1"
          class="iconfont icon-paixu3"
        ></i>
        <i
          @click="sort"
          v-show="sortlist==2"
          class="iconfont icon-paixu"
        ></i>
      </div>
      <div class="screen">
        <span>筛选</span><i class="iconfont icon-shaixuan"></i>
      </div>
    </div>
    <div class="data">
      <ul>
        <li
          v-for="(item, index) in chainlist"
          :key="index"
          @click="chaindetails(item.chain_id)"
        >
          <div class="img">
            <img src="../assets/img/agency-2.png" alt="" />
            <div class="ico">
              <img src="../assets/img/agecny-ico.png" alt="" />
            </div>
          </div>
          <div class="suit-txt">
            <div class="suit-txt1">{{ item.chain_name }}</div>
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
</template>
<script>
import { chainlist } from "@/api/hothospital.api";
export default {
  data() {
    return {
      chainlist: [],
      isshow: false,
      istxt: false,
      page: 1,
      pageSize: 10,
      sortlist: 1,
      sorttxt: "按销量降序",
    };
  },
  methods: {
    // 升序降序
    sort() {
      if (this.sortlist == 1) {
        (this.sortlist = 2), (this.sorttxt = "按销量升序");
        this.chainlist = [];
        this.chainlistdata();
      } else {
        (this.sortlist = 1), (this.sorttxt = "按销量降序");
        this.chainlist = [];
        this.chainlistdata();
      }
    },
    // 跳转机构详情
    chaindetails(id) {
      this.$router.push({ path: "/chaindetails", query: { id: id } });
    },
    //   机构列表
    async chainlistdata() {
      this.isshow = true
      let res = await chainlist({ page: this.page, pageSize: this.pageSize });
      if (res.data.data.length == 0) {
        this.isshow = false;
        this.istxt = true;
      } else {
        this.isshow = false;
        let reslist = res.data.data
        if(this.sortlist==1){
          reslist.sort((a,b)=>{
            return b.chain_id - a.chain_id
          })
        }else{
          reslist.sort((a,b)=>{
            return a.chain_id - b.chain_id
          })
        }
        this.chainlist = this.chainlist.concat(reslist);
        this.chainlist.forEach(i => {
          console.log(i.chain_id)
        });
      }
    },
    //    返回
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    this.chainlistdata();
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
          _this.chainlistdata();
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
.inp {
  width: 100%;
  height: 1rem;
  background-color: #fff;
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  .sort {
    width: 3.4rem;
    height: 0.88rem;
    background-color: #f4f6f6;
    border-radius: 0.88rem;
    margin-left: 0.28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin-left: 0.32rem;
    }
    .icon-paixu3 {
      color: #a5adb1;
      margin-right: 0.3rem;
    }
    .icon-paixu {
      color: #a5adb1;
      margin-right: 0.3rem;
    }
  }
  .screen {
    width: 3.4rem;
    height: 0.88rem;
    background-color: #f4f6f6;
    border-radius: 0.88rem;
    margin-right: 0.28rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin-left: 0.32rem;
    }
    .icon-shaixuan {
      color: #a5adb1;
      margin-right: 0.3rem;
    }
  }
}
.data {
  width: 7.25rem;
  height: 1rem;
  margin: 2.25rem auto;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 3.5rem;
      height: 4.54rem;
      background-color: #fff;
      margin-top: 0.15rem;
      .img {
        width: 3.2rem;
        margin: 0.2rem auto;
        position: relative;
        img {
          width: 3.2rem;
          height: 2.57rem;
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
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2; //超出几行
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
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
@import url("../css/loding.less");
</style>
