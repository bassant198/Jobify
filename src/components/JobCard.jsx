import { useState } from "react";
import { Link } from "react-router";

function JobCard({ job, savedJobs, toggleSavedJob }) {
    const [imageError, setImageError] = useState(false);

    const isSaved = savedJobs.some(
        (savedJob) => savedJob.id === job.id
    );

    return (
        <article className="job-card">
            <div>
                <div className="job-card-header">
                    {!imageError && job.logo ? (
                        <img
                            src={job.logo}
                            alt={job.company_name}
                            className="company-logo"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="company-logo-fallback">
                            {job.company_name?.charAt(0).toUpperCase()}
                        </div>
                    )}

                    <div>
                        <h3>{job.title}</h3>

                        <p className="company">
                            {job.company_name}
                        </p>
                    </div>
                </div>

                <div className="job-meta">
                    <span className="job-tag">
                        {job.category}
                    </span>

                    <span className="job-tag">
                        {job.job_type}
                    </span>

                    <span className="job-tag">
                        {job.candidate_required_location}
                    </span>
                </div>

                <p className="job-description">
                    {job.description
                        ?.replace(/<[^>]*>/g, "")
                        .slice(0, 150)}
                    ...
                </p>
            </div>

            <div>
                <button
                    type="button"
                    className="save-button"
                    onClick={() => toggleSavedJob(job)}
                >
                    {isSaved ? "★ Saved" : "☆ Save Job"}
                </button>

                <Link
                    className="details-button"
                    to={`/jobs/${job.id}`}
                >
                    View Details
                </Link>
            </div>
        </article>
    );
}

export default JobCard;