import { useEffect, useState } from "react";

export const useFetch = (API) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRequest = async () => {
      const res = await fetch(API);
      const data = await res.json();
      setData(data);
    };
    getRequest();
  }, [API]);

  return { data };
};