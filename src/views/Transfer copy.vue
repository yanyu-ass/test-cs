<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input class="hd" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input class="hd" v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <div class="date">
      <div class="date">
        <p>开始日期</p>
        <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="开始日期"
          format="dd-MM-yyyy"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </div>
      <div class="date">
        <p>结束日期</p>
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
      <div class="date">
        <p>开始日期</p>
        <div class="sj">
          <el-date-picker
            v-model="startDate2"
            type="date"
            placeholder="开始日期"
            format="dd-MM-yyyy"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
      </div>
      <div class="date">
        <p>结束日期</p>
        <el-date-picker
          v-model="endDate2"
          type="date"
          :disabled="!startDate"
          placeholder="结束日期"
          format="dd-MM-yyyy"
          value-format="yyyy-MM-dd"
          :picker-options="endPickerOptions2"
        ></el-date-picker>
      </div>
    </div>
    <div>
      <InputS v-model="ins"></InputS>{{ins}}
    </div>
  </div>
</template>

<script>
import InputS from '@/components/InputS.vue'
export default {
  name: 'TransferS',
  components: {
    InputS
  },
  data () {
    return {
      ins: 123,
      value: [1, 4],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      startDate: '',
      endDate: '',
      startDate2: '',
      endDate2: '',
      endPickerOptions: {
        disabledDate: (time) => {
          return (
            this.startDate &&
            time.getTime() < new Date(this.startDate).getTime()
          ) // 禁用开始日期之前的日期
        }
      },
      endPickerOptions2: {
        disabledDate: (time) => {
          return (
            this.startDate &&
            time.getTime() < new Date(this.startDate2).getTime()
          ) // 禁用开始日期之前的日期
        }
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.hd {
  width: 165px;
}
form {
  display: flex;
}
.el-form-item {
  margin-bottom: 22px;
  /* width: 175px; */
  /* margin-right: 52px; */
}
.date {
  display: flex;
  margin-top: 22px;
}
p {
  line-height: 42px;
  margin-right: 20px;
}
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 165px;
  margin-right: 20px;
}
</style>
