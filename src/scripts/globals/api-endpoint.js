import CONFIG from './config';

const API_ENDPOINT = {
  default_page: `${CONFIG.GET_API_LIST}`,
  detail: (id) => `${CONFIG.GET_DETAIL_API}${id}`,
};

export default API_ENDPOINT;
