<template>
    <div>
        <div class="add_content">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="商品名称" prop="productName">
                    <el-input v-model="ruleForm.productName" style="width: 60%;"></el-input>
                </el-form-item>
                <el-form-item label="所属类目" prop="categoryId">
                    <el-cascader
                        placeholder="商品类目，可搜索"
                        :options="options"
                        filterable
                        v-model="ruleForm.categoryId"
                    >
                    </el-cascader>
                </el-form-item>
                <el-form-item label="标准价格" prop="productPrice" >
                    <el-input v-model.number="ruleForm.productPrice" style="width: 20%;"></el-input> 元
                </el-form-item>
                <el-form-item label="折扣价格" prop="discountPrice">
                    <el-input v-model.number="ruleForm.discountPrice" style="width: 20%;"></el-input> 元
                </el-form-item>
                <el-form-item label="上架状态" prop="sellStatus">
                    <el-switch v-model="ruleForm.sellStatus" active-value=1 inactive-value=0 ></el-switch>
                </el-form-item>
                <el-form-item label="商品库存" prop="productStock">
                    <el-input-number v-model="ruleForm.productStock" :min="0" ></el-input-number>
                </el-form-item>
                <el-form-item label="颜色形态" prop="productColor">
                    <el-input v-model="ruleForm.productColor"  placeholder="不用显示出来就不要写" style="width: 60%;"></el-input>
                </el-form-item>
                <el-form-item label="尺寸规格" prop="productSize">
                    <el-input v-model="ruleForm.productSize" placeholder="不用显示出来就不要写" style="width: 60%;"></el-input>
                </el-form-item>
            </el-form>
            <ImgCropper />
            
        </div>
        <div class="btns">
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </div>
    </div>
</template>

<script>
    import { wyAxiosPost } from '../utils/wyAxios/index.js'
    import _ from 'lodash'
    import ImgCropper from './imgcropper.vue'
    
    export default ({
        name: "ProductForAdd",
        components:{ ImgCropper },
        data(){
            return {
                options:[],//商品类目
                ruleForm: {
                    productName: '',
                    categoryId: '',
                    productPrice: '',
                    discountPrice: '',
                    sellStatus: 0,
                    productStock: 0,
                    productColor: '',
                    productSize: ''
                },
                rules: {
                    productName: [
                        { required: true, message: '请输入产品名称', trigger: 'blur' }
                    ],
                    categoryId: [
                        { required: true, message: '请选择类目', trigger: 'blur' }
                    ],
                    productPrice: [
                        { required: true, message: '请填写价格', trigger: 'blur' },
                        { type: 'number', message: '必须为数字',trigger: 'blur'}
                    ],
                    discountPrice: [
                        { required: true, message: '请填写价格', trigger: 'blur' },
                        { type: 'number', message: '必须为数字',trigger: 'blur'}
                    ],
                    sellStatus: [
                        { required: true, trigger: 'blur' }
                    ],
                    productStock: [
                        { required: true, message: '请填写库存', trigger: 'blur' },
                        { type: 'number', message: '必须为数字',trigger: 'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        const sdata = _.cloneDeep(this.ruleForm);
                        sdata.subCategoryId = sdata.categoryId[1];
                        sdata.categoryId = sdata.categoryId[0];
                        const data = JSON.stringify(sdata);
                        wyAxiosPost('/product/insertAProduct',{data},(res)=>{
                            if(res.code === 0){
                                this.$message.error('抱歉，提交失败');
                            }
                            return
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        },
        mounted(){
            const title = document.querySelector('title');
            title.innerHTML = "添加商品"
            wyAxiosPost('/category/getAllCategory',{},(res)=>{
                if(res.code === 1){
                    this.options = res.data
                }else{
                    console.log("获取类目失败")
                }
            })
        }
    })
    
</script>

<style scoped>
    .add_content{
        padding: 20px;
        padding-bottom: 60px;
    }
    .btns{
        position: fixed;
        bottom: 0px;
        background: #eeeeee;
        height: 60px;
        line-height: 60px;
        width: 100%;
        text-align: right;
        padding-right: 40px;
        box-shadow: 0px -1px 5px #cccccc;
    }
</style>