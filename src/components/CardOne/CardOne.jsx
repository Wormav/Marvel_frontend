import axios from "../../config/axios.config";
import React, { useEffect, useState } from "react";

export default function CardOne({ id, type }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/api/one/${type}/${id}`);
        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, type]);

  return <div>CardOne</div>;
}
