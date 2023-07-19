import Vue from 'vue'
import { Col, CheckboxGroup, Option, Button, Row, Radio, RadioGroup, DatePicker, Transfer, Form, FormItem, Input, Select, Checkbox, Switch, TimePicker } from 'element-ui'
const list = [Option, Col, CheckboxGroup, Button, Row, Radio, RadioGroup, DatePicker, Transfer, Form, FormItem, Input, Select, Checkbox, Switch, TimePicker]
list.forEach(item => {
  Vue.use(item)
})
