import { Link } from "react-router";

function Home() {
    return (
        <main className="home">
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-text">
                        <h1>
                            Find Your
                            <span> Dream Job</span>
                        </h1>

                        <p>
                            Discover remote jobs from companies around the
                            world and find the opportunity that's right for you.
                        </p>

                        <div className="hero-buttons">
                            <Link to="/jobs" className="primary-button">
                                Browse Jobs
                            </Link>

                            <Link to="/about" className="secondary-button">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="section-heading">
                        <h2>Why Jobify?</h2>
                        <p>
                            Everything you need to find your next opportunity.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🔎</div>
                            <h3>Find Jobs</h3>
                            <p>
                                Search through remote opportunities and find
                                jobs that match your skills.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💼</div>
                            <h3>Remote Opportunities</h3>
                            <p>
                                Discover jobs from companies hiring remotely
                                around the world.
                            </p>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🔖</div>
                            <h3>Save Jobs</h3>
                            <p>
                                Keep track of interesting jobs and come back to
                                them later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;