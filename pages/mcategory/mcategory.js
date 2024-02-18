import {getCate} from '../../api/classification'

Component({
  data:{
    data:[]
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  addCate(){
    wx.switchTab({
      url: '/pages/mlog/mlog.js',
    })
    console.log(123123);
  },
  lifetimes:{
    created(){
      getCate().then(res=>{
        this.setData({
          data:res.data
        })
      })
    }
  }
})