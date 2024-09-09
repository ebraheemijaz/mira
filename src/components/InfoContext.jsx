import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";
import Loader from "./Loader";

const details = {
  website_name: "Mira Project Suppliers",
  phone: "0532942055",
  email: "info@miraprojectssupplier.com",
  address: "ss",
  navbar: [
    {
      name: "Electricity",
      child: [
        {
          name: "Cables",
          child: [
            { name: "Flexible cables", id: 1, images: [] },
            { name: "Flexible rubber cables", id: 2, images: [] },
            { name: "Specialized cables", id: 3, images: [] },
          ],
        },
        {
          name: "Low volatage <br/>cables",
          child: [
            {
              name: "Uninstall <br/>copper cables",
              id: "",
              images: [],
            },
            {
              name: "Green/Yellow <br/>Ground cables",
              id: "",
              images: [],
            },
            { name: "LSOH cables", id: "", images: [] },
            { name: "XLPE Cables", id: "", images: [] },
            { name: "STA Cables", id: "", images: [] },
            { name: "SWA Cables", id: "", images: [] },
          ],
        },
        {
          name: "Wires",
          child: [
            { name: "British NYA Specification", id: "", images: [] },
            { name: "NYA Wires-LSOH", id: "", images: [] },
            { name: "American AWG Specification", id: "", images: [] },
          ],
        },
        {
          name: "Interior lighting",
          child: [
            { name: "Pendant lighting", id: "", images: [] },
            { name: "Recessed lighting", id: "", images: [] },
            { name: "Bulbs", id: "", images: [] },
            { name: "Lighitng Strips", id: "", images: [] },
            { name: "Interior Spotlights", id: "", images: [] },
            { name: "Track Light", id: "", images: [] },
            { name: "volatage Coverters", id: "", images: [] },
            { name: "Lighting Unit", id: "", images: [] },
          ],
        },
        {
          name: "Exterior lighting",
          child: [{ name: "Exterior Spotlights", id: "", images: [] }],
        },
        {
          name: "Low volatage <br/>pannel and <br/>circuit  breakers",
          child: [
            { name: "Circuit Breaker", id: "", images: [] },
            { name: "Motor protection device", id: "", images: [] },
            { name: "Electrical panels", id: "", images: [] },
          ],
        },
        {
          name: "Switches and Sockets",
          child: [],
        },
      ],
    },
    {
      name: "Plumbing",
      child: [
        { name: "Plumbing Tools", child: [] },
        { name: "Plumbing supply", child: [] },
        { name: "Floor drains", child: [] },
        { name: "Air Conditioning <br/>Accessories", child: [] },
        {
          name: "Plumbing Finishes",
          child: [{ name: "Water heater", id: "", images: [] }],
        },
      ],
    },
  ],
  product: {
    1: {
      name: "Flexible cables",
      description: "Flexible cables description",
      images: [
        "fibercables1.webp",
        "fibercables2.webp",
        "fibercables3.webp",
        "fibercables4.webp",
      ],
    },
  },
};

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
