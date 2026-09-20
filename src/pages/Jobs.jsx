import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";

function Jobs({ savedJobs, toggleSavedJob }) {
    const [jobs, setJob] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("https://remotive.com/api/remote-jobs")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                return response.json();
            })
            .then((data) => {
                setJob(data.jobs);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, []);

    const categories = [...new Set(
        jobs.map((job) => job.category)
    )];

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            category === "" || job.category === category;

        return matchesSearch && matchesCategory;
    });

    if (loading) {
        return <div className="status">Loading...</div>;
    }

    if (error) {
        return <div className="status">Something went wrong</div>;
    }

    return (
        <main className="page">
            <div className="container">

                <h1 className="page-title">
                    Find Your Next Job
                </h1>

                <p className="page-subtitle">
                    Discover remote opportunities and find your perfect role.
                </p>

                <div className="jobs-controls">
    <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
    />

    <Filter
        category={category}
        setCategory={setCategory}
        categories={categories}
    />
    <p className="jobs-count">
    {filteredJobs.length} jobs found
</p>
</div>

                {filteredJobs.length === 0 ? (
                    <div className="status">
                        No jobs found.
                    </div>
                ) : (
                    <div className="jobs-grid">
                        {filteredJobs.map((job) => {
                            return (
                                <JobCard
                                    key={job.id}
                                    job={job}
                                    savedJobs={savedJobs}
                                    toggleSavedJob={toggleSavedJob}
                                />
                            );
                        })}
                    </div>
                )}

            </div>
        </main>
    );
}

export default Jobs;