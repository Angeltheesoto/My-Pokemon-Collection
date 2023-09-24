import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const MyContext = React.createContext();

export function MyProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=1292";
      try {
        const res = await axios.get(apiUrl);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
}

export function useMyContext() {
  return useContext(MyContext);
}
