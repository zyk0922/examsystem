import http from './http'
// 推荐机构
const hothospital = (params={})=>http.get('/api/hothospital',params)
// 机构详情
const chaindetails = (params={})=>http.get('/api/chain/show',params)
// 机构详情套餐数据
const chaindetailsshow = (params={})=>http.get('/api/chain/list/compose',params)
// 机构列表
const chainlist = (params={})=>http.get('/api/chain/list',params)
export{
    hothospital,chaindetails,chaindetailsshow,chainlist
}