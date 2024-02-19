// pages/medit/medit.js
import {formatTime} from '../../utils/util'
import {addNewNote,note,edit} from '../../api/list'
Page({
  data: {
    noteForm:{
      noteId:undefined,
      noteTitle:'',
      noteContent:''
    }
  },
  commonInputHandler(e){
    const {target,key}=e.currentTarget.dataset
    this.setData({
      [`${target}.${key}`]:e.detail.value
    })
  },
  addnote(){
    let noteId=wx.getStorageSync('editId')
    if(noteId){
      let obj=this.data.noteForm
      obj.noteId=noteId
      this.setData({
        noteForm:obj
      })
      edit(this.data.noteForm).then(res=>{
        console.log(res);
        if(res.code==200){
          wx.switchTab({
            url: '/pages/mlist/mlist',
          })
        }
      })
    }else{
      addNewNote(this.data.noteForm).then(res=>{
        console.log(res);
        if(res.code==200){
          wx.switchTab({
            url: '/pages/mlist/mlist',
          })
        }
      })
    }
    return false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let time=new Date()
    console.log(formatTime(time));
    wx.setNavigationBarTitle({
      title: formatTime(time),
    })
    let noteId=wx.getStorageSync('editId')
    if(noteId){
      note(noteId).then(res=>{
        this.setData({
          noteForm:res.data
        })
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})