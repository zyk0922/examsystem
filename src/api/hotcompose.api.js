import http from './http'
// 推荐套餐
const hotcompose = (params={})=>http.get('/api/hotcompose',params)
// 体检套餐
const hotcomposelist = (params={})=>http.get('/api/compose/list',params)
// 套餐分类
const cat = (params={})=>http.get('/api/cate/compose',params)
// 套餐详情
const packageshow = (params={})=>http.get('/api/compose/show',params)
// 套餐详情-适用机构
const packageshowchain = (params={})=>http.get('/api/compose/show/otherchain',params)
export {
    hotcompose,hotcomposelist,cat,packageshow,packageshowchain
}