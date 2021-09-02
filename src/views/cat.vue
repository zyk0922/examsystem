<template>
   <div>
       <div class="title">
           <div class="back" @click="back"><i class="iconfont icon-youjiantou-copy"></i>返回</div>
           <div class="title-txt">套餐分类</div>
        </div>
        <div class="data">
            <ul>
                <li v-for="(item,index) in catlist" :key="index" @click="chainofhospital()">
                    <div class="img"><img src="../assets/img/package-img.png" alt=""></div>
                    <div class="txt">
                        <div class="txt1">{{item.name}}</div>
                        <div class="txt2">{{item.count}}个</div>
                    </div>
                    <div class="ico"><i class="iconfont icon-mjiantou-copy"></i></div>
                </li>
            </ul>
        </div>
   </div>
</template>
<script>
import {cat} from '@/api/hotcompose.api'
export default {
   data() {
      return {
          catlist:[],
      }
   },
   methods:{
    //    跳转套餐详情
    chainofhospital(){
        this.$router.push({path:'/chainofhospital'})
    },
    //    返回
    back() {
        this.$router.go(-1)
    },
    //    获取数据
       async catdata(){
           let res = await cat({})
           this.catlist = res.data.data
       }
   },
   created(){
       this.catdata();
   },
   computed:{
   },
}
</script>
<style lang="less" scoped>
@import url('../font/iconfont.css');

.title {
    display: flex;
    width: 100%;
    height: 1.45rem;
    align-items: center;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    .back {
        display: flex;
        align-items: center;
        font-size: 0.3rem;
        color: #5cbd82;
        .iconfont {
            font-size: 0.3rem;
            color: #5cbd82;
            margin: 0 0.17rem 0 0.27rem;
        }
    }
    .title-txt {
        font-size: 0.3rem;
        margin-left: 1.9rem;
    }
}
.data {
    margin-top: 1.45rem;
    ul {
        display: flex;
        flex-direction: column;
        li {
            width: 6.85rem;
            height: 1.6rem;
            background-color: #fff;
            border-radius: 0.15rem;
            margin:0.25rem auto 0 auto;
            display: flex;
            .img {
                width: 2.2rem;
                height: 1.6rem;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 1.75rem;
                    height: 1.35rem;
                    border-radius: 0.15rem;
                }
            }
            .txt {
                width: 3.6rem;
                height: 1.6rem;
                .txt1 {
                    flex: 1;
                    line-height: 0.8rem;
                    font-size: 0.22rem;
                }
                .txt2 {
                    flex: 1;
                    font-size: 0.18rem;
                }

            }
            .ico {
                width: 0.95rem;
                height: 1.6rem;
                display: flex;
                justify-content: center;
                i {
                    color: #d0d5d6;
                    font-size: 0.43rem;
                    line-height: 1.6rem;
                }
            }
        }
    }
}
</style>
