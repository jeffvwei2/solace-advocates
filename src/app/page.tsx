"use client";

import { useEffect, useState } from "react";
import { Advocate } from "./types";
import SearchBar from "./searchBar";
import AdvocateTable from "./advocateTable";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);

  useEffect(() => {
    handleInitialFetch()
  }, []);

  const handleInitialFetch = async () => {
    const response =  await fetch("/api/advocates")
    const { data } = await response.json()
    setAdvocates(data)
    setFilteredAdvocates(data)
  }

  const handleSearch =  async (searchTerm: string) => {
    if(!searchTerm) {
      setFilteredAdvocates(advocates)
      return
    }
    
    console.log("filtering advocates...", searchTerm);

    const response = await fetch("/api/advocates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchTerm })
    })
    const {data} = await response.json()

    setFilteredAdvocates(data);
  };

  return (
    <main className="m-2">
      <h1 className="m-4 text-4xl text-gray-900 md:text-5xl lg:text-6xl text-center">Solace Advocates</h1>
      <SearchBar handleSearch={handleSearch} />
      <AdvocateTable advocates={filteredAdvocates} />
    </main>
  );
}
