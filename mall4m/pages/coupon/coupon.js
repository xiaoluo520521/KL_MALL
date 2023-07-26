Page({
  data: {
    active: 0,
  },

  // 选项卡切换事件
  onChange(event) {
    this.setData({
      active: event.detail.index,
    });
  },
});
