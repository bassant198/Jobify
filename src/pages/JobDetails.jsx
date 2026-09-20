import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

function JobDetails() {
    const { id } = useParams();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("https://remotive.com/api/remote-jobs?limit=100")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                return response.json();
            })
            .then((data) => {
                const foundJob = data.jobs.find(
                    (job) => String(job.id) === String(id)
                );

                setJob(foundJob);
                setLoading(false);
            })
            .catch(() => {
                setError(true);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="status">Loading...</div>;
    }

    if (error) {
        return <div className="status">Something went wrong</div>;
    }

    if (!job) {
        return <div className="status">Job not found.</div>;
    }

    return (
        <main className="page">
            <div className="container">
                <div className="job-details">

                    <Link to="/jobs" className="back-link">
                        ← Back to Jobs
                    </Link>

                    <h1>{job.title}</h1>

                    <p className="company">
                        {job.company_name}
                    </p>

                    <div className="job-details-info">
                        <span className="detail-item">
                            {job.category}
                        </span>

                        <span className="detail-item">
                            {job.job_type}
                        </span>

                        <span className="detail-item">
                            {job.candidate_required_location}
                        </span>

                        <span className="detail-item">
                            {job.salary || "Salary not specified"}
                        </span>
                    </div>

                    <div className="job-description-full">
                        <h2>Job Description</h2>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: job.description,
                            }}
                        />
                    </div>

                    <Link
                        to={`/apply?job=${job.id}`}
                        className="apply-button"
                    >
                        Apply for this Job
                    </Link>

                </div>
            </div>
        </main>
    );
}

export default JobDetails;