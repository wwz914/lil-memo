import {getCate,add,remove,edit} from '../../api/classification'
Component({
  data:{
    show:false,
    dialog:false,
    classForm:{
      classifyName:undefined
    },
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
  methods:{
    addCate(){
      if(!this.data.classForm.classifyName)return
      add(this.data.classForm).then(res=>{
        console.log(res);
        if(res.code==200){
          getCate().then(res=>{
            this.setData({
              data:res.data,
              classForm:{}
            })
          })
        }
      })
    },
    getList(e){
      wx.setStorageSync('curCate', e.currentTarget.dataset.item)
      wx.navigateTo({
        url: '/pages/mcategory/mlist',
      })
    },
    opCate(e){
      wx.setStorageSync('opCateId', e.currentTarget.dataset.item.classifyId)
      this.setData({
        show:true
      })
      console.log(e.currentTarget.dataset);
    },
    commonInputHandler(e){
      const {target,key}=e.currentTarget.dataset
      this.setData({
        [`${target}.${key}`]:e.detail.value
      })
    },
    onClose(){
      this.setData({
        show:false
      })
    },
    removeNote(){
      const classifyId=wx.getStorageSync('opCateId')
      remove(classifyId).then(res=>{
        if(res.code==200){
          this.setData({
            show:false,
            data:this.data.data.filter(e=>e.classifyId!=classifyId)
          })
        }
      })
    },
    editCate(){
      let obj=this.data.classForm
      obj.classifyId=wx.getStorageSync('opCateId')
      edit(obj).then(res=>{
        console.log(res);
        if(res.code==200){
          getCate().then(res=>{
            this.setData({
              data:res.data,
              classForm:{},
              dialog:false
            })
          })
        }
      })
    }
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