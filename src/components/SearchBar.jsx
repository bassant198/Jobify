function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
                className="search-input"
                value={searchTerm}
                onChange={(event) =>
                    setSearchTerm(event.target.value)
                }
                placeholder="Search jobs, companies..."
            />
        </div>
    );
}

export default SearchBar;