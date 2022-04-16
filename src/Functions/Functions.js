import axios from "axios";

const getApiRequest = async (url) => {
  let response = [];
  let loading = true;
  let error = null;

  try {
    const res = await axios(url);
    response = res.data;
  } catch (e) {
    loading = false;
    error = e;
  }
  
  return {'data': response, 'loading': loading, 'error': error};
}

export default getApiRequest;