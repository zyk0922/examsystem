import http from './http'
const imgUrl = (data={})=>http.post('/api/mini/upload',data)
export {
    imgUrl
}