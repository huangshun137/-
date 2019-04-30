/**
 * 新闻相关api
 */
import * as API from '.'

export default {

  getNewsList: params => {
    return API.GET('/api/v1/news', params)
  },

  aboutusUpdate: (id, params) => {
    return API.POST(`/api/v1/aboutus/${id}`, params)
  }

}
