Component({
  data:{
    tip:true
  },
  methods:{
    closeTip(){
      this.setData({
        tip:false
      })
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
    }
  }
})