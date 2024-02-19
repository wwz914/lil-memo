Component({
  data:{
    currentDate:new Date().getTime(),
    minDate:new Date().getTime(),
    formatter(type,value){
      if(type=='year'){
        return `${value}`;
      }
      if(type=='month'){
        return `${value}`;
      }
      return value
    }
  },
  methods:{
    onInput(e){
      this.setData({
        currentDate:e.detail
      })
    }
  },
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 2
        })
      }
    }
  }
})