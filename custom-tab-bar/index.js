Component({
  data: {
    selected: 0,
    Color:"black",
    selectedColor: "#7395DD",
    list: [
      {
        "pagePath": "/pages/mlist/mlist",
        "iconPath": "/images/mlist.png",
        "selectedIconPath": "/images/s_mlist.png",
        "text": "列表"
      },
      {
        "pagePath": "/pages/mcategory/mcategory",
        "iconPath": "/images/mcategory.png",
        "selectedIconPath": "/images/s_mcategory.png",
        "text": "分类"
      },
      {
        "pagePath": "/pages/mhistory/mhistory",
        "iconPath": "/images/mhistory.png",
        "selectedIconPath": "/images/s_mhistory.png",
        "text": "古今"
      },
      {
        "pagePath": "/pages/muser/muser",
        "iconPath": "/images/muser.png",
        "selectedIconPath": "/images/s_muser.png",
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})