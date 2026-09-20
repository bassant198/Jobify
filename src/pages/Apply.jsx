import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

function Apply() {
    const [searchParams] = useSearchParams();

    const jobId = searchParams.get("job");

    const [job, setJob] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cv: "",
        coverLetter: "",
    });

    useEffect(() => {
        fetch("https://remotive.com/api/remote-jobs")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                return response.json();
            })
            .then((data) => {
                const foundJob = data.jobs.find(
                    (job) => String(job.id) === String(jobId)
                );

                setJob(foundJob);
            });
    }, [jobId]);

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.cv ||
            !formData.coverLetter
        ) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Application submitted successfully!");
    }

    return (
        <main className="page">
            <div className="container">
                <div className="apply-form">

                    <h1 className="page-title">
                        Apply for a Job
                    </h1>

                    {job && (
                        <p className="page-subtitle">
                            Applying for: <strong>{job.title}</strong>
                        </p>
                    )}

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label htmlFor="name">
                                Full Name
                            </label>

                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">
                                Email
                            </label>

                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="cv">
                                CV Link
                            </label>

                            <input
                                id="cv"
                                name="cv"
                                type="url"
                                value={formData.cv}
                                onChange={handleChange}
                                placeholder="https://..."
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="coverLetter">
                                Cover Letter
                            </label>

                            <textarea
                                id="coverLetter"
                                name="coverLetter"
                                value={formData.coverLetter}
                                onChange={handleChange}
                                placeholder="Write your cover letter..."
                                rows="7"
                            />
                        </div>

                        <button
                            type="submit"
                            className="apply-button"
                        >
                            Submit Application
                        </button>

                    </form>
                </div>
            </div>
        </main>
    );
}

export default Apply;