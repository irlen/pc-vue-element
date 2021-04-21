<template>
    <div>
        <div style="border-bottom: #eeeeee solid 1px; padding-bottom: 20px;display: flex;">
            <div class="btnLeft">
                <el-select
                v-model="value"
                multiple
                filterable
                remote
                reserve-keyword
                placeholder="请输入搜索关键词"
                :remote-method="remoteMethod"
                :loading="loading">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </div>
            <div class="btnRight">
                <el-button type="primary" @click="toAdd">添加</el-button>
                <el-button type="danger" >删除</el-button>
            </div>
        </div>
        <div>
            <el-table
                :data="tableData"
                style="width: calc(100% - 20px)"
                @selection-change="handleSelectionChange"
                stripe
            > 
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="商品ID：">
                                <span>{{ props.row.productId }}</span>
                            </el-form-item>
                            <el-form-item label="库存：">
                                <span>{{ props.row.productStock }}</span>
                            </el-form-item>
                            <el-form-item label="标准价格：">
                                <span>{{ props.row.productPrice }}</span>
                            </el-form-item>
                            <el-form-item label="折扣价：">
                                <span>{{ props.row.discountPrice }}</span>
                            </el-form-item>
                            <el-form-item label="商品颜色：">
                                <span>{{ props.row.productColor?props.row.productColor:"-" }}</span>
                            </el-form-item>
                            <el-form-item label="商品尺寸：">
                                <span>{{ props.row.productSize?props.row.productSize:"-" }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
            
                <el-table-column
                    type="index"
                    :index="indexMethod"
                >
                </el-table-column>
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>

                <el-table-column
                    prop="productName"
                    label="名称"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="subName"
                    label="所属类目"
                    show-overflow-tooltip
                >
                </el-table-column>
                <el-table-column
                    prop="tradeCount"
                    label="成交量"
                    show-overflow-tooltip
                    sortable
                >
                </el-table-column>
                <el-table-column
                    label="上架状态"
                    show-overflow-tooltip
                    :filters="[{ text: '已上架', value: 1 }, { text: '未上架', value: 0 }]"
                    :filter-method="filterSellStatus"
                >
                    <template slot-scope="scope">
                        <span style="margin-left: 10px" :class="isSelling(scope.row.sellStatus)">
                        {{ 
                            scope.row.sellStatus === 0?
                            "未上架"
                            :
                            "已上架" 
                        }}</span>
                    </template>
                </el-table-column>
                
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[20, 50, 100, 200]"
            :page-size="20"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
        </el-pagination>
    </div>
</template>

<script>
    import { wyAxiosPost } from '../utils/wyAxios/index.js'
    export default({
        name:"ProductManage",
        data(){
            return {
                tableData: [],
                multipleSelection:[]
            }
        },
        mounted(){
            wyAxiosPost('/product/getAllProduct',{},(res)=>{
                this.tableData= res.data;
            })
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit(index,row){
                console.log(index,row)
            },
            handleDelete(index,row){
                console.log(index,row)
            },
            indexMethod(index) {
                return index + 1;
            },
            isSelling(param){
                return {
                    selling: param === 1,noSelling: param === 0
                }
            },
            filterSellStatus(value,row){
                return row.sellStatus === value;
            },
            //分页相关
             handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },

            //添加相关
            toAdd(){
                let routeUrl = this.$router.resolve({
                    path: "/productForAdd"
                });
                window.open(routeUrl.href, '_blank');
            }
        }
    })
</script>


<style scoped>
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .selling {
        color: #009900;
    }
    .noSelling {
        color:#777777;
    }
    .btnLeft {
        flex: 1 1 auto;
    }
    .btnRight {
        flex: 0 0 160px;
    }
    
</style>