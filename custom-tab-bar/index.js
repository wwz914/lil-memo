Component({
  data: {
    selected: 0,
    selectedColor: "#7395DD",
    list: [
      {
        "pagePath": "/pages/mlist/mlist",
        "text": "列表",
        "iconPath": "/images/mlist.png",
        "selectedIconPath": "/images/s_mlist.png"
      },
      {
        "pagePath": "/pages/mcategory/mcategory",
        "text": "分类",
        "iconPath": "/images/mcategory.png",
        "selectedIconPath": "/images/s_mcategory.png"
      },
      {
        "pagePath": "/pages/mhistory/mhistory",
        "text": "古今",
        "iconPath": "/images/mhistory.png",
        "selectedIconPath": "/images/s_mhistory.png"
      },
      {
        "pagePath": "/pages/muser/muser",
        "text": "我的",
        "iconPath": "/images/muser.png",
        "selectedIconPath": "/images/s_muser.png"
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