import instance from '../utils/request'

export function getCate(data){
  return instance({
    url:'/note-api/classify',
    method:'GET',
  })
}