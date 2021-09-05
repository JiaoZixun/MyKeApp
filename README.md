# MyKeApp

一个课程表小程序：

> 用户可以增添删除课程，在课表页面查看

问题：

课程增加页面中增加课程信息view后，选择器信息不能准确显示。（已解决）

方法：

```js
//每次拿到的数据为二维数组，[课程名称，教室，老师姓名，周数（数组），节数（数组），时间]
//外层view打开全部数组数据，每一个Courses为上述二维数组
<view wx:for="{{CourseDetail}}" wx:for-index="idx" wx:for-item="Courses">
    
//在picker选择器中打开周数数组，放到之前填写过的选择器中
<!--周数，滑轮选择-->
    <view class="weui-cell__hd">
      <picker mode="multiSelector" bindchange="WeekbindMultiPickerChange" 
      value="{{Courses[3]}}" range="{{WeekmultiArray}}" wx:if="{{Courses[3]}}" >//if控制当前是否为原始数据
        <view class='weui-cell weui-cell_active'>
          <view class="picker" >
              周数：{{WeekmultiArray[0][Courses[3][0]]}}，{{WeekmultiArray[1][Courses[3][1]]}}
          </view>
        </view>
      </picker>
      <picker mode="multiSelector" bindchange="WeekbindMultiPickerChange" 
      value="{{WeekmultiIndex}}" range="{{WeekmultiArray}}" wx:else>
        <view class='weui-cell weui-cell_active'>
          <view class="picker">
              周数：{{WeekmultiArray[0][WeekmultiIndex[0]]}}，{{WeekmultiArray[1][WeekmultiIndex[1]]}}
          </view>
        </view>
      </picker>
    </view>
```

