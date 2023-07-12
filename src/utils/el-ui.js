import Vue from 'vue'
import { Button, Row, Radio, RadioGroup, DatePicker } from 'element-ui'
const list = [Button, Row, Radio, RadioGroup, DatePicker]
list.forEach(item => {
  Vue.use(item)
})
