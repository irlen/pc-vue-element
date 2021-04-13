
export default {
    state: {
        windowH: 0
    },
    mutations: {
        //修改windowH
        windowHReducer(state,params){
            state.windowH = params;
        }
    },
    actions: {
        changeWindowH(context,params){
            let {commit} = context;
            commit('windowHReducer',params);

        }
    }
}

