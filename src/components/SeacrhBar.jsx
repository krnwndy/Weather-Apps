import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("")

    const handleSubmit = (e) => {
        e.prevetDefault()
        if (city.trim()=== "") {
            onSearch (city)
            setCity("")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder='Masukkan nama kota'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button type='submit'>Cari</button>
        </form>
    )
}

export default SearchBar;