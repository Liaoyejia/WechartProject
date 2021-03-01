// pages/register/register.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  submitData(res){
    console.log(res)
    var result = res.detail.value
    db.collection("stu_user").add({
      data:result
    })
    .then(res=>{
      console.log(res)
    })
  }

})