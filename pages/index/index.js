//index.js
//获取应用实例
const app = getApp()
const classify = require('../../data/classify')
const recommend = require('../../data/food')
const merchant = require('../../data/merchant')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    types: classify.data,
    recommend: recommend.data,
    merchant: merchant.data
  },

  onLoad: function () {
    
  }
})
