import instance from '../utils/request'

export function getLists(data){
  return instance({
    url:'/note-api/note',
    method:'GET',
    data
  })
}