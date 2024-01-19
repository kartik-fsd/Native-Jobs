import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://jsearch.p.rapidapi.com/${endpoint}`, {
        headers: {
            'X-RapidAPI-Key': 'c43773484amshc0a584167be45e5p13c7eajsnd77ceec7b826',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: { ...query },
      });

      setData(response.data.data);
    } catch (error) {
      setError(error);
      console.error(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
