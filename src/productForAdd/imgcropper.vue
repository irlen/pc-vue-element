<template>
    <div>
        <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :auto-upload="false"
            :on-change="imageStatusChange"
        >
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        <vueCropper
            ref="cropper"
            :img="imgOption.img"
            :outputSize="imgOption.size"
            :outputType="imgOption.outputType"
        ></vueCropper>
    </div>
    
</template>

<script>
import { VueCropper } from 'vue-cropper'
    export default ({
        name: "ImgCropper",
        components: { VueCropper },
        data() {
            return {
                dialogImageUrl: '',
                dialogVisible: false,
                imgOption:{
                    img: "/haha.png",
                    size: 23,
                    outputType:"png"
                },
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            imageStatusChange(file){
                const status = file.status;
                if(status === "ready"){
                    return 'haha'
                }
            }
        }
    })

</script>

<style scoped>


</style>
