<template>

<view class="page">
    <view class="wrapper" v-for="(item, index) in list" :key="index">
        <!-- 左侧box -->
        <view class="content">
            <view class="couponCount">{{item.size}}张</view>
            <view class="oilline linwidth160 lineBt"></view>
            <view>
                <text class="moyfh">¥</text>
                <text  class="moneyNum">{{item.price}}</text>
            </view>
            <view class="oilline  linwidth160 lineBt"></view>
        </view>

        <view class="split-line"></view>
        <!-- 右侧box -->
        <view class="tip">
            <view class="oilline linwidth227 lineBt "></view>
            <view class="vnameBx">
                <view class="couponmaes">{{item.itemName}}</view>
                <view class="couponmaes">满{{ item.activityPrice}}减{{item.price}}元</view>
            </view>
            <view class="oilline linwidth227 lineBt"></view>
            <view class="btnbx  item.isJoin==200?'':'moveCm'  ">
            <view class="btnw item.isJoin==200?'btnBgGray':'btnBgActive'  ">
            <view class="btnn" >{{btnTxt}}</view> 
                </view>
            </view>
        </view>
    </view>
</view>

</template>

<script>

export default {
  data() {
    return {
       list: [{
            id    :   "2c91e88272084d710172112415350021",
            itemId    :   "7",
            itemName  :   "10元泡面优惠券",
            denomination  :   0,
            originPrice   :   0,
            price :   10,
            activityPrice :   100,
            description   :   "",
            size  :   5,
            isJoin:"201"
          },
          {
            id    :   "2c91e88272084d710172112415350024",
            itemId    :   "8",
            itemName  :   "30元鸡蛋优惠券",
            denomination  :   0,
            originPrice   :   0,
            price :   10,
            activityPrice :   200,
            description   :   "",
            size  :   3,
            isJoin:"200"
          }],
          isJoin:"200",
          btnTxt:"领取成功"
    };
  },

  components: {},
  props: {
  
  },
  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  beforeMount: function () {//console.log(this.data.item);
  },
  methods: {
  
 

  }
};
</script>
<style>
@import "./coupon.css";
</style>