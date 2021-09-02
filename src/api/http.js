import axios from 'axios'
const baseUrl = ''
// const baseUrl='http://121.42.230.80/'
const request = (method,url,params,data) =>{
    let p = new Promise((resolve,reject)=>{
        axios({
            method:method,
            url:baseUrl+url,
            params:params,
            data:data,
            headers:{},
        }).then((res)=>{
            resolve(res,data)
        }).catch((error)=>{
            reject(error)
        })
    });
    return p
}
const get =(url,params)=>request('get',url,params,null);
const post=(url,data)=>request('post',url,null,data);
export default{
    get,post
}