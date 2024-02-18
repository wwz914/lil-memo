import {getLists}from '../../api/list'
Component({
  data:{
    tip:true,
    show:false,
    data:[
      
    ],
    queryForm:{
      pageNum:1,
      pageSize:100,
      recycleBin:0,
    }
  },
  methods:{
    closeTip(){
      this.setData({
        tip:false
      })
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
    toTop(){},
    remove(){},
    encrypt(){},
    classify(){},
    copy(){}
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
      getLists(this.data.queryForm).then(res=>{
        this.setData({
          data:res.rows
        })
      })
      // getCate().then(res=>{
      //   console.log(res.data);
      // }).catch(err=>{
      //   console.log(err);
      // })
    }
  }
})