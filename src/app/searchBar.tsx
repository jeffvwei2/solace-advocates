"use client"
import { useState, FormEvent } from "react";

interface SearchBarProps {
  handleSearch: (query: string) => void
    
}

export default function SearchBar({handleSearch}: SearchBarProps){
  const [searchTerm, setSearchTerm] = useState("")

  const handleReset = () => {
    setSearchTerm("")
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    handleSearch(searchTerm)
  }

  return (
    <div>
      <p>Search</p>
      <p>
          Searching for:
        </p>
        <form onSubmit={handleSubmit}>
          <input 
            style={{ border: "1px solid black" }}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            placeholder="Search"
          />
          <button type='submit'>Search</button>
          <button onClick={handleReset}>Reset</button>
        </form>
    </div>
  )
}