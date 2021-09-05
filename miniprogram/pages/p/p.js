// pages/p/p.js
Page({
  data:{
    /**存储数据 */
    CourseDetail:[],
    CourseNums: 0,
    coursename:'',
    classroom:'',
    teacher:'',
    week:[0,0],
    section:[0,0,0],
    classtime:'',
    saveflag:true,
    /*选择器列表 */
    WeekmultiArray: [['第一周', '第二周', '第三周', '第四周', '第五周','第六周', '第七周', '第八周', '第九周', '第十周','第十一周', '第十二周', '第十三周', '第十四周', '第十五周','十六周'], ['第一周', '第二周', '第三周', '第四周', '第五周','第六周', '第七周', '第八周', '第九周', '第十周','第十一周', '第十二周', '第十三周', '第十四周', '第十五周','十六周']],
    WeekmultiIndex: [0, 0],
    SectionmultiArray: [['星期一', '星期二','星期三','星期四','星期五','星期六','星期日'], ['第一节', '第二节', '第三节', '第四节', '第五节','第六节', '第七节', '第八节', '第九节', '第十节','第十一节', '第十二节'], ['第一节', '第二节', '第三节', '第四节', '第五节','第六节', '第七节', '第八节', '第九节', '第十节','第十一节', '第十二节']],
    SectionmultiIndex: [0, 0, 0],
    time:'9:00',
  },
  /**保存课程信息到CourseNums数组中 */
  AddCourseNums() {
    if(this.data.CourseDetail.length<1){
      wx.showModal({
        title: '提示',
        content: '请先添加课程！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    else{
      var linshi = []
      var CourseDetail = this.data.CourseDetail
      var length = CourseDetail.length
      linshi.push(this.data.coursename)
      linshi.push(this.data.classroom)
      linshi.push(this.data.teacher)
      linshi.push(this.data.week)
      linshi.push(this.data.section)
      linshi.push(this.data.classtime)
      CourseDetail[length-1] = linshi
      this.setData({
        CourseDetail:CourseDetail,
        saveflag:true
      })
      console.log(linshi)
      console.log(CourseDetail)
    }
    
  },
  /**添加课程信息 */
  AddCourse() {
    var PreCourses = this.data.CourseDetail;
    var that = this;
    var CourseNums = this.data.CourseNums
    CourseNums += 1
    if(this.data.saveflag==false){
      wx.showModal({
        title: '提示',
        content: '请先保存！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    if(this.data.saveflag==false){
      that.AddCourseNums()
    }
    PreCourses.push([])
    this.setData({
      CourseDetail:PreCourses,//保存,初始化
      coursename:'',
      classroom:'',
      teacher:'',
      week:[0,0],
      section:[0,0,0],
      classtime:'',
      saveflag:false,
      CourseNums,
    })
  },
  
  /**删除课程信息 */
  DeleteCourse(e) {
    var that = this
    var Course  = this.data.CourseDetail;//课程细节表
    var nowIdx = this.data.CourseDetail.length//当前view的长度
    var CourseNums = this.data.CourseNums
    CourseNums -= 1
    if(nowIdx<1){
      wx.showModal({
        title: '提示',
        content: '不能再减少了！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }
    else if(Course[Course.length-1]==null){
      this.AddCourseNums()//每次先将当前存储的信息存入课程细节表
    }
    Course.splice(nowIdx-1,1);//删掉细节表中最后一个
    if (Course.length < 1) {
      Course = []
    }
    this.setData({
      CourseDetail:Course,
      saveflag:true,
      CourseNums
    })
    console.log(this.data.CourseDetail)
  },
  /**保存课程名称 */
  InputCourseName(e) {
    var coursename = e.detail.value;
    //var coursenames = this.data.coursenames;
    //coursenames = coursenames.concat(coursename);
    this.setData({
      coursename
    })
    console.log(coursename)
    //console.log(coursenames)
  },
  /**保存教室 */
  InputClassRoom(e) {
    var classroom = e.detail.value;
    //var classrooms = this.data.classrooms;
    //classrooms = classrooms.concat(classroom);
    this.setData({
      classroom
    })
    console.log(classroom)
    //console.log(classrooms)
  },
  /**保存教师姓名 */
  InputTeacher(e) {
    var teacher = e.detail.value;
    this.setData({
      teacher
    })
    console.log(teacher)
  },
  /**保存周数 */
  WeekbindMultiPickerChange(e) {
    //var week = this.data.week
    this.setData({
      week:e.detail.value,
      //WeekmultiIndex:e.detail.value
    })
    console.log(this.data.week)
    console.log(this.data.WeekmultiIndex)
  },
  /**保存节数 */
  SectionbindMultiPickerChange(e) {
    var section = this.data.section
    this.setData({
      section:e.detail.value,
      //SectionmultiIndex:this.data.section
    })
    console.log(section)
  },
  /**保存上课时间 */
  ClassTimebindTimeChange(e) {
    var classtime = this.data.classtime
    this.setData({
      classtime :e.detail.value,
      //time:this.data.classtime
    })
    console.log(classtime)
  },
  /**提交保存到数据库 */
  submit_save() {

  },
  /**
   * 页面的初始数据
   */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})