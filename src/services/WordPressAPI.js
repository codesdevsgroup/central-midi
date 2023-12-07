import { useState, useEffect } from 'react';
import axios from 'axios';

const useWordPressAPI = (endpoint, params = {}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://projeto.codesdevs.com/wp-json/wp/v2/${endpoint}`, {
          params: { ...params },
        });

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, params]);

  return { data, loading, error };
};

export default useWordPressAPI;
