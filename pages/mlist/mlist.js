import {getCate} from '../../api/classification'

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
  },
  lifetimes:{
    created(){
      getCate().then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
})