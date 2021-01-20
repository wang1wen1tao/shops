// index.js
import {getInfo,login} from '../../api/indexApi'
// 获取应用实例
const app = getApp()

Page({
  data: {
    value:'',
    list:[{id:1,name:'张三'},{id:2,name:'李思'}],
  },
  // 事件处理函数
  navTo() {
    wx.navigateTo({
      url: '../../animal/pages/cat/cat',
    })
  },
  getItem(e){
    console.log(e.target.dataset.id);
    wx.navigateTo({
      url: '../../animal/pages/cat/cat?id='+e.target.dataset.id,
    })
  },
  onLoad() {
    // getInfo({id:123}).then(res=>{
    //   console.log(res);
    // })
    // login({id:423432}).then(res=>{
    //   // console.log(res);
    // })
  },
  getUserInfo(e) {
   
  }
})
