import fly from '../utils/request'
export function getInfo(params){
  return fly.request({
    url: '/123',
    method:'post',
    params:params
  })
}

export function login(params){
  return fly.request({
    url: '/456',
    method:'post',
    header:{
      "Content-Type": "application/json;"
    },
    body:params
  })
}