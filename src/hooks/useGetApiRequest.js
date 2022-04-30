// ACTUALMENTE NO SE ESTA USANDO

import { useEffect, useState } from "react";
import axios from "axios";

export const useGetApiRequest = (url) => {
  const [data, setData] = useState({
    loading: false,
    error: null,
    data: null
  });

  useEffect(() => {
    useGetApiRequest();
  }, []);

  const useGetApiRequest = async () => {
    try {
      const response = await axios(url);
      setData({
        loading: true,
        error: null,
        data: response.data
      });      
    } catch (e) {
      setData({
        loading: false,
        error: e,
        data: null
      })
      console.log(e);
    }
  };

  return [data.data, data.loading, data.error];
}