"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Discoveries from "./discoveries";

export default function Section() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/mrtechnostart/Myspy_Backend/main/data.json"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Create an object to store discoveries based on persona
  const discoveriesByPersona = {};

  // Process the data and organize discoveries by persona
  data.forEach((item) => {
    const persona = item.persona;
    const discovery = {
      header: item.projectName,
      desc: item.desc,
      childDesc: item.minDesc,
      hrefTo: item.hrefto,
    };

    if (!discoveriesByPersona[persona]) {
      discoveriesByPersona[persona] = [discovery];
    } else {
      discoveriesByPersona[persona].push(discovery);
    }
  });

  return (
    <div className="min-h-screen">
      {Object.keys(discoveriesByPersona).map((persona, index) => (
        <div key={index}>
          <h2 className="scroll-m-20 text-center mb-10 text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight first:mt-0">
            {persona}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto w-2/3">
            {discoveriesByPersona[persona].map((element, index) => (
              <div key={index}>
                <Discoveries
                  header={element.header}
                  desc={element.desc}
                  childDesc={element.childDesc}
                  hrefTo={element.hrefTo}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
