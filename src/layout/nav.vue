<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
                :default-active="active"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
            >
                <el-submenu v-for="(item,index) of navList" :key="index" :index="item.index">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item v-for="(subItem,subIndex) of item.children" :key="subIndex" :index="subItem.index">
                        <router-link tag="li" :to="subItem.path">{{subItem.title}}</router-link>
                    </el-menu-item>
                </el-submenu>

            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
    import { navList } from './navList.js'
    export default ({
        name: 'Nav',
        data(){
            return {
                navList,
                active: "/app/productManage"
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        mounted(){
            const active = this.$route.path;
            this.active = active;
        }
    })
</script>

<style scoped>
    .el-menu-vertical-demo{
        border-right: none;
    }

</style>
