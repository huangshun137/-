/**
 * 数据相关api
 */
import * as API from '.'

export default {

  //查询获取book列表(通过page分页)
  findList: params => {
    return API.GET('/api/v1/data', params)
  },

  aboutus: params => {
    return API.GET('/api/v1/data/aboutus', params)
  },
  aboutusUpdate: (id, params) => {
    return API.POST(`/api/v1/data/aboutus/${id}`, params)
  },

  //查询获取一条book信息
  findById: id => {
    return API.GET(`/api/v1/data/${id}`)
  },

  add: params => {
    return API.POST(`/api/v1/data`, params)
  },
  update: (id, params) => {
    return API.PUT(`/api/v1/data/${id}`, params)
  },

  //单个删除book
  remove: id => {
    return API.DELETE(`/api/v1/data/${id}`)
  },

  //批量删除，传ids数组
  removeBatch: (ids) => {
    return API.DELETE(`/api/v1/data/batch/${ids}`)
  }

}
