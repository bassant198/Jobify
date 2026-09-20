import JobCard from "../components/JobCard";

function SavedJobs({ savedJobs, toggleSavedJob }) {
    return (
        <main className="page">
            <div className="container">
                <h1 className="page-title">Saved Jobs</h1>

                <p className="page-subtitle">
                    Jobs you saved for later.
                </p>

                {savedJobs.length === 0 ? (
                    <div className="status">
                        No saved jobs yet.
                    </div>
                ) : (
                    <div className="jobs-grid">
                        {savedJobs.map((job) => {
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

export default SavedJobs;