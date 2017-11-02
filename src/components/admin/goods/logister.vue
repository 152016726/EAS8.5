<template>
<div class="tmpl">
    <el-form :model="form" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="user_name">
    <el-input type="password" v-model="form.user_name" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="form.password" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="checkPass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="手机" prop="mobile">
    <el-input v-model="form.mobile"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="form.email"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
    <el-button @click="resetForm">重置</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
    export default {
        data() {
            var checkPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.form.password) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            var checkMobile = (rule, value, callback) => {
                var reg = /^13[0-9]{9}|15[012356789][0-9]{8}|18[0256789][0-9]{8}|147[0-9]{8}$/;
                if (!reg.test(value)) {
                    return callback(new Error('手机号码格式错误'));
                }
                callback();
            }

            var checkEmail = (rule, value, callback) => {
                // 定义一个正则表达式
                var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
                // 匹配用户输入的值
                if (!reg.test(value)) {
                    return callback(new Error('email格式错误'));
                }
                callback();
            };
            return {
                form: {
                    user_name: '',
                    password: '',
                    checkPass: '',
                    mobile: '',
                    email: ''
                },
                rules: {
                    user_name: [{
                        required: true,
                        message: '请输入活动用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入活动用户名',
                        trigger: 'blur'
                    }],
                    checkPass: [{
                        validator: checkPass,
                        trigger: 'blur'
                    }],
                    mobile: [
                        // 手机号码一定是格式要正确
                        {
                            validator: checkMobile,
                            trigger: 'blur'
                        }
                    ],
                    email: [
                        // 
                        {
                            validator: checkEmail,
                            trigger: 'blur'
                        }
                    ]
                }

            }
        },
        methods: {
            submitForm() {
                this.$refs["ruleForm"].validate((valid) => {
                    if (valid) {
                        this.$http.post("/site/account/register", this.form).then(res => {
                            if (res.data.status == 1) {
                                this.$message.error(res.data.message);
                                return;
                            }
                            this.$message.success(res.data.message);
                        })
                    } else {
                        this.$message.error("信息验证不通过");
                        return false;
                    }
                })
            },
            resetForm() {
                this.$refs["ruleForm"].resetFields();
            }
        }
    }
</script>
<style scoped>

</style>