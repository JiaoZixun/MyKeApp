Page({
  
  data:{
    addGoods: [{}],
    name: '',
    jianshu: '',
    zhongliang: '',
    goodsName: '',
    goodsJianshu: '',
    goodsZhongliang: '',
    names: [],//货品名称数组
    jianshus: [],//件数数组
    zhongliangs: [],//重量数组
  },
// 添加
/* 
 addGoodsSub: util.throttle(function () {
   var old = this.data.addGoods;
   old.push(1);//这里不管push什么，只要数组长度增加1就行
   this.setData({
     addGoods: old
   })
 }),

 // 删除
 deletePrice: util.throttle(function (e) {
   that = this
   var oldArr = this.data.addGoods;//循环内容
   var nowIdx = e.currentTarget.dataset.index;//当前索引
   //所有的input值
   var names = that.data.names;
   var jianshus = that.data.jianshus;
   var zhongliangs = that.data.zhongliangs;
   oldArr.splice(nowIdx, 1);    //删除当前索引的内容，这样就能删除view了
   //view删除了对应的input值也要删掉
   names.splice(nowIdx + 1, 1);
   jianshus.splice(nowIdx + 1, 1);
   zhongliangs.splice(nowIdx + 1, 1);
   if (oldArr.length < 1) {
     oldArr = []  //如果循环内容长度为0即删完了 ,初始化
   }
   this.setData({
     addGoods: oldArr,
     names,
     jianshus,
     zhongliangs
   })
 }),

 // 添加货品中 input失去焦点获取数据
 bindinput(e) {
   var nowIdx = e.currentTarget.dataset.index;//获取当前索引
   var val = e.detail.value;//获取输入的值
   var names = this.data.names;
   names[nowIdx + 1] = val;//修改对应索引值的内容
   this.setData({
     names: names
   })
 },
 bindinput1(e) {
   var nowIdx = e.currentTarget.dataset.index;
   var val = e.detail.value;
   var jianshus = this.data.jianshus;
   jianshus[nowIdx + 1] = val;
   this.setData({
     jianshus
   })

 },
 bindinput2(e) {
   var nowIdx = e.currentTarget.dataset.index;
   var val = e.detail.value;
   var zhongliangs = this.data.zhongliangs;
   zhongliangs[nowIdx + 1] = val;
   this.setData({
     zhongliangs
   })
 },

 //先把固定货品添加数组中
 inputGoods(e) {
   var goodsName = e.detail.value;
   var names = this.data.names.concat(goodsName); //先把固定货品添加数组中
   this.setData({
     goodsName,
     names
   })
 },

 inputGoods1(e) {
   var jianshus = this.data.jianshus;
   var goodsJianshu = e.detail.value;
   jianshus = jianshus.concat(goodsJianshu);
   this.setData({
     goodsJianshu,
     jianshus
   })
 },

 inputGoods2(e) {
   var zhongliangs = this.data.zhongliangs;
   var goodsZhongliang = e.detail.value;
   zhongliangs = zhongliangs.concat(goodsZhongliang);
   this.setData({
     goodsZhongliang,
     zhongliangs
   })
 },
 */
})    
