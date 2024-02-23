import { useState, useEffect } from "react";

const useGetData = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/upload", {
          method: "GET",
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setDataInfo(data.Questions || []);
      } catch (error) {
        console.log("Error loading topics: ", error);
      }
    };

    fetchData();
  }, []);

  return dataInfo;
};

export default useGetData;
