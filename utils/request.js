const Flyio = require('../miniprogram_npm/flyio/index');
const fly = new Flyio();
const app = getApp();
const host = "https://rmall.ukelink.net"

fly.interceptors.request.use(request=>{
  wx.showLoading({
    title: '加载中',
    mask:true
  });
  var info = app.globalData.token;
  console.log(info)
  if(info != null){
    request.headers = {
      "token":info
    };
  }else{
    wx.hideLoading({});
  }
    // let authParams = {
    //   //公共参数
    //   "categoryType": "SaleGoodsType@sim",
    //   "streamNo": "wxapp153570682909641893",
    //   "reqSource": "MALL_H5",
    //   "appid": "string",
    //   "timestamp": new Date().getTime(),
    //   "sign": "string"
    // };
    // request.body && Object.keys(request.body).forEach((val) => {
    //   if(request.body[val] === ""){
    //     delete request.body[val]
    //   };
    // });
    // request.body = {
    //   ...request.body,
    //   ...authParams
    // }
    return request;
 
})
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading();
    return response.data;//请求成功之后将返回值返回
  },
  (err) => {
    //请求出错，根据返回状态码判断出错原因
    console.log(err);
    wx.hideLoading();
    if(err){
      wx.showToast({
        title: err,
      })
      return "请求失败";
    };
  }
);
fly.config.baseURL = host;
export default fly;