import Vue from 'vue'
import moment from 'moment'
// filter全局化
Vue.filter('parseActors', (arr) => {
  if (arr) {
    let tmp = ''
    arr.forEach((item) => {
      tmp += item.name + ' '
    })
    return tmp
  } else {
    return '暂无'
  }
})

// 时间处理
Vue.filter('parseTime',(time)=>{
  moment.locale('zh-cn')
  return moment(parseInt(time*1000)).format('ddd M月D日')
})
export default Vue