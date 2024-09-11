import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import Loader from "./Loader";
import details from "../data.json";

export const DetailsContect = createContext();

export default function InfoContext({ children }) {
  const [loader, setLoading] = useState(true);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
  }, []);

  useEffect(() => {
    if (lang === "AR") {
      document.body.setAttribute("dir", "rtl");
    } else {
      document.body.setAttribute("dir", "ltr");
    }
  }, [lang]);

  return (
    <DetailsContect.Provider value={{ ...details, lang, setLang }}>
      {loader && <Loader />}
      {!loader && children}
    </DetailsContect.Provider>
  );
}
