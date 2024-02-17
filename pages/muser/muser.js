import {getInfo}from '../../api/user'
Component({
  data:{
    dialog:false,
    info:{}
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 3
        })
      }
    }
  },
  methods:{
    // 跳转至账号页面
    toAccount(){
      wx.switchTab({
        url: '/pages/muser/maccount'
      })
    },
    // 打开加密弹窗
    toDialog(){
      this.setData({
        dialog:true,
      })
    },
    // 关闭加密弹窗
    closeDialog(){
      this.setData({
        dialog:false,
      })
    }
  },
  lifetimes:{
    created(){
      getInfo().then(res=>{
        this.setData({
          info:res.data
        })
      })
    }
  }
})