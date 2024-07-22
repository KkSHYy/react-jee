import axios from "axios";
import { useEffect, useState } from "react";



export const useApiHooks = ({ api, query, id }) => {

  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();


  const getData = async () => {
    setLoad(true);
    try {
      const response = await axios.get(api, {
        params: {
          c: query ?? '',
          i: id ?? ''
        }
      });
      setLoad(false);
      setData(response.data);

    } catch (err) {
      setLoad(false);
      setErr(err?.message);

    }


  }


  useEffect(() => {
    getData();
  }, []);





  return [load, err, data]


}