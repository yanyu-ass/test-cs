<template>
  <div>
    <h1>Test</h1>
    <el-radio-group v-model="radio" @change="change">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="6">备选项</el-radio>
      <el-radio :label="9">备选项</el-radio>
    </el-radio-group>
   <div>
    <el-date-picker
      v-model="startDate"
      type="date"
      placeholder="开始日期"
      format="dd-MM-yyyy"
       value-format="yyyy-MM-dd"
    ></el-date-picker>

    <el-date-picker
      v-model="endDate"
      type="date"
      :disabled="!startDate"
      placeholder="结束日期"
      format="dd-MM-yyyy"
      value-format="yyyy-MM-dd"
      :picker-options="endPickerOptions"
    ></el-date-picker>
  </div>
  <button @click="cl">dd</button>
  </div>
</template>

<script>
export default {
  name: 'TestEl',
  data () {
    return {
      radio: '3',
      startDate: '',
      endDate: '',
      endPickerOptions: {
        disabledDate: time => {
          return (this.startDate && time.getTime() < new Date(this.startDate).getTime()) // 禁用开始日期之前的日期
        }
      }
    }
  },
  methods: {
    change (val) {
      console.log('val', val)
    },
    // formatStartDate () {
    //   this.startDate = this.formatDate(this.startDate)
    // },
    // formatEndDate () {
    //   this.endDate = this.formatDate(this.endDate)
    // },
    // formatDate (date) {
    //   if (!date) return ''
    //   const formattedDate = new Date(date)
    //   const year = formattedDate.getFullYear()
    //   const month = String(formattedDate.getMonth() + 1).padStart(2, '0')
    //   const day = String(formattedDate.getDate()).padStart(2, '0')
    //   return `${day}-${month}-${year}`
    // },
    cl () {
      console.log(this.startDate, this.endDate)
    }
  },
  computed: {
    // 写个监听radio的值的方法
    radioChange () {
      return this.radio
    }
  }
}
</script>

<style></style>
