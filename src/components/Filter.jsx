function Filter({ category, setCategory, categories }) {
    return (
        <div className="filter-box">
            <select
                className="filter-select"
                value={category}
                onChange={(event) =>
                    setCategory(event.target.value)
                }
            >
                <option value="">All Categories</option>

                {categories.map((category) => {
                    return (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default Filter;