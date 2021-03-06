// pages/stu_login/stu_lgoin.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: "",
    password: "",
    message:""

  },

submit_Data(res){
  var result = res.detail.value;
  console.log(res)
},


  AccountInput: function(e){
    var username = e.detail.value;//从页面获取到用户输入的用户名/邮箱/手机号
    if (username != ''){
      this.setData({ account: username });//把获取到的密码赋值给全局变量Date中的password
    }
  },

  PwdInput:function(e){
    var pwd = e.detail.value;//从页面获取到用户输入的密码
    if (pwd != ''){
      this.setData({ password: pwd });//把获取到的密码赋值给全局变量Date中的password
    }
  },
  login: function (e) {
    wx.request({
      url: 'http://localhost:8080/JavaWeb/login',//后面详细介绍
      //定义传到后台的数据
      data: {
        //从全局变量data中获取数据
        account: this.data.account,
        password: this.data.password,
      },
      method: 'get',//定义传到后台接受的是post方法还是get方法
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log("调用API成功");
        console.log(res.data.message);
        if (res.data.message=="ok"){
          wx.showToast({
            title: '登陆成功',
          })
        }
        else{
          wx.showModal({
            title: '提示',
            content:'用户名或者密码错误',
            showCancel:false
          })
        }
      },
      fail: function (res) {
        console.log("调用API失败");
      }
    })
  }

})