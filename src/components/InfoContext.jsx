import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import Loader from "./Loader";
import details from "../data.json";

export const DetailsContect = createContext();

export default function InfoContext({ children }) {
  const [loader, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  return (
    <DetailsContect.Provider value={details}>
      {loader && <Loader />}
      {!loader && children}
    </DetailsContect.Provider>
  );
}
