// pages/mcategory/mlist.js
import {getLists} from '../../api/list'
Page({
  data: {
    show:false,
    data:[],
    queryForm:{
      pageNum:1,
      pageSize:100,
      recycleBin:0,
      classifyId:undefined
    }
  },
  onClose(){
    this.setData({
      show:false
    })
  },
  showPopup(){
    this.setData({
      show:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    let dyname=wx.getStorageSync('curCate').classifyName
    wx.setNavigationBarTitle({
      title: dyname,
    })
    let cateId=wx.getStorageSync('curCate').classifyId
    this.setData({
      'queryForm.classifyId':cateId
    })
    getLists(this.data.queryForm).then(res=>{
      this.setData({
        data:res.rows
      })
    })
  }
})