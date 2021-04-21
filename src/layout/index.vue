
<template>
    <div>
        <div class="header"></div>
        <div class="container" >
            <div class="left" :style="{height: windowH+'px'}">
                <overlay-scrollbars ref="osComponentRef" :style="{height: windowH+'px'}">
                    <app-nav />
                </overlay-scrollbars>
            </div>
            <div class="right" :style="{height: windowH+'px'}">
                <overlay-scrollbars ref="osComponentRef" :style="{height: windowH+'px',padding: '20px'}">
                    <router-view></router-view>
                </overlay-scrollbars>
            </div>
        </div>
    </div>
</template>


<script>
import Nav from './nav.vue'
export default {
    name: 'Layout',
    components:{
        "app-nav": Nav
    },
    data(){
        return {}
    },
    computed:{
        windowH:function(){
            return this.$store.state.windowH - 60;
        }
    }
}
</script>

<style scoped>

    .header{
        width: 100%;
        height: 60px;
        background: #333333;
    }
    .container{
        width: 100%;
        display: flex;
    }
    .left{
        flex: 0 0 200px;
        background: rgba(84, 92, 100, 1);
    }
    .right{
        flex: 1 1 auto;
    }
</style>