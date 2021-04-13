import "axios";
import axios from "axios";
import qs from "qs";
import { host } from '../../config/host.js'
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.defaults.headers.post['Content-Type'] = 'application/json';
const wyAxiosPost = function(url,data,callback){
    const relUrl = host + url;
    const relData =  qs.stringify(data);
    axios.post(relUrl,relData).then(function(res){
        if(res.status === 200){
            callback(res.data)
        }else{
            console.log("请求错误");
        }
    }).catch(function(error){
        console.log(error)
    })
}


export {wyAxiosPost}