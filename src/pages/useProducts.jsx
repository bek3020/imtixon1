import { useEffect, useState } from "react";
import axios from "axios";

export const useProducts = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://68fb6f6994ec9606602607d5.mockapi.io/imtixon12")
      .then((res) => {
        const data = res.data[0];

        setNewProducts(data?.newProducts || []);
        setBestProducts(data?.bestProducts || []);

        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { newProducts, bestProducts, loading };
};
