<template>
  <div>
    <InputS v-model="obj"></InputS>
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
      obj: {}
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
