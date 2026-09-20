function About() {
    return (
        <main className="page">
            <div className="container">

                <section className="about-page">
                    <h1 className="page-title">
                        About Jobify
                    </h1>

                    <p className="page-subtitle">
                        Your place to discover remote job opportunities.
                    </p>

                    <div className="about-content">
                        <h2>What is Jobify?</h2>

                        <p>
                            Jobify is a remote job board that helps job seekers
                            discover opportunities from companies around the world.
                        </p>

                        <p>
                            You can search for jobs, filter them by category,
                            view detailed information, and save jobs for later.
                        </p>

                        <h2>What can you do?</h2>

                        <div className="about-features">
                            <div>
                                <h3>Search Jobs</h3>
                                <p>
                                    Find opportunities using the search feature.
                                </p>
                            </div>

                            <div>
                                <h3>Filter Jobs</h3>
                                <p>
                                    Browse jobs by category.
                                </p>
                            </div>

                            <div>
                                <h3>Save Jobs</h3>
                                <p>
                                    Save interesting jobs and access them later.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </main>
    );
}

export default About;