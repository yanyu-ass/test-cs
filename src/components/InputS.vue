<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input class="hd" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="名称">
        <el-input class="hd" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item >
        <div class="date">
        <p>开始日期</p>
        <el-date-picker
          v-model="form.startDate"
          type="date"
          placeholder="开始日期"
          format="dd-MM-yyyy"
          value-format="yyyy-MM-dd"
        ></el-date-picker>
      </div>
      <div class="date">
        <p>结束日期</p>
        <el-date-picker
          v-model="form.endDate"
          type="date"
          :disabled="!form.startDate"
          placeholder="结束日期"
          format="dd-MM-yyyy"
          value-format="yyyy-MM-dd"
          :picker-options="endPickerOptions"
        ></el-date-picker>
      </div>
      </el-form-item>
    </el-form>
    <div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TransferS',
  props: {
    value: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      ins: 123,
      form: {
        value: '',
        startDate: '',
        endDate: ''
      },
      endPickerOptions: {
        disabledDate: (time) => {
          return (
            this.startDate &&
            time.getTime() < new Date(this.form.startDate).getTime()
          ) // 禁用开始日期之前的日期
        }
      }
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.form)
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
  margin-top: 21px;
}
form {
  display: flex;
}
.el-form-item {
  margin-bottom: 22px;
  /* width: 175px; */
  /* margin-right: 52px; */
}
.el-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 85px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}
.date {
  display: flex;
  margin-top: 21px;
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
.el-form-item__content{
  display: flex;
}
</style>
