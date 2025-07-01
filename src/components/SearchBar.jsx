import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (city.trim() !== "") {
            onSearch (city)
            setCity("")
        }
    }
    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input 
                type="text"
                placeholder='Masukkan nama kota'
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="search-input"
            />
            <button type='submit' className="search-button">Cari</button>
        </form>
    )
}

export default SearchBar;