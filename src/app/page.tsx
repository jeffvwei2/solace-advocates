"use client";

import { useEffect, useState } from "react";
import { Advocate } from "./types";
import SearchBar from "./searchBar";
import AdvocateTable from "./advocateTable";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const handleSearch = (searchTerm: string) => {
    console.log("filtering advocates...");
    const filteredAdvocates = advocates.filter((advocate:Advocate) => {
      return (
        advocate.firstName.includes(searchTerm) ||
        advocate.lastName.includes(searchTerm) ||
        advocate.city.includes(searchTerm) ||
        advocate.degree.includes(searchTerm) ||
        advocate.specialties.includes(searchTerm)
      );
    });

    setFilteredAdvocates(filteredAdvocates);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1>Solace Advocates</h1>
      <SearchBar handleSearch={handleSearch} />
      <AdvocateTable advocates={filteredAdvocates} />
    </main>
  );
}
