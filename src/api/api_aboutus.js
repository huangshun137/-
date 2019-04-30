/**
 * 关于我们相关api
 */
import * as API from '.'

export default {

  aboutus: params => {
    return API.GET('/api/v1/aboutus', params)
  },

  aboutusUpdate: (id, params) => {
    return API.POST(`/api/v1/aboutus/${id}`, params)
  }

}
