import {getLists,removeNote,toTopAction}from '../../api/list'
import {getCate, setCate} from '../../api/classification'
Component({
  data:{
    tip:true,
    show:false,
    cateDialog:false,
    data:[],
    columns:[],
    queryForm:{
      pageNum:1,
      pageSize:100,
      recycleBin:0,
    },
    newForm:{
      noteContent:undefined,
      noteTitle:undefined
    },
    cateForm:{
      classifyId:undefined,
      noteId:undefined
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
        show:false,
        cateDialog:false
      })
    },
    showPopup(e){
      wx.setStorageSync('opId', e.currentTarget.dataset.item.noteId)
      this.setData({
        show:true
      })
      return false
    },
    toTop(){
      const noteId=wx.getStorageSync('opId')
      toTopAction(noteId).then(res=>{
        if(res.code==200){
          let data1=this.data.data
          console.log(this.data.data);
          let obj=data1.find(e=>e.noteId==noteId)
          obj.top=(obj.top)==1?0:1
          if(obj.top==1){
            data1=data1.filter(e=>e.noteId!=noteId)
            data1.unshift(obj)
          }else if(obj.top==0){
            data1=data1.filter(e=>e.noteId!=noteId)
            data1.push(obj)
          }
          this.setData({
            show:false,
            data:data1
          })
        }
      })
    },
    remove(){
      const noteId=wx.getStorageSync('opId')
      removeNote(noteId).then(res=>{
        if(res.code==200){
          this.setData({
            show:false,
            data:this.data.data.filter(e=>e.noteId!=noteId)
          })
        }
      })
    },
    encrypt(){},
    classify(){

    },
    setCateAction(){
      let obj=this.data.cateForm
      obj.noteId=wx.getStorageSync('opId')
      setCate().then(res=>{
        console.log(res);
      })
    },
    copy(){},
    editNote(e){
      wx.setStorageSync('editId', e.currentTarget.dataset.item.noteId)
      wx.navigateTo({
        url: '/pages/medit/medit',
      })
    },
    addnote(){
      wx.setStorageSync('editId', )
      wx.navigateTo({
        url: '/pages/medit/medit',
      })
    },
    refresh(){
      getLists(this.data.queryForm).then(res=>{
        this.setData({
          data:res.rows
        })
      })
    },
    getUserInfo(e){},
    closeDialog(){
      this.setData({
        cateDialog:false
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
      getLists(this.data.queryForm).then(res=>{
        this.setData({
          data:res.rows
        })
      })
    }
  },
  lifetimes:{
    created(){
      getLists(this.data.queryForm).then(res=>{
        console.log(res.rows);
        this.setData({
          data:res.rows
        })
      }),
      getCate().then(res=>{
        this.setData({
          columns:res.data.map(e=>e.classifyName)
        })
      })
    }
  }
})