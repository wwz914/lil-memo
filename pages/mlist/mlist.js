import {getCate} from '../../api/classification'

Component({
  data:{
    tip:true,
    opIndex:undefined,
    data:[
      {
        title:'OKOK',
        date:'2022年8月17日 中午12:02',
        content:'...'
      },
      {
        title:'你好你好',
        date:'2022年8月17日 中午12:00',
        content:'...'
      },
    ],
    opArr:['置顶','删除','加密','分类','复制','取消']
  },
  methods:{
    closeTip(){
      this.setData({
        tip:false
      })
    },
    bindOpPickerChange(e){
      this.setData({
        opIndex:e.detail.value
      })
      console.log(this.data.opArr[this.data.opIndex]);
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
      // getCate().then(res=>{
      //   console.log(res.data);
      // }).catch(err=>{
      //   console.log(err);
      // })
    }
  }
})